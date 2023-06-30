import React, { useEffect, useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Create from "./Pages/Create";
import Post from "./store/PostContext";

/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";
import { AuthContext, FirebaseContext } from "./store/FirebaseContext";
import ViewPost from "./Pages/ViewPost";

function App() {
  const { setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    // console.log(user)
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <div>
      <Post>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/viewpost" element={<ViewPost />} />
        </Routes>
      </Router>
      </Post>
    </div>
  );
}

export default App;
