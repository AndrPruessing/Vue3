<template>
  <div>
    <div class="my-5 text-center offset-2 col-8">
      <img src="@/assets/lock.svg" alt="welcome" class="img-fluid">
    </div>
    <div class="text-center">
      <h2>Jetzt Anmelden</h2>
      oder <a class="text-vue2" role="button" @click="changeComponent('register')">erstellen Sie jetz ein Konto</a>
    </div>

    <div class="alert alert-danger col-md-8 offset-2" v-if="error">{{ errorDisplayText }}</div>
    <div class="alert alert-success col-md-8 offset-2" v-if="success">{{ successDisplayText }}</div>

    <Form @submit="submitData" :validation-schema="loginValidationSchema" v-slot="{errors}">
      <div class="form-row">
        <div class="form-group col-md-8 offset-2">
          <label for="email"><strong>E-Mail-Adresse:</strong></label>
          <Field as="input" name="email" type="email" class="form-control" id="email"/>
          <small class="text-danger" v-if="errors.email">{{ errors.email }}</small>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-8 offset-2">
          <label for="password"><strong>Passwort:</strong></label>
          <Field as="input" name="password" type="password" class="form-control" id="password"/>
          <small class="text-danger" v-if="errors.password">{{ errors.password }}</small>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-8 offset-2 mt-3">
          <div class="d-grid">
           <button class="btn bg-vue" type="submit">
          <span v-if="!isLoading">Anmelden</span>
          <span v-else class="spinner-border spinner-border-sm"></span></button>
          </div>
        </div>
      </div>
    </Form>
  </div>
</template>

<script lang="ts">
  import {Form, Field} from "vee-validate";
  import {loginValidationSchema} from "./RegisterValidationSchema";
  import { defineComponent } from "vue";

  type FormValues = {
          email: string,
          password: string,
        }

  export default defineComponent({
    name:"AuthLogin",
    components:{
      Form,
      Field,
    },
    emits:{
      'change-component':(payload : {componentName: string}):boolean => {
        return payload.componentName === "register";
      }
    },
    data(){
      return {
        error: '',
        success:false,
        isLoading:false,
        successDisplayText: 'erfolgreich Angemeldet',
        loginValidationSchema,
      };
    },
     computed:{
      errorDisplayText() {
        if(this.error) {
          if(this.error.includes("INVALID_PASSWORD")){
            return "Das Passwort ist falsch";
          } else  if(this.error.includes("EMAIL_NOT_FOUND")){
            return "Die Email ist nicht registriert";
          }
          return " Es ist ein Unbekannter Fehler aufgetreten";
        } return "";
      }
    },
    methods: {
      submitData(values:FormValues){
        this.isLoading=true;
        this.success = false;
        this.error = '';

        this.$store.dispatch("signin", {
          email:values.email,
          password: values.password,
        }).then(()=> {
          this.success=true;
          this.isLoading=false;
        }).catch((error)=> {
          this.error = error.message;
          this.isLoading = false;
        })
      },
      changeComponent(componentName:string){
        this.$emit("change-component", {componentName});
      },
    },
  })
</script>

<style lang="scss" scoped>

</style>
