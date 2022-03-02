import axios from "./http.env"
import { Token } from "./http.env"
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
        params: {
            pageSize: data.pageSize,
            pageNum: data.pageNum,
            token: Token,
        },
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

/**
 * 
 * @param {object} data 
 * @returns 
 */
export const getLoadLicenseAll = (data) => {
    return axios.request({
        url: "/data-license",
        method: "get",
        params: {
            data: data,
            token: Token

        }
    })
}


/**
 * 获取所有的Dataset数据
 * @param {String} url 
 * @param {Object} parms 
 * @returns 
 */
export const getLoadDatasetAll = (data) => {
    return axios.request({
        url: "/dataset",
        method: "get",
        params: {
            data: data,
            token: '2f6b61b197c846f2c3da8efea0b37b6d3353d7fbc8acaca0ff9f03d3980794ec',

        }
    })
}
