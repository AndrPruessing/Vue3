<template>
  <div>
    <TheTwoColumnsLayout
    :leftColumnClass="'col-md-8 bg-vue'"
    :rightColumnClass="'col-md-4'"
    :fullSize="true">
      <template #leftCol>
        <div class="mt5 text-center">
        <div class="display-1 my-5"> Der Shop</div>
        <div class="display-4 my-5">
          Erhalten Sie Zugriff auf exklusive Artikel
        </div>
        <div class="my-5 offset-4 col-4">
          <img src="@/assets/shopping.svg" alt="shopping" class="img-fluid"/>
        </div>
        </div>
      </template>
      <template #rightCol>
      <transition
      name="slide-fade" mode="out-in" appear
        ><component
          :is="componentName"
          @change-component="changeComponent"
        ></component></transition
    ></template>
    </TheTwoColumnsLayout>
  </div>
</template>

<script>
  import TheTwoColumnsLayout from '@/layouts/TheTwoColumnsLayout';
  import Register from"@/components/auth/Register"
  import Login from"@/components/auth/Login"

  export default {
    name:"HomePage",
    components:{
      TheTwoColumnsLayout,
      Register,
      Login,
    },
    data(){
      return {
        componentName: "register",
      }
    },
    methods: {
      changeComponent(payload){
        this.componentName = payload.componentName;
      }
    },
  }
</script>

<style scoped>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-out;
}
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
