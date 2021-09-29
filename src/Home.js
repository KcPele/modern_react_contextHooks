import React, { useContext } from "react";
import BlogList from "./components/BlogList";
import { BlogContext } from "./BlogContext/BlogContext";

const Home = () => {
  const { blogs, isPending, error } = useContext(BlogContext);
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
