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
        <Register/>
      </template>
    </TheTwoColumnsLayout>
  </div>
</template>

<script>
  import TheTwoColumnsLayout from '@/layouts/TheTwoColumnsLayout';
  import Register from"@/components/auth/Register"

  export default {
    name:"HomePage",
    components:{
      TheTwoColumnsLayout,
      Register,
    }
  }
</script>

<style lang="scss" scoped>

</style>
