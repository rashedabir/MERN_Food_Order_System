import React from "react";

function DashboardCard({ value }) {
  return (
    <div className="col-sm-3 mb-3">
      <div className={value.class}>
        <div className="card-body">
          <h4 className="card-title text-capitalize pb-4">{value.name}</h4>
          <h2 className="float-end">{value.length}</h2>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard;
