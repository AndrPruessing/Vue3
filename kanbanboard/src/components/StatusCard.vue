<template>
  <div class="card">
    <div class="card-header text-center bg-primary text-white">
      <h4>{{ statusCard.title }}</h4>
    </div>
    <div class="card-body"></div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";

type StatusCardT = {
  title: string;
  titleClasses: string;
  newTask: boolean;
  status: number;
};

const props = defineProps<{
  statusCard: StatusCardT;
}>();
</script>
