import axios from 'axios'
import {getToken,setToken } from './auth'
import router from '@/router'
import {Toast} from "vant";

const SUCCESS_CODE = 200

const fetch = axios.create({
  baseURL: '/',
  timeout: 30000
})

fetch.interceptors.request.use(config => {
  if(getToken()) {
    config.headers['token'] = getToken()
  }
  return config
}, (error) => {
  if(error.response.data && typeof error.response.data == 'string') {
    Toast.fail(error.response.data)
  } else {
    Toast.fail('系统繁忙,请稍后重试')
  }
  return Promise.reject(error)
})



fetch.interceptors.response.use(
  response => {
    if(response.data.code !== SUCCESS_CODE) {
      Toast.fail(response.data.message)
      return Promise.reject(response)
    } else {
      return response.data
    }
  },
  (error) => {
    if (error.response) {
      if(error.response.status == 401) {
        setToken('')
        router.push({name: 'login'})
        return
      }
      if(error.response.data && typeof error.response.data == 'string') {
        Toast.fail(error.response.data)
      } else {
        if(error.response.status == 401) {
          Toast.fail('会话已失效,请重新登录')
        } else {
          Toast.fail('系统繁忙,请稍后重试')
        }
      }
    } else {
      console.error(error)
    }
    return Promise.reject(error)
  }
)



export default fetch






