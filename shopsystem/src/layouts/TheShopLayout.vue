<template>
  <div>
  <!-- Navbar -->
    <main>
      <div class="container">
        <div class="row">
          <div class="col-12">
          <slot><h1>Hauptbereich</h1></slot>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
name:"TheShopLayout",
});
</script>
<style scoped>
</style>
