import axios from 'axios'
import instance from '../../utils/instance'
import {
  ALL_TRANSACTIONS,
  GET_CATEGORIES,
  GET_USER,
  GET_USERS,
  LOGIN_USER,
  LOGOUT_USER,
  GET_BALANCE
} from './types'

export const getCategories = () => async (dispatch) => {
  try {
    const res = await instance.get('/categories')
    console.log(res)
    return dispatch({ type: GET_CATEGORIES, payload: res.data.body })
  } catch (error) {
    return error.message
  }
}
export function postCategory(payload) {
  return async function () {
    try {
      const response = await instance.post('/categories', payload)
      return response
    } catch (e) {}
  }
}

export const createUser = async (values) => {
  const response = await instance.post('/users', values)
  console.log(response)
  return response
}

export const logUser = (values) => async (dispatch) => {
  const res = await axios.post('http://localhost:3000/users/login', values)
  console.log(res)
  localStorage.setItem('token', res.data.body.token)
  sessionStorage.setItem('role', res.data.body.userData.roleId)
  dispatch({ type: LOGIN_USER, payload: res.data.body.userData })

  return res
}

export function logout() {
  return { type: LOGOUT_USER }
}
export const getUsers = () => async (dispatch) => {
  try {
    const res = await instance.get('/users')
    return dispatch({ type: GET_USERS, payload: res.data.body })
  } catch (e) {
    return e.message
  }
}
export const getTransactions = () => async (dispatch) => {
  try {
    const res = await instance.get('/transactions')
    console.log(res)
    return dispatch({ type: ALL_TRANSACTIONS, payload: res.data.body })
  } catch (e) {
    return e.message
  }
}
export function createTransaction(payload) {
  return async function () {
    try {
      const response = await axios.post(`${URL}/transactions`, payload)
      return response
    } catch (e) {
      console.log(e.message)
    }
  }
}
export function getBalance() {
  return { type: GET_BALANCE }
}

export const getUser = () => async (dispatch) => {
  try {
    const res = await instance.get('/users/user')
    dispatch({ type: GET_USER, payload: res.data.body })
    return res
  } catch (err) {
    console.log(err.message)
  }
}

export const updatePassword = async (userid, payload) => {
  try {
    const res = await instance.put(`/users/changepassword/${userid}`, payload)
    return res.data
  } catch (err) {
    console.log(err.message)
  }
}

export const deleteUser = async (userid) => {
  try {
    const res = await instance.delete(`users/${userid}`)
    return res.data
  } catch (err) {
    console.log(err.message)
  }
}
