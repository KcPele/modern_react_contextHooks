import Navbar from "./Navbar";
import Home from "./Home";
import BlogContextProvider from "./BlogContext/BlogContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreateBlog from "./components/CreateBlog";
import BlogDetails from "./components/BlogDetails";
function App() {
  return (
    <Router>
      <div className="App">
        <BlogContextProvider>
          <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
                <CreateBlog />
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails />
              </Route>
            </Switch>
          </div>
        </BlogContextProvider>
      </div>
    </Router>
  );
}

export default App;
