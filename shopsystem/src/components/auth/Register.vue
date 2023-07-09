<template>
  <div>
    <div class="my-5 text-center offset-2 col-8">
      <img src="@/assets/welcome.svg" alt="welcome" class="img-fluid">
    </div>
    <div class="text-center">
      <h2>Jetzt Registrieren</h2>
      oder <a class="text-vue2" role="button" @click="changeComponent('login')">melden Sie sich mit Ihrem Konto an</a>
    </div>
<!-- TODO: AlertBoxVomponent -->
    <div class="alert alert-danger col-md-8 offset-2" v-if="error">{{ errorDisplayText }}</div>
    <div class="alert alert-success col-md-8 offset-2" v-if="success">{{ successDisplayText }}</div>

    <Form @submit="submitData" :validation-schema="registerValidationSchema" v-slot="{errors}">
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
        <div class="form-group col-md-8 offset-2">
          <label for="confirmPassword"><strong>Passwort wiederholen:</strong></label>
          <Field as="input" name="confirmPassword" type="password" class="form-control" id="confirmPassword"/>
          <small class="text-danger" v-if="errors.confirmPassword">{{ errors.confirmPassword }}</small>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-8 offset-2 mt-3">
          <div class="d-grid">
          <button class="btn bg-vue">
          <span v-if="!isLoading">Registrieren</span>
          <span v-else class="spinner-border spinner-border-sm"></span></button>
          </div>
        </div>
      </div>
    </Form>
  </div>
</template>

<script lang="ts">
  import {Form, Field} from "vee-validate";
  import {registerValidationSchema} from "./RegisterValidationSchema";
  import { defineComponent } from "vue";
  import axios from "axios";
  import {FIREBASE_API_KEY} from "../../config/firebase";

  type FormValues = {
    email: string,
    password: string,
    confirmPassword: string,
  }

  export default defineComponent({
    name:"AuthRegister",
    components:{
      Form,
      Field,
    },
    emits:{
      'change-component':(payload : {componentName: string}):boolean => {
        return payload.componentName === "login";
      }
    },
    data(){
      return {
        error: '',
        success:false,
        successDisplayText: 'erfolgreich Registriert',
        registerValidationSchema,
        isLoading:false,
      };
    },
    computed:{
      errorDisplayText() {
        if(this.error) {
          console.log(this.error)
          if(this.error.includes("EMAIL_EXISTS")){
            return "Die Email existiert bereits";
          }
          return " Es ist ein Unbekannter Fehler aufgetreten";
        } return "";
      }
    },
    methods: {
      // validation via schema, so values should be valid here
      submitData(values:FormValues){
        this.isLoading=true;
        this.success = false;
        this.error = '';

        this.$store.dispatch("signup", {
          email:values.email,
          password: values.password,
        }).then(()=> {
              this.success=true;
            this.isLoading=false;
            this.changeComponent("login");
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
