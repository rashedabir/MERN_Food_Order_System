import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/login", {
        userName: userName,
        password: password,
      });
      window.location.href = "/";
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  return (
    <div className="container">
      <div className="login my-5 mx-auto py-5">
        <form
          onSubmit={formSubmit}
          className="shadow p-3 mb-5 rounded p-3 bg-light text-center m-auto"
        >
          <h3 className="text-center py-3 pb-4">Admin</h3>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              <i class="fas fa-user"></i>
            </span>
            <input
              type="text"
              class="form-control bs-green"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">
              <i class="fas fa-lock"></i>
            </span>
            <input
              type="password"
              class="form-control bs-green"
              placeholder="Password"
              aria-label="Password"
              aria-describedby="basic-addon1"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button className="btn btn-success my-3 px-4 py-2" type="submit">
            Logi in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
