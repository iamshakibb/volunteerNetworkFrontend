import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AddEvent from "./Components/AddEvent/AddEvent";
import AdminLogin from "./Components/AdminLogin/AdminLogin";
import AdminPrivateRouter from "./Components/AdminPrivateRouter/AdminPrivateRouter";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Home/Home";
import LogIn from "./Components/Login/LogIn";
import PrivateRouter from "./Components/PrivateRouter/PrivateRouter";
import Register from "./Components/Register/Register";
import SingleUserInfo from "./Components/SingleUserInfo/SingleUserInfo";
import UsersInfo from "./Components/UsersInfo/UsersInfo";

export const UserInfoContext = createContext();

function App() {
  // setting the user info state
  const [userInfo, setUserInfo] = useState({
    isAdminLogin: false,
    isLogin: false,
    name: "",
    email: "",
    success: false,
    signupError: "",
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

          <Route path="/admin">
            <AdminLogin />
          </Route>

          <AdminPrivateRouter path="/dashboard/admin">
            <Dashboard />
          </AdminPrivateRouter>

          <AdminPrivateRouter path="/usersInfo/dashboard">
            <UsersInfo />
          </AdminPrivateRouter>

          <AdminPrivateRouter path="/addEvent/dashboard">
            <AddEvent />
          </AdminPrivateRouter>

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
