import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { GlobalState } from "../GlobalState";

function AddAdmin() {
  const state = useContext(GlobalState);
  const [token] = state.token;
  const [callback, setCallback] = state.adminAPI.callback;
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const history = useHistory();

  const handleAdmin = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "/user/register",
        {
          fullName,
          userName,
          password,
          rePassword,
        },
        { headers: { Authorization: token } }
      );
      setFullName("");
      setUserName("");
      setPassword("");
      setRePassword("");
      setCallback(!callback);
      history.push("/admin");
      toast.success("Admin Added");
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  return (
    <div className="container">
      <div className="my-5 login text-center mx-auto">
        <form onSubmit={handleAdmin} className="border p-3">
          <h3 className="my-5">Add Admin</h3>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              value={fullName}
              placeholder="Fullname"
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
            <label for="floatingInput">Full Name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              value={userName}
              placeholder="Username"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <label for="floatingInput">User Name</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div class="form-floating mb-3">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              value={rePassword}
              placeholder="Password"
              onChange={(e) => {
                setRePassword(e.target.value);
              }}
            />
            <label for="floatingPassword">Repeat Password</label>
          </div>
          <button
            type="submit"
            className="w-100 btn btn-secondary py-2 text-uppercase"
          >
            add
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddAdmin;
