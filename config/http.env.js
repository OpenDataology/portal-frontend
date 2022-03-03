import axios from "axios";
axios.defaults.baseURL = "http://{Server-IP}}/api/v1";
axios.interceptors.response.use(
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
/**
 * 获取所有的License数据
 * @param {String} url 
 * @param {Object} parms 
 * @returns 
 */
export const getLicenseDataAll = (data = {}) => {
    return axios.request({
        url: "/data-license",
        method: "get",
        params: data
    })
}

/**
 * 获取所有的Dataset数据
 * @param {String} url 
 * @param {Object} parms 
 * @returns 
 */
export const getDatasetDataAll = (data) => {
    return axios.request({
        url: "/dataset",
        method: "get",
        params: data
    })
}


/**
 * 
 * @param {object} data 
 * @returns 
 */
export const getDatasetBasic = (data) => {
    return axios.request({
        url: "/get_dataset_by_id",
        method: "get",
        params: data
    })
}

// export const getDatasetBasic = (url, parms = {}) => {
//     return new Promise((resolve, reject) => {
//         axios.get(`/get_dataset_by_id?${this.id}`).then(
//             (res) => {
//                 resolve(res.data);
//             },
//             (err) => {
//                 reject(err)
//             }
//         )
//     })
// }

/**
 * 
 * @param {object} data 
 * @returns 
 */
export const getLicenseBasicInfo = (data) => {
    return axios.request({
        url: "/get_license_basic_by_id",
        method: "get",
        params: data
    })
}

/**
 * 
 * @param {object} data 
 * @returns 
 */
export const getLicenseBasicDataTab = (data) => {
    return axios.request({
        url: "/get_license_data_by_id",
        method: "get",
        params: data
    })
}

/**
 * 
 * @param {object} data 
 * @returns 
 */
export const getLicenseBasicModleTab = (data) => {
    return axios.request({
        url: "/get_license_model_by_id",
        method: "get",
        params: data
    })
}

/**
 * 
 * @param {object} data 
 * @returns 
 */
export const getLicenseBasicOtherTab = (data) => {
    return axios.request({
        url: "/get_license_other_by_id",
        method: "get",
        params: data
    })
}