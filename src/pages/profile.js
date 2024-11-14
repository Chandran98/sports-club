import React, { useEffect, useState } from "react";
//import { Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Select from "react-select";
import "../../src/i2.css";
import { zodResolver } from "@hookform/resolvers/zod";

import Navbar from "../components/Navbar";
import { useForm, Controller } from "react-hook-form";
import { kycFormSchema } from "../utils/formschema";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const inputBlog = [
  { label: "firstname" },
  { label: "lastname" },
  { label: "address" },
  { label: "phone" },
  // { label: "profession", value: "cricketer" },
];

const options2 = [
  { value: "1", label: "Select" },
  { value: "2", label: "Male" },
  { value: "3", label: "Female" },
  { value: "4", label: "Other" },
];

const options3 = [
  { value: "Cricket", label: "Cricket" },
  { value: "Volleyball", label: "Volleyball" },
  { value: "Kabbadi", label: "Kabbadi" },
  { value: "Hockey", label: "Hockey" },
  { value: "Basketball", label: "Basketball" },
];

const EditProfile = () => {
  const [data, setData] = useState(null);

  const [achievements, setAchievements] = useState([
    { title: "", description: "", image: null },
  ]);

  const handleAddAchievement = () => {
    setAchievements([
      ...achievements,
      { title: "", description: "", image: null },
    ]);
  };

  const handleChangeAchievement = (index, field, value) => {
    const updatedAchievements = achievements.map((achievement, i) =>
      i === index ? { ...achievement, [field]: value } : achievement
    );
    setValue("achievement", updatedAchievements);
    setAchievements(updatedAchievements);
  };
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: zodResolver(kycFormSchema) });

  const onSubmit = async (formData) => {
    // formData.append("fileKey", file);
    console.log("Form Data:", formData);
    // const formDataKey = new FormData();

    // formDataKey.append("proofname", "Aadharcard");

    // console.log("formDatasddsafa formData",formDataKey)

    console.log("sdfasdfadfsfs");
    try {
      console.log("sdfasfs");
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://back.kpl19.com/user/updateprofile",
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        data: formData,
      };
      console.log("formData", formData);
      axios
        .request(config)
        .then((response) => {
          console.log(response.data, "response.data");
          // setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log("sdfaf", error);
    }
  };

  async function handleKycChange(e, name) {
    console.log("dsa", e, name);
    const formData = new FormData();

    formData.append("thumbnail", e);
    const headers = {
      Authorization: localStorage.getItem("token"),
    };
    try {
      const data = await axios.post(
        "http://back.kpl19.com/user/upload-file",
        formData,
        headers
      );

      console.log("data.data", data?.data.data);

      setValue(name, data.data.data);
    } catch (error) {
      console.log("erere", error);
    }
  }

  useEffect(() => {
    try {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "http://back.kpl19.com/user/getprofile",
        headers: {
          Authorization: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      };

      axios
        .request(config)
        .then((response) => {
          setData(response.data);
          localStorage.setItem("userId", response.data.data._id);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log("getprofile err", error);
    }
  }, []);
  function handlechange(e) {
    e.preventDefault();
    console.log("e.target.files", e.target.files[0]);
    const eventData = new FormData();

    eventData.append("thumbnail", e.target.files[0]);
    console.log(eventData, "sasda");
    try {
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://back.kpl19.com/user/update-ProfilePic",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        data: eventData,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log("thumbnail eerr", error);
    }
  }

  function achievementshandlechange(i, e) {
    console.log("e.target.files", e.target.files[0]);
    const eventData = new FormData();

    eventData.append("thumbnail", e.target.files[0]);
    console.log(eventData, "sasda");
    try {
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://back.kpl19.com/user/update-ProfilePic",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
        data: eventData,
      };

      axios
        .request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          handleChangeAchievement(i, "image", response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log("thumbnail eerr", error);
    }
  }

  if (data?.data == undefined) {
    return <div></div>;
  }
  return (
    <>
      <Navbar />

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <section class="pb-4 h-auto bg-gray-50 mt-4 relative m-8 sm:py-16 lg:py-24">
        <h2 class=" text-3xl pl-5 font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
          User Profile
        </h2>

        <div className=" lg:flex  m-3 mt-12">
          <div className="col-xl-3 col-lg-4 pr-3">
            <div className="clearfix">
              <div className="card card-bx profile-card author-profile m-b30 p-3">
                {data !== null && data !== undefined && (
                  <div className="card-body">
                    <div className="p-5">
                      <div className="author-profile ">
                        <div className="author-media ">
                          <img
                            src={data?.data.ProfilePic}
                            alt=""
                            className="h-28 w-36"
                          />
                          <div
                            className="upload-link"
                            title=""
                            data-toggle="tooltip"
                            data-placement="right"
                            data-original-title="update"
                          >
                            <input
                              type="file"
                              className="update-flie"
                              onChange={handlechange}
                            />
                            <i className="fa fa-camera"></i>
                          </div>
                        </div>
                        <div className="author-info">
                          <h6 className="title">{data?.data.firstName}</h6>{" "}
                          <h6 className="title">{data?.data.lastName}</h6>
                          <span>{data?.data.email}</span>
                        </div>
                      </div>
                    </div>
                    <div className="info-list">
                      <ul>
                        <li>
                          <Link to={"/app-profile"}>Phone</Link>
                          <span>{data?.data.phone}</span>
                        </li>
                        <li>
                          <Link to={"/uc-lightgallery"}>Profession</Link>
                          <span>{data?.data.profession}</span>
                        </li>
                        <li>
                          <Link to={"/app-profile"}>Lessons</Link>
                          <span>{data?.data.city}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
                <div className="card-footer">
                  <div className="input-group mb-3">
                    <div className="form-control rounded text-center bg-white">
                      Portfolio
                    </div>
                  </div>
                  <div className="input-group">
                    <a
                      href="https://www.dexignzone.com/"
                      target="blank"
                      className="form-control text-primary rounded text-start bg-white"
                    >
                      https://www.dexignzone.com/
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="col-xl-12 col-lg-8">
              <div className="card profile-card card-bx m-b30">
                <div className="card-header">
                  <h6 className="title">Account setup</h6>
                </div>
                <form
                  className="profile-form"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="card-body">
                    <div className="row">
                      {inputBlog.map((item, ind) => (
                        <div className="col-sm-6 m-b30" key={ind}>
                          <label className="form-label">{item.label}</label>
                          <input
                            type="text"
                            className="form-control"
                            name={item.label}
                            {...register(item.label)}
                          />

                          {errors[[item.label.toLowerCase()]] && (
                            <span className="text-red-600 text-sm">
                              {errors[item.label.toLowerCase()].message}
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
                          onChange={(val) => setValue("gender", val.label)}
                        />
                        {errors.gender && (
                          <span className="text-red-600 text-sm">
                            {errors.gender.message}
                          </span>
                        )}
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
                        {errors.dob && (
                          <span className="text-red-600 text-sm">
                            {errors.dob.message}
                          </span>
                        )}
                      </div>

                      <div className="col-sm-6 m-b30">
                        <label className="form-label">Pin code</label>
                        <input
                          type="text"
                          className="form-control"
                          name="pincode"
                          {...register("pincode")}
                        />
                        {errors.pincode && (
                          <span className="text-red-600 text-sm">
                            {errors.pincode.message}
                          </span>
                        )}
                      </div>
                      <div className="col-sm-6 m-b30">
                        <label className="form-label">City</label>
                        <input
                          type="text"
                          className="form-control"
                          name="city"
                          {...register("city")}
                        />
                        {errors.city && (
                          <span className="text-red-600 text-sm">
                            {errors.city.message}
                          </span>
                        )}
                      </div>
                      <div className="col-sm-6 m-b30">
                        <label className="form-label">Country</label>
                        <input
                          type="text"
                          className="form-control"
                          name="country"
                          {...register("country")}
                        />
                        {errors.country && (
                          <span className="text-red-600 text-sm">
                            {errors.country.message}
                          </span>
                        )}
                      </div>

                      <div className="col-sm-6 m-b30">
                        <label className="form-label">Profession</label>

                        <Select
                          options={options3}
                          className="custom-react-select"
                          defaultValue={options3[0]}
                          isSearchable={false}
                          onChange={(val) => setValue("profession", val.label)}
                        />
                        {errors.profession && (
                          <span className="text-red-600 text-sm">
                            {errors.profession.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className=" ">
                    <div className="card-header">
                      <h6 className="title">KYC Proof</h6>
                    </div>
                    <div className="p-4 grid lg:grid-cols-2 grid-cols-2 gap-5">
                      <div>
                        <div>
                          <label
                            htmlFor="issueType"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Aadhar Card
                          </label>
                          <input
                            type="text"
                            id="subject"
                            {...register("proofnumber")}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />
                          {errors.proofnumber && (
                            <span className="text-red-600 text-sm">
                              {errors.proofnumber.message}
                            </span>
                          )}
                        </div>
                        <div className=" mt-3">
                          <div>
                            <label
                              htmlFor="image"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Front Image
                            </label>
                            <input
                              type="file"
                              id="image"
                              onChange={(e) =>
                                handleKycChange(e.target.files[0], "front")
                              }
                              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                            {errors.front && (
                              <span className="text-red-600 text-sm">
                                {errors.front.message}
                              </span>
                            )}
                          </div>
                          <div className="mt-4">
                            <label
                              htmlFor="image"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Back Image
                            </label>
                            <input
                              type="file"
                              id="image"
                              onChange={(e) =>
                                handleKycChange(e.target.files[0], "back")
                              }
                              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                            />
                            {errors.back && (
                              <span className="text-red-600 text-sm">
                                {errors.back.message}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <label
                            htmlFor="image"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Selfie
                          </label>
                          <input
                            type="file"
                            id="image"
                            onChange={(e) =>
                              handleKycChange(e.target.files[0], "selfie")
                            }
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />
                          {errors.selfie && (
                            <span className="text-red-600 text-sm">
                              {errors.selfie.message}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 
                  <div className=" ">
                    <div className="card-header">
                      <h6 className="title">Achievements</h6>
                    </div>
                    <div className="p-4 ">
                      <div>
                        <div>
                          <div className=" flex items-start mb-6 justify-between">
                            <label
                              htmlFor="image"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Achievements
                            </label>
                            <button
                              onSubmit={addmoreData}
                              className=" btn-primary text-white  rounded-md h-8 w-24"
                            >
                              add more
                            </button>
                          </div>
                          {achievementsData.map((e, i) => {
                            <div key={i}>
                              <div className=" flex">
                                <div className="col-sm-6 m-b30">
                                  <label className="form-label">Title</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="dd. mm .yyyy"
                                    name="dob"
                                    {...register("title")}
                                  />
                                </div>

                                <div className="col-sm-6 m-b30">
                                  <label className="form-label">
                                    Description
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="788799"
                                    name="pincode"
                                    {...register("description")}
                                  />
                                </div>
                              </div>
                              <input
                                type="file"
                                id="image"
                                onChange={(e) =>
                                  handleKycChange(
                                    e.target.files[0],
                                    "achievements"
                                  )
                                }
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                              />
                              {errors.selfie && (
                                <span className="text-red-600 text-sm">
                                  {errors.selfie.message}
                                </span>
                              )}
                            </div>;
                          })}
                        </div>
                      </div>
                    </div>
                  </div> */}

                  <div>
                    <div className="card-header">
                      <h6 className="title">Achievements</h6>{" "}
                      <button
                        className="btn-primary text-white rounded-md h-8 w-24 mt-4"
                        onClick={handleAddAchievement}
                      >
                        Add More
                      </button>
                    </div>
                    <div className="p-4">
                      {achievements.map((achievement, index) => (
                        <div key={index} className="mb-4 p-4 border rounded-lg">
                          <div className="flex items-start mb-6 justify-between">
                            <label className="block text-sm font-medium text-gray-700">
                              Achievement {index + 1}
                            </label>
                          </div>
                          <div className="flex gap-6">
                            <div className="col-sm-6 m-b30">
                              <label className="form-label">Title</label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                value={achievement.title}
                                onChange={(e) =>
                                  handleChangeAchievement(
                                    index,
                                    "title",
                                    e.target.value
                                  )
                                }
                              />
                            </div>

                            <div className="col-sm-6 m-b30">
                              <label className="form-label">
                                Certificate Image
                              </label>
                              <input
                                type="file"
                                id={`image-${index}`}
                                onChange={
                                  (e) => achievementshandlechange(index, e)

                                  // handleChange(index, 'image', e.target.files[0])
                                }
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                              />
                            </div>
                          </div>
                          <div className="col-sm-6 m-b30">
                            <label className="form-label">Description</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Description"
                              value={achievement.description}
                              onChange={(e) =>
                                handleChangeAchievement(
                                  index,
                                  "description",
                                  e.target.value
                                )
                              }
                            />
                          </div>
                        </div>
                      ))}
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
      </section>
    </>
  );
};
export default EditProfile;
