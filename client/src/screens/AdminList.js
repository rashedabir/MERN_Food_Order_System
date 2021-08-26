import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalState } from "../GlobalState";

function AdminList() {
  const state = useContext(GlobalState);
  const [admins] = state.adminAPI.admins;
  let count = 1;

  return (
    <div className="container">
      <div className="row my-3">
        <div className="col-lg-10">
          <h3 className="my-2">Admins</h3>
        </div>
        <div className="col-lg-2">
          <Link
            to="/addadmin"
            className="btn btn-success w-100 my-2 p-2 text-uppercase"
          >
            <i className="fas fa-plus mx-1"></i> add admin
          </Link>
        </div>
      </div>
      <div className="table-responsive mb-5 text-center">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Full Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {admins &&
              admins.map((admin) => (
                <tr>
                  <th scope="row">{count++}</th>
                  <td>{admin.fullName}</td>
                  <td>{admin.userName}</td>
                  <td>
                    <Link to="/updateadmin">Change Password</Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminList;
