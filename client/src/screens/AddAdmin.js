import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { GlobalState } from "../GlobalState";

function AddAdmin() {
  const state = useContext(GlobalState);
  const [token] = state.token;
  const [callback, setCallback] = state.adminAPI.callback;
  const [admins] = state.adminAPI.admins;
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [id, setId] = useState("");
  const [onEdit, setOnEdit] = useState(false);
  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      admins.forEach((admin) => {
        if (admin._id === params.id) {
          setOnEdit(true);
          setId(admin._id);
          setFullName(admin.fullName);
          setUserName(admin.userName);
          setCurrentPassword("");
          setPassword("");
          setRePassword("");
        }
      });
    } else {
      setOnEdit(false);
      setId("");
      setFullName("");
      setUserName("");
      setPassword("");
      setRePassword("");
    }
  }, [params.id, admins]);

  const handleAdmin = async (e) => {
    e.preventDefault();
    try {
      if (onEdit) {
        await axios.put(
          `/user/infor/${id}`,
          {
            userName,
            currentPassword,
            password,
            rePassword,
          },
          { headers: { Authorization: token } }
        );
        setId("");
        setFullName("");
        setUserName("");
        setCurrentPassword("");
        setPassword("");
        setRePassword("");
        setCallback(!callback);
        history.push("/admin");
        toast.success("Admin Updated");
      } else {
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
        setId("");
        setFullName("");
        setUserName("");
        setPassword("");
        setRePassword("");
        setCallback(!callback);
        history.push("/admin");
        toast.success("Admin Added");
      }
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  return (
    <div className="container">
      <div className="my-5 login text-center mx-auto">
        <form onSubmit={handleAdmin} className="border p-3">
          <h3 className="my-5">{onEdit ? "Update Admin" : "Add Admin"}</h3>
          <div class="form-floating mb-3">
            <input
              type="text"
              class="form-control"
              id="floatingInput"
              value={fullName}
              placeholder="Fullname"
              disabled={onEdit}
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
              disabled={onEdit}
              placeholder="Username"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            <label for="floatingInput">User Name</label>
          </div>
          {onEdit ? (
            <div class="form-floating mb-3">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                value={currentPassword}
                onChange={(e) => {
                  setCurrentPassword(e.target.value);
                }}
                placeholder="Current Password"
              />
              <label for="floatingPassword">Current Password</label>
            </div>
          ) : null}
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
            {onEdit ? "update" : "add"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddAdmin;
