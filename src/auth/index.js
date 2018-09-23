/*
 * @file: index.js
 * @description: Auth functions here
 * @date: 10.09.2018
 * @author: Jasdeep Singh
 * */

/******** Get User from store  ***********/
export const User = store => {
  return store.getState().user;
};

/******** Routing authentication middleware ***********/
export const Auth = store => {
  return User(store).loggedIn;
};
/******** Set Authorization token in header ***********/
export const setAuthorizationToken = (axios, token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};
