import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://carloslevir.free.beeceptor.com/signin'
})