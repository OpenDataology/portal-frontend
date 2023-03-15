/*
api.js

Copyright (c) 2022 The OpenDataology Authors 
All rights reserved.

SPDX-License-Identifier: Apache-2.0
*/


import axios from "./aibom_generator.env";


export const getAIBOM = (source, link) => {
    return axios.request({
        url: "/" + source + "/dataset/load",
        method: "get",
        params: {
          datasetMainUrl: link,
          similarDatasets: "False"
        }
    })
}