import axios from "axios";
import cur_keys from "./keys.js"
// export { default } from "axios"

const ax = axios.create({
  baseURL:cur_keys.aibom_generator_backend,
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
