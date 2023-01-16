<template>
  <div class="card-group">
    <CalendarDay v-for="day in CalendarWeekData" :key="day.id" :day="day"></CalendarDay>
  </div>
</template>

<script>
import CalendarDay from "./CalendarDay.vue";
import store from "@/store";
export default {
  name: "CalendarWeek",
  components: {
    CalendarDay,
  },
  data() {
    return {
      CalendarWeekData: store.state.calendarWeekData,
    };
  },
};
</script>

<style scoped></style>
