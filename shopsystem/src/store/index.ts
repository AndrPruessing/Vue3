import axios from 'axios';
import { createStore } from 'vuex';

import { FIREBASE_API_KEY } from '../config/firebase';

 const store = createStore({
  state: {
    userId:null,
    token:null,
  },
  getters: {
  },
  mutations: {
    setUser(state,payload){
      state.userId = payload.userId;
      state.token = payload.token;
    }
  },
  actions: {
    signup(context, payload){
      const signupDataObject = {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }
      const promis = axios.post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="+FIREBASE_API_KEY,
        signupDataObject
        ).then((response) =>{
          context.commit("setUSer", {
            userId: response.data.localId,
            token: response.data.idToken,
          });
        }).catch((error=>{
          const errorMessage =new Error(error.response.data.error.message || "UNKNOWN_ERROR");
          throw errorMessage;
        }));
        return promis;
    },
  },
  modules: {
  }
})
export default store;
