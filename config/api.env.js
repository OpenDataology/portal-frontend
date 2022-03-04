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

//Search

/**
 * 
 * @param {object} data 
 * @returns 
 */
export const getResultByLicense_name = (queryString) => {
    return axios.request({
        url: "/search_license_basic_by_name",
        method: "get",
        params: {
            token: Token,
            name:queryString

        }
    })
}



export const getResultByDataset_name = (queryString) => {
    return axios.request({
        url:"/search_dataset_by_name",
        method:"get",
        params:{
            token:Token,
            name:queryString
        }
    })
}


/**
 * 
 * @param {String} url 
 * @param {Object} parms 
 * @returns 
 */
 export const getTypeLicenseData = (data = {}) => {
    return axios.request({
        url: "/data-license",
        method: "get",
        params: {
            pageSize: data.pageSize,
            pageNum: data.pageNum,
            type:1,
            token: Token,
        },
    })
}


/**
 * 
 * @param {String} url 
 * @param {Object} parms 
 * @returns 
 */
 export const getTypeDataSpecificLicense = (data = {}) => {
    return axios.request({
        url: "/data-license",
        method: "get",
        params: {
            pageSize: data.pageSize,
            pageNum: data.pageNum,
            type:2,
            token: Token,
        },
    })
}



/**
 * 
 * @param {String} url 
 * @param {Object} parms 
 * @returns 
 */
 export const getTypeDataSourceTermsofUse = (data = {}) => {
    return axios.request({
        url: "/data-license",
        method: "get",
        params: {
            pageSize: data.pageSize,
            pageNum: data.pageNum,
            type:3,
            token: Token,
        },
    })
}



export const getResultByTypeLicense = (queryString) => {
    return axios.request({
        url: "/search_license_basic_by_name",
        method: "get",
        params: {
            token: Token,
            type:1,
            name:queryString

        }
    })
}

export const getResultByTypeDataSpecificLicense = (queryString) => {
    return axios.request({
        url: "/search_license_basic_by_name",
        method: "get",
        params: {
            token: Token,
            type:2,
            name:queryString

        }
    })
}


export const getResultByTypeDataSourceTermsofUse = (queryString) => {
    return axios.request({
        url: "/search_license_basic_by_name",
        method: "get",
        params: {
            token: Token,
            type:3,
            name:queryString

        }
    })
}