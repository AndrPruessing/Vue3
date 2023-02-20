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
      <!-- jedes element einer transition group braucht das :key binding -->
      <!-- transition group: transition wird auch beim einfügen und entfernen von elementen ausgeführt -->
      <!-- transition group: transition wird auch beim ändern reihenfolge -->
      <transition name="fade" mode="out-in">
        <div v-if="day.events.length">
          <transition-group name="list">
            <CalendarEvent
              v-for="(event, idx) in events"
              :event="event"
              :day="day.id"
              :key="idx"
            >
              <!-- Beispiel für Slots. hier eig. nicht nötig -->
              <!-- kurzform von v-slot ist # -->
              <template v-slot:eventPriority="slotProps">
                <h5>{{ slotProps.displayPriorityName }}</h5>
              </template>
              <template v-slot:eventTitle>
                <i>{{ event.title }}</i>
              </template>
              <!-- default content -->
              <template v-slot> </template>
            </CalendarEvent>
          </transition-group>
        </div>
        <div v-else>
          <div class="alert alert-light text-center">
            <i>Keine Termine</i>
          </div>
        </div>
      </transition>
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
    events() {
      console.log("events");
      console.log(store.getters.events(this.day.id));
      return store.getters.events(this.day.id);
    },
  },
  methods: {
    setActiveDay() {
      store.getters.events(this.day.id);
    },
  },
};
</script>

<style scoped>
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
/*
nicht nötig, da es default von vue ist, aber einfacher zu verstehen*/
.list-enter-to,
.list-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-move {
  transition: transform 0.8s ease;
}
</style>
