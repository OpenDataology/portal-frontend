import axios from "./https.env"
import { Token } from "./https.env"
/**
 * 
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
 * 
 * @param {object} data 
 * @returns 
 */
 export const getLicenseBasicInfo = (data) => {
    return axios.request({
        url: "/get_license_basic_by_id",
        method: "get",
        // params: data
        params: {
           id: data.id,
           token: Token,
        },
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
        // params: data
        params: {
            id: data.id,
            token: Token,
         },
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
        params: {
            id: data.id,
            token: Token,
         },
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
        params: {
            id: data.id,
            token: Token,
         },
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
 * 
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
            token: Token,

        }
    })
}
