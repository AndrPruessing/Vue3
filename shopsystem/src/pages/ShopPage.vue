<template>
  <div>
    <TheShopLayout>
      <template #default>
        <h2>ShopPage</h2>
      </template>
    </TheShopLayout>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import TheShopLayout from '@/layouts/TheShopLayout.vue';

export default defineComponent({
  name:"ShopPage",
  components:{
    TheShopLayout,
  }
});
</script>
<style scoped>
</style>
