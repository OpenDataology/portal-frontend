/*
review.env.js

Copyright (c) 2022 The OpenDataology Authors 
All rights reserved.

SPDX-License-Identifier: Apache-2.0
*/



import axios from "axios";
// export { default } from "axios"
// axios.defaults.baseURL = "http://{Server-IP}}/api/v1";
// axios.defaults.baseURL = "";
const ax = axios.create({
  baseURL:"http://{Server-IP}:port",
  timeout:5000,
  headers:{
    'Content-Type': "application/json; charset=utf-8"
  }
})
ax.interceptors.response.use(
    config => {
      if (config.status === 200) {

        return config.data;
      }
    },
    error => {
      error.message = '请求超时或服务器异常，请检查网络或联系管理员！'
      return Promise.reject(error)
    }
)
export default ax
