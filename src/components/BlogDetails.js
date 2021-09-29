import { useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { useHistory } from "react-router-dom";
import axios from "axios";
const BlogDetails = () => {
  const history = useHistory();
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch(
    "http://localhost:8000/api-blogs/blogs/" + id
  );
  const handleClick = id => {
    let url = "http://localhost:8000/api-blogs/blogs/" + id;
    // fetch(url, {
    //   method: "DELETE"
    // }).then(() => {
    //   console.log("deleted the blog");
    //   history.push("/");
    // });
    axios.delete(url).then(() => {
      console.log("deleted the blog");
      history.push("/");
    });
  };
  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {error && <div> {error} </div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>
            Written by {blog.author} on the {blog.created_at}
          </p>
          <div>{blog.body}</div>
          <button onClick={() => handleClick(blog.id)}>Detele</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
