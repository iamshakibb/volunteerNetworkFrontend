import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import LogIn from "./Components/Login/LogIn";
import PrivateRouter from "./Components/PrivateRouter/PrivateRouter";
import Register from "./Components/Register/Register";
import SingleUserInfo from "./Components/SingleUserInfo/SingleUserInfo";

export const UserInfoContext = createContext();
function App() {
  const [userInfo, setUserInfo] = useState({
    isLogin: false,
    name: "",
    email: "",
    success: false,
    signupError: "",
  });

  useEffect(() => {
    const data = sessionStorage.getItem("user");
    if (data) {
      setUserInfo(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("user", JSON.stringify(userInfo));
  });
  return (
    <UserInfoContext.Provider value={{ userInfo, setUserInfo }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/logIn">
            <LogIn />
          </Route>
          <PrivateRouter path="/info">
            <SingleUserInfo />
          </PrivateRouter>
          <PrivateRouter path="/register/:heading">
            <Register />
          </PrivateRouter>
        </Switch>
      </Router>
    </UserInfoContext.Provider>
  );
}

export default App;
