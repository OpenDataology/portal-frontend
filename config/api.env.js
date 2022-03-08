import axios from "./https.env"
import { Token } from "./https.env"





/**
 * API 2.1 List all the dataset licenses
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

//API 2.1.1 List all the dataset licenses TypeLicense

export const getTypeLicenseData = (data = {}) => {
    return axios.request({
        url: "/data-license",
        method: "get",
        params: {
            pageSize: data.pageSize,
            pageNum: data.pageNum,
            type: 1,
            token: Token,
        },
    })
}


//API 2.1.2 List all the dataset licenses TypeDataSpecificLicense

export const getTypeDataSpecificLicense = (data = {}) => {
    return axios.request({
        url: "/data-license",
        method: "get",
        params: {
            pageSize: data.pageSize,
            pageNum: data.pageNum,
            type: 2,
            token: Token,
        },
    })
}



//API 2.1.3 List all the dataset licenses TypeDataSourceTermsofUse

export const getTypeDataSourceTermsofUse = (data = {}) => {
    return axios.request({
        url: "/data-license",
        method: "get",
        params: {
            pageSize: data.pageSize,
            pageNum: data.pageNum,
            type: 3,
            token: Token,
        },
    })
}

/**
 *API 2.2 Get basic info of dataset license by ID
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


// /**
//  *API 2.3 Get basic info of dataset license by Name
//  * @param {object} data 
//  * @returns 
//  */
//  export const getLicenseBasicInfo = (data) => {
//     return axios.request({
//         url: "/get_license_basic_by_id",
//         method: "get",
//         // params: data
//         params: {
//             id: data.id,
//             token: Token,
//         },
//     })
// }


// /**
//  *API 2.4 Search basic info of dataset license by Name
//  * @param {object} data 
//  * @returns 
//  */
// export const getResultByLicense_name = (queryString) => {
//     return axios.request({
//         url: "/search_license_basic_by_name",
//         method: "get",
//         params: {
//             token: Token,
//             name:queryString

//         }
//     })
// }


/**
 *API 2.5 Get data info of dataset license by ID
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
 *API 2.6 Get model info of dataset license by ID
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
 *API 2.7 Get other info of dataset license by ID
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



//2.8 Add license info

/**
 *API 3.1 List all the metadata of datasets
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
 *API 3.2 Get metadata of dataset license by ID
 * @param {object} data 
 * @returns 
 */
export const getDatasetMetaData = (data) => {
    return axios.request({
        url: "/get_dataset_by_id",
        method: "get",
        params: data
    })
}


//3.3 Get metadata of dataset license by Name



// /**
//  *API 3.4 Search metadata of dataset license by Name
//  * @param {object} data 
//  * @returns 
//  */
// export const getResultByDataset_name = (queryString) => {
//     return axios.request({
//         url:"/search_dataset_by_name",
//         method:"get",
//         params:{
//             token:Token,
//             name:queryString
//         }
//     })
// }



/**
 *API 3.5 Get index of dataset license
 * @param {*} data 
 * @returns 
 */

export const getResultLicenseIndex = (data) => {
    return axios.request({
        url: "/get_license_index",
        method: "get",
        params: {
            token: Token,
        }
    })
}
//3.5.1 Get index of dataset license TypeLicense
export const getResultTypeLicense = (data) => {
    return axios.request({
        url: "/get_license_index",
        method: "get",
        params: {
            type: 1,
            token: Token,
        }
    })
}
//3.5.2 Get index of dataset license TypeDataSpecificLicense
export const getResultTypeDataSpecificLicense = (data) => {
    return axios.request({
        url: "/get_license_index",
        method: "get",
        params: {
            type: 2,
            token: Token,
        }
    })
}

//3.5.3 Get index of dataset license TypeDataSourceTermsofUse
export const getResultTypeDataSourceTermsofUse = (data) => {
    return axios.request({
        url: "/get_license_index",
        method: "get",
        params: {
            type: 3,
            token: Token,
        }
    })
}




/**
 *API 3.6 Get index of dataset
 * @param {*} queryString 
 * @returns 
 */

export const getResultDatasetIndex = (data) => {
    return axios.request({
        url: "/get_dataset_index",
        method: "get",
        params: {
            token: Token,
        }
    })
}





// export const getResultByTypeLicense = (queryString) => {
//     return axios.request({
//         url: "/search_license_basic_by_name",
//         method: "get",
//         params: {
//             token: Token,
//             type:1,
//             name:queryString

//         }
//     })
// }

// export const getResultByTypeDataSpecificLicense = (queryString) => {
//     return axios.request({
//         url: "/search_license_basic_by_name",
//         method: "get",
//         params: {
//             token: Token,
//             type:2,
//             name:queryString

//         }
//     })
// }


// export const getResultByTypeDataSourceTermsofUse = (queryString) => {
//     return axios.request({
//         url: "/search_license_basic_by_name",
//         method: "get",
//         params: {
//             token: Token,
//             type:3,
//             name:queryString

//         }
//     })
// }










