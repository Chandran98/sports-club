import { jwtDecode } from "jwt-decode";
import React from "react";

const tokenexpired = () => {
  let token = localStorage.getItem("token");
if(token===null || token===undefined){
  return false;
}
  let decodedToken = jwtDecode(token);
  let currentDate = new Date();

  return decodedToken.exp * 1000 < currentDate.getTime() ? false : true;
};

export default tokenexpired;
