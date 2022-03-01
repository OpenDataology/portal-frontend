import axios from "axios";
axios.defaults.baseURL = "http://10.233.58.26:9000/api/v1";

/**
 * 
 * @param {String} url 
 * @param {Object} parms 
 * @returns 
 */
export const getLicenseList = (url, parms = {}) => {
    return new Promise((resolve, reject) => {
        axios.get(url, parms).then(
            (res) => {
                resolve(res.data);
            },
            (err) => {
                reject(err)
            }
        )
    })
}



