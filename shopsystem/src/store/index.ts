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
    auth(context, payload){
      const signupDataObject = {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }
      let url = "";
      if(payload.mode === "signin"){
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="+FIREBASE_API_KEY;
      } else if(payload.mode === "signup"){
        url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="+FIREBASE_API_KEY;
      }
      const promise = axios.post(
        url,
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
        return promise;
    },
    signin(context, payload){
      const signupDataObject = {
        ...payload,
        mode: "signin",
       }
       return context.dispatch("auth", signupDataObject);
    },
    signup(context, payload){
      const signupDataObject = {
       ...payload,
       mode: "signup",
      }
      return context.dispatch("auth", signupDataObject);
    },
  },
  modules: {
  }
})
export default store;
