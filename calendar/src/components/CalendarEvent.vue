<template>
  <div class="alert text-center" :class="alertColor">
    <transition name="fade" mode="out-in">
      <div v-if="!event.edit">
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
          <i class="fas fa-edit me-2" role="button" @click="setEdit()"></i>
          <i class="far fa-trash-alt" role="button" @click="deleteEvent()"></i>
        </div>
      </div>
      <div v-else>
        <input
          type="text"
          class="form-control"
          ref="newEventTitleRef"
          :placeholder="event.title"
          v-model="newEventTitle"
        />
        <select class="form-select mt-2" v-model="newEventPriority">
          <option v-for="option in priorityOptions" :value="option.value" :key="option">
            {{ option.displayName }}
          </option>
        </select>
        <hr />
        <i class="fas fa-check" role="button" @click="updateEvent()"></i>
      </div>
    </transition>
  </div>
</template>

<script>
import store from "@/store";
import priorityOptions from "./data/priorityOptions.json";

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
  data() {
    return {
      newEventTitle: "",
      newEventPriority: this.event.priority,
      priorityOptions: priorityOptions,
    };
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
    setEdit() {
      store.mutations.setEdit(this.day, this.event.id);
      this.$nextTick(() => {
        this.$refs.newEventTitleRef.focus();
      });
    },
    updateEvent() {
      const newEvent = {
        title: this.newEventTitle,
        priority: this.newEventPriority,
      };
      store.mutations.updateEvent(this.day, this.event.id, newEvent);
    },
  },
};
</script>

<style scoped></style>
