<template>
  <div class="card">
    <div class="card-header text-center bg-secondary text-white">
      <h4>Neue Aufgaben</h4>
    </div>
    <div class="card-body">
      <div
        class="alert alert-secondary"
        v-for="task in newTasks"
        :key="task.id"
      >
        {{ task.content }}
      </div>
    </div>
    <div class="card-footer">
      <input type="text" class="form-control" placeholder="Neue Aufgabe" />
      <div class="d-grid my-2">
        <button class="btn btn-secondary">Eintragen</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Task from "./Task.vue";
import TaskT from "../App.vue";

import { defineProps, toRefs } from "vue";

const props = defineProps({
  newTasks: { type: TaskT, required: true },
});
const { newTasks } = toRefs(props);
// import { defineProps, reactive } from "vue";

// const props = defineProps<{
//   no: string;
// }>();

// const { no } = toRefs(props);

// const state = reactive({
//   room: {},
// });

// const init = async () => {
//   const { data } = await getRoomByNo(no.value);
//   console.log(data);
// };

// init();
</script>
