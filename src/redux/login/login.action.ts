import axios from 'axios'
// Action Types

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED'

// Action Creators


export const loginSuccess = () => ({
  type: LOGIN_SUCCESS
})

export const loginFailed = () => ({
  type: LOGIN_FAILED
})


