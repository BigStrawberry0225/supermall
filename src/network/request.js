import axios from 'axios'

export function request(config) {
//  创建axios的实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

//  axios的拦截器
//  请求拦截的作用
  instance.interceptors.request.use(config => {
    return config
  }, error => {
    // console.log(error);
  })

//  响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, error => {
    console.log(error);
  })

  // 发送真正的网络请求
  return instance(config)
}
