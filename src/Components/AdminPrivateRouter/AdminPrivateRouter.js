import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserInfoContext } from "../../App";

const AdminPrivateRouter = ({ children, ...rest }) => {
  const user = useContext(UserInfoContext);
  const { userInfo } = user;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        userInfo.isAdminLogin === true ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/admin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminPrivateRouter;
