/*
api.js

Copyright (c) 2022 The OpenDataology Authors
All rights reserved.

SPDX-License-Identifier: Apache-2.0
*/



import axios from "./review.env";
// import axios from "axios";
export default {
  // query dataset graph data
  // queryDatasetGraph(params) {
  //   return axios({
  //     method: 'get',
  //     url: 'v1/mindinsight/datasets/dataset_graph',
  //     params: params,
  //   });
  // },
  dataUpload(data){
    return axios.request({
      url: "/user/dataset_review/review_upload",
      method: "post",
      data:data
    });
  },
  saveAIBOM(data){
    return axios.request({
      url: "/user/dataset_review/save_AIBOM",
      method: "post",
      data:data
    });
  },
  deleteAIBOM(data){
    return axios.request({
      url: "/user/dataset_review/remove_AIBOM",
      method: "post",
      data:data
    });
  },
  pendingAIBOM(params){
    return axios.request({
      url: "/user/dataset_review/pending_AIBOM",
      method: "get",
      params:{
        user_id:params.user_id,
      }
      // params: params
    });
  },
  submitAIBOM(data){
    return axios.request({
      url: "user/dataset_review/submit_AIBOM",
      method: "post",
      data:data
      // params: params
    });
  },
  uploadFiles(data){
    return axios.request({
      url: "/user/dataset_review/review_upload_by_file",
      method: "post",
      data:data,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  },
  getReviewedData(params){
    return axios.request({
      url: "/auth/dataset_review/review_result",
      method: "get",
      params: params
    });
  },
  downloadReviewedData(params){
    return axios.request({
      url: "/auth/dataset_review/review_result_download",
      method: "post",
      data: params,
    });
  },

  // inspect
  getReviewData(params){
    return axios.request({
      url: "/auth/dataset_review/pending_review",
      method: "get",
      // headers: { "Content-Type": "application/x-www-form-urlencoded" },
      params: {
        user_id:params,
      }
    });
  },
  getReviewDataForDatasetName(params) {
    return axios.request({
      url: "/auth/dataset_review/review_result_search_for_name",
      method: "post",
      // headers: { "Content-Type": "application/x-www-form-urlencoded" },
      // params: {
      // }
      data:{
        dataset_name: params.dataset_name,
      }
    });
  },
  saveTempReviewData(data){
    return axios.request({
      url: "/auth/dataset_review/save_review",
      method: "post",
      // headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data:data
    });
  },
  submitReviewData(data){
    return axios.request({
      url: "/auth/dataset_review/submit_review",
      method: "post",
      // headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data:data
    });
  },
  rejectReviewData(data){
    return axios.request({
      url: "/auth/dataset_review/reject_review",
      method: "post",
      // headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data:data
    });
  },
  getOverReviewData(params){
    return axios.request({
      url: "/auth/dataset_review/review_result",
      method: "get",
      // headers: { "Content-Type": "application/x-www-form-urlencoded" },
      params: {
        user_id:params,
      }
    });
  },
  downloadResultData(data){
    return axios.request({
      url: "/auth/dataset_review/review_result_download",
      method: "post",
      // headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data:data
    });
  },
  reviewResultCurRowDownLoad(data){
    return axios.request({
      url: "/auth/dataset_review/review_result_cur_row_download",
      method: "post",
      // headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data:data
    });
  },
  reviewResultCurSearchDownLoad(data){
    return axios.request({
      url: "/auth/dataset_review/review_result_cur_search_download",
      method: "post",
      // headers: { "Content-Type": "application/x-www-form-urlencoded" },
      data:data
    });
  }
}
// export const dataUpload = (data = {}) => {
//   return axios.request({
//     url: "/dataset_review/upload",
//     method: "post",
//     // headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     data:data
//   });
// };
