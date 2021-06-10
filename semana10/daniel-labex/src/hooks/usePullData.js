import axios from "axios";
import { useEffect, useState } from "react";


const usePullData = (url, body, headers) => {
  //   let data = {}
  // const postData = () => {
  //   axios
  //     .post(url, body, headers)
  //     .then((res) => {
  //       data = res.data;
  //       console.log(data)
  //       console.log(res.data, "res.data")
  //     })
  //     .catch((err) => alert(err.response.data.message));
  // };
  // useEffect(() => {
  //   postData();
  // }, []);
  // console.log(data, "data")
  // return data;
};

export default usePullData;