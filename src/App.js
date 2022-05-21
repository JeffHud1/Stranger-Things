import React, {useState, useEffect} from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import { fetchCurrentUserData, fetchPosts } from "./api";
import {
  Posts,
  Login,
  Navbar,
  PostSubmissionForm,
  Mailbox
} from "./components";
import Register from "./components/Register";



function App() {
  const [action, setAction] = useState(true);
  const localStorageToken = localStorage.getItem("jwt");
  const [token, setToken] = useState(localStorageToken);
  const [posts, setPosts] = useState([]);
  const [userInfo, setUserInfo] = useState({});

  useEffect( () => {
    fetchPosts(setPosts, token);
    fetchCurrentUserData(setUserInfo, token);
    console.log("effect fired");
}, [token, action]);
  
  return (
      <div className="App" style={{backgroundColor:"#B0B0B0"}}>
        <Navbar token={token} setToken={setToken} setUserInfo={setUserInfo} userInfo={userInfo}/>
        <main>
          <Switch>
            <Route exact path="/">
              <Login setToken={setToken} setAction={setAction} action={action}/>
            </Route>
            <Route path="/register">
              <Register setToken={setToken} />
            </Route>
            <Route path="/posts">
              <Posts posts={posts} token={token} setAction={setAction} action={action}/>
            </Route>
            <Route path="/submit">
              <PostSubmissionForm token={token} setAction={setAction} action={action}/>
            </Route>
            <Route path="/profile">
              <Mailbox userInfo={userInfo} token={token} setAction={setAction} action={action}/>
            </Route>
          </Switch>
        </main>
      </div>
  );
}

export default App;

