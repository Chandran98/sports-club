import React from "react";

import Select from "react-select";

import { useForm } from "react-hook-form";

const Modal = ({ isOpen, onClose, title, children }) => {
  const inputBlog = [
    { label: "Name", value: "John" },
    { label: "Surname", value: "Brahim" },
    // { label: "Specialty", value: "Developer" },
    { label: "Address", value: "Chennai" },
  ];

  const options2 = [
    { value: "1", label: "Select" },
    { value: "2", label: "Male" },
    { value: "3", label: "Female" },
    { value: "4", label: "Other" },
  ];
  const options3 = [
    { value: "1", label: "Russia" },
    { value: "2", label: "Canada" },
    { value: "3", label: "China" },
    { value: "4", label: "India" },
  ];
  const options4 = [
    { value: "1", label: "Krasnodar" },
    { value: "2", label: "Tyumen" },
    { value: "3", label: "Chelyabinsk" },
    { value: "4", label: "Moscow" },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="  ">
      <div className=" mt-64 inset-0 z-50 justify-center items-center flex">
        <div className="col-xl-9 col-lg-8">
          <div className="card profile-card card-bx ">
            <div className="card-header flex mr-10">
              <h6 className="title">Account setup</h6>

              <div onClick={onClose} className="title">
                close
              </div>
            </div>
            <form className="profile-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="card-body">
                <div className="row">
                  {inputBlog.map((item, ind) => (
                    <div className="col-sm-6 m-b30" key={ind}>
                      <label className="form-label">{item.label}</label>
                      <input
                        type="text"
                        className="form-control"
                        name={item.label}
                        defaultValue={item.value}
                        {...register(item.label)}
                      />
                      {errors[item.label.toLowerCase()] && (
                        <span className="text-red-600 text-sm">
                          This field is required
                        </span>
                      )}
                    </div>
                  ))}

                  <div className="col-sm-6 m-b30">
                    <label className="form-label">Gender</label>
                    <Select
                      options={options2}
                      className="custom-react-select"
                      defaultValue={options2[0]}
                      isSearchable={false}
                    />
                  </div>
                  <div className="col-sm-6 m-b30">
                    <label className="form-label">Birth</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="dd. mm .yyyy"
                      name="dob"
                      {...register("dob")}
                    />
                  </div>
                  <div className="col-sm-6 m-b30">
                    <label className="form-label">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="+123456789"
                      name="Phone"
                      {...register("Phone")}
                    />
                  </div>
                  <div className="col-sm-6 m-b30">
                    <label className="form-label">Email address</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="demo@gmail.com"
                      name="email"
                      {...register("email")}
                    />
                  </div>

                  <div className="col-sm-6 m-b30">
                    <label className="form-label">Pin code</label>
                    <input
                      type="text"
                      className="form-control"
                      defaultValue="788799"
                      name="pincode"
                      {...register("pincode")}
                    />
                  </div>
                  <div className="col-sm-6 m-b30">
                    <label className="form-label">State</label>
                    <Select
                      options={options3}
                      className="custom-react-select"
                      defaultValue={options3[0]}
                      isSearchable={false}
                    />
                  </div>
                  <div className="col-sm-6 m-b30">
                    <label className="form-label">City</label>
                    <Select
                      options={options4}
                      className="custom-react-select"
                      defaultValue={options4[0]}
                      isSearchable={false}
                    />
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary">UPDATE</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
