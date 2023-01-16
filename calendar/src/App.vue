<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-12">
        <CalendarWeek></CalendarWeek>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-4 offset-4">
        <CalendarEntry></CalendarEntry>
      </div>
      <div class="col-2 offset-2">
        <div class="float-end">
          <button class="btn btn-lg mb-2">
            <i class="fas fa-cogs"></i>
          </button>
        </div>
        <CalendarSettings></CalendarSettings>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarEntry from "./components/CalendarEntry.vue";
import CalendarWeek from "./components/CalendarWeek.vue";
import CalendarSettings from "./components/CalendarSettings.vue";

export default {
  name: "App",
  components: {
    CalendarWeek,
    CalendarEntry,
    CalendarSettings,
  },
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";

.square {
  width: 40px;
  height: 40px;
}
</style>
