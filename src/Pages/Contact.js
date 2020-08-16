import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const Contact = () => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    mobileNo: "",
    message: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return { ...preVal, [name]: value };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    // alert("Hell");
    toast("Successfully Submitted..", { type: "success" });
    setData({
      fullName: "",
      email: "",
      mobileNo: "",
      message: "",
    });
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullName"
                  value={data.fullName}
                  onChange={InputEvent}
                  placeholder="Full Name"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="mobileNo"
                  value={data.mobileNo}
                  onChange={InputEvent}
                  placeholder="Mobile Number"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                  rows="3"
                  required
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit
                </button>
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
