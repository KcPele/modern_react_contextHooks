import React, { createContext } from "react";
import useFetch from "../useFetch";

export const BlogContext = createContext();

const BlogContextProvider = props => {
  const { data: blogs, isPending, error } = useFetch(
    "http://localhost:8000/api-blogs/blogs/"
  );

  return (
    <BlogContext.Provider value={{ blogs, isPending, error }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
