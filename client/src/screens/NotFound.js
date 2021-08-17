import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function NotFound() {
  const user = useSelector((state) => state.user);
  const history = useHistory("");
  useEffect(() => {
    if (user.auth) {
      history.push("/");
    }
  }, [history, user.auth]);
  return <div>not found</div>;
}

export default NotFound;
