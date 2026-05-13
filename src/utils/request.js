import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '../store'
import { getToken } from '@/utils/auth'

const TOKEN_STATUS_CODE_LIST = [50008, 50012, 50014]

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    const token = getToken() || localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const { status, data } = response

    if (status !== 200) {
      Message({
        message: data.message,
        type: 'error',
        duration: 5 * 1000
      })

      if (TOKEN_STATUS_CODE_LIST.includes(status)) {
        MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('FedLogOut').then(() => {
            location.reload()
          })
        })
      }

      return Promise.reject(new Error(data.message || '请求失败'))
    }

    return Promise.resolve(data)
  },
  error => {
    console.log(`err: ${error}`)
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
