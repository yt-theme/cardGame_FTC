import axios from 'axios'
const qs = require('qs')

const url = 'http://127.0.0.1:1234'

// 生成邀请码
export const api_createInviteCode = (params) => { return axios.post(`${url}/api/createInviteCode`, qs.stringify(params)) }
// 请求卡牌数据
export const api_queryCardJson = (params) => { return axios.post(`${url}/api/queryCardJson`, qs.stringify(params)) }