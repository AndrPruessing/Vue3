<template>
  <div class="card">
    <div class="card-header text-center">
      <h5>
        Neuer Termin für: <strong>{{ activeDayName }}</strong>
      </h5>
    </div>
    <div class="card-body">
      <input
        type="text"
        class="form-control"
        placeholder="Neuer Eintrag"
        v-model="event.title"
        ref="eventTitleInput"
        @keyup.enter.exact="submitEvent()"
        @keyup.ctrl.enter.exact="clearEventForm()"
      />
      <select class="form-select mt-2" v-model="event.priority">
        <option v-for="option in priorityOptions" :value="option.value" :key="option">
          {{ option.displayName }}
        </option>
      </select>
      <div class="text-center mt-3">
        <span
          v-for="color in eventColors"
          :key="color"
          class="d-inline-block alert m-0 me-2 square"
          :class="eventColorClasses(color)"
          role="button"
          @click="setEventColor(color)"
        >
        </span>
      </div>
      <hr />
      <div class="d-grid gap-2">
        <button class="btn btn-primary" @click="submitEvent()" :disabled="!event.title">
          Eintragen
        </button>
        <button class="btn btn-danger" @click="clearEventForm()">Inhalt löschen</button>
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import priorityOptions from "./data/priorityOptions.json";

export default {
  name: "CalendarEntry",
  computed: {
    activeDayName() {
      return store.getters.activeDay.fullName;
    },
  },
  data() {
    return {
      priorityOptions: priorityOptions,
      eventColors: ["primary", "danger", "info", "success", "warning"],
      event: {
        titel: "",
        color: "primary",
        priority: 0,
      },
    };
  },
  mounted() {
    this.$refs.eventTitleInput.focus();
  },
  methods: {
    eventColorClasses(eventColor) {
      return [
        `alert-${eventColor}`,
        this.event.color === eventColor ? `border border-${eventColor}` : "",
      ];
    },
    setEventColor(color) {
      this.event.color = color;
    },
    clearEventForm() {
      this.event = {
        titel: "",
        color: "primary",
        priority: 0,
      };
    },
    submitEvent() {
      if (!this.event.title) return;
      store.mutations.addEvent(this.event);
      this.clearEventForm();
    },
  },
};
</script>

<style scoped></style>
