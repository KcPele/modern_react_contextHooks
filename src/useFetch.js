import { useState, useReducer, useEffect } from "react";
import { blogReducer, pendingReducer } from "./BlogReducer/BlogReducer";

import { GET_BLOG, IS_PENDING } from "./types/types";

const useFetch = url => {
  const [data, dispatchData] = useReducer(blogReducer, null);
  const [isPending, dispatchPending] = useReducer(pendingReducer, true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    setInterval(() => {
      fetch(url, { signal: abortCont.signal })
        .then(res => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resours");
          }
          return res.json();
        })

        .then(data => {
          dispatchData({
            type: GET_BLOG,
            payload: data
          });
          dispatchPending({
            type: IS_PENDING,
            payload: false
          });
          setError(null);
        })
        .catch(err => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setError(err.message);
            dispatchPending({
              type: IS_PENDING,
              payload: false
            });
          }
        });
    }, 2000);
    return () => abortCont.abort();
  }, [url]);
  return { data, isPending, error };
};
export default useFetch;
