import axios from 'axios';

export function request(config){

  const instance = axios.create({
    baseURL:'http://',
    timeout:5000
  })

  instance.interceptors.request.use(config =>{
    return config
  },err =>{
    console.log(err);
  })

  return instance(config)

}