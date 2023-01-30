<template>
  <div class="card border-start" :class="cardClasses">
    <div
      class="card-header text-center"
      :class="cardHeaderClasses"
      role="button"
      @click="setActiveDay()"
    >
      <strong>{{ day.fullName }}</strong>
    </div>
    <div class="card-body">
      <!-- Beispiel für Slots. hier eig. nicht nötig -->
      <!-- kurzform von v-slot ist # -->
      <CalendarEvent
        v-for="(event, idx) in day.events"
        :event="event"
        :day="day.id"
        :key="idx"
      >
        <template v-slot:eventPriority="slotProps">
          <h5>{{ slotProps.displayPriorityName }}</h5>
        </template>
        <template v-slot:eventTitle>
          <i>{{ event.title }}</i>
        </template>
        <!-- default content -->
        <template v-slot> </template>
      </CalendarEvent>
    </div>
  </div>
</template>

<script>
import CalendarEvent from "./CalendarEvent.vue";
import store from "@/store";

export default {
  name: "CalendarDay",
  components: {
    CalendarEvent,
  },
  props: {
    day: {
      type: Object,
      required: true,
    },
  },
  computed: {
    cardClasses() {
      return this.day.id === store.getters.activeDay().id ? ["border-primary"] : null;
    },
    cardHeaderClasses() {
      return this.day.id === store.getters.activeDay().id
        ? ["bg-primary", "text-white"]
        : null;
    },
  },
  methods: {
    setActiveDay() {
      store.mutations.setActiveDay(this.day.id);
    },
  },
};
</script>

<style scoped></style>
