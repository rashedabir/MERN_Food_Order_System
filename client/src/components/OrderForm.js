import React from "react";

function OrderForm({
  setName,
  setPhone,
  setAddress,
  name,
  phone,
  address,
  orderForm,
}) {
  return (
    <div className="order mx-auto border mt-2 rounded p-3 text-center">
      <h4 className="py-4">Order Details</h4>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="floatingInput"
          placeholder="Rashed Khan"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label for="floatingInput">Name</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="number"
          className="form-control"
          id="floatingInput"
          placeholder="01629341869"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <label for="floatingInput">Phone</label>
      </div>
      <div className="form-floating mb-3">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style={{ height: "100px" }}
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        ></textarea>
        <label for="floatingTextarea2">Address</label>
      </div>
      <button
        onClick={() => {
          orderForm();
        }}
        className="btn order_btn text-white w-100"
      >
        order
      </button>
    </div>
  );
}

export default OrderForm;
