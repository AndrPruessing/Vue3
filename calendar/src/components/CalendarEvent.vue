<template>
  <div class="alert text-center" :class="alertColor">
    <template v-if="!event.edit">
      <div>
        <slot name="eventPriorität" :displayPriorityName="displayPriorityName">
          <strong>{{ displayPriorityName }}</strong>
        </slot>
      </div>
      <slot name="eventTitle">
        <div>{{ event.title }}</div>
      </slot>
      <slot></slot>
      <div>
        <i class="fas fa-edit me-2" role="button"></i>
        <i class="far fa-trash-alt" role="button" @click="deleteEvent()"></i>
      </div>
    </template>
    <template v-else> </template>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "CalendarEvent",
  props: {
    event: {
      type: Object,
      required: true,
    },
    day: {
      type: Number,
      required: true,
    },
  },
  computed: {
    displayPriorityName() {
      if (this.event) {
        switch (this.event.priority) {
          case 1:
            return "Tief";
          case 0:
            return "Mittel";
          case -1:
            return "Hoch";
        }
      }
      return "keine Priorität";
    },
    alertColor() {
      return "alert-" + this.event.color;
    },
  },
  methods: {
    deleteEvent() {
      store.mutations.deleteEvent(this.day, this.event.id);
    },
  },
};
</script>

<style scoped></style>
