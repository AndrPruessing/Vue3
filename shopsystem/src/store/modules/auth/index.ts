/* eslint-disable @typescript-eslint/ban-types */
import axios from 'axios';

import { FIREBASE_API_KEY } from '../../../config/firebase';

type State = {
  userId?: string,
  token?: string,
}

type Payload = {
  userId?: string,
  token?: string,
  email?: string,
  password?: string,
  mode?:string,
}
// not sure about that
type Context = {
    state:State,
    rootState:State,
    commit:{(type: string, payload?: Payload, options?: Object): Function},
    dispatch:{(type: string, payload?: Payload, options?: Object): Promise<unknown>},
    getters:{ [key: string]: Function },
 }

const state:State = {
  userId:'',
  token:'',
};

const mutations = {
  setUser(state:State,payload:Payload){
    state.userId = payload.userId;
    state.token = payload.token;
  }
};

const actions={
  auth(context:Context, payload:Payload){
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
        context.commit("setUser", {
          userId: response.data.localId,
          token: response.data.idToken,
        });
      }).catch((error=>{
        const errorMessage =new Error(error.response.data.error.message || "UNKNOWN_ERROR");
        throw errorMessage;
      }));
      return promise;
  },
  signin(context:Context, payload:Payload){
    const signupDataObject = {
      ...payload,
      mode: "signin",
     }
     return context.dispatch("auth", signupDataObject);
  },
  signup(context:Context, payload:Payload){
    const signupDataObject = {
     ...payload,
     mode: "signup",
    }
    return context.dispatch("auth", signupDataObject);
  },
};

const getters = {};

const authModule:any= {
  state, mutations, getters, actions,
}

  export default authModule;
