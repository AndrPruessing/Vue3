<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-4">
        <NewTask :newTasks="newTasks()"></NewTask>
      </div>
      <div
        class="col-4"
        v-for="statusCard in statusCards"
        :key="statusCard.status"
      >
        <StatusCard :statusCard="statusCard"></StatusCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import NewTask from "./components/NewTask.vue";
import StatusCard from "./components/StatusCard.vue";

type TaskT = {
  id: number;
  content: string;
  status: number;
};

const tasks: Array<TaskT> = [
  {
    id: 1,
    content: "Dashboard überarbeiten.",
    status: 0,
  },
  {
    id: 2,
    content: "Anwendung auf Vue.js umstellen.",
    status: 0,
  },
];
const statusCards: Array<StatusCardT> = [
  {
    title: "Neue Aufgabe",
    titleClasses: "bg-secondary text-white",
    newTask: true,
    status: 0,
  },
  {
    title: "In Bearbeitung",
    titleClasses: "bg-primary text-white",
    newTask: false,
    status: 1,
  },
  {
    title: "Erledigt",
    titleClasses: "bg-success text-white",
    newTask: false,
    status: 2,
  },
];
function newTasks(): Task[] {
  return tasks.filter((task) => task.status === 0);
}
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.min.css";
</style>
