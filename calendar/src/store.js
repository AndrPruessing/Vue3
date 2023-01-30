import { calendarWeekData } from "./seed";
import { reactive, readonly } from "vue";

const state = reactive({
  calendarWeekData,
});

const getters = {
  activeDay: () => state.calendarWeekData.find((day) => day.active),
};

const mutations = {
  deleteEvent(dayId, eventId) {
    const dayObj = state.calendarWeekData.find((day) => day.id === dayId);
    const eventIdx = dayObj.events.findIndex((event) => event.id === eventId);
    dayObj.events.splice(eventIdx, 1);
  },
  setEdit(dayId, eventId) {
    state.calendarWeekData.map((dayObj) => {
      dayObj.events.map((event) => {
        if (dayObj.id === dayId && event.id === eventId) {
          event.edit = true;
        } else event.edit = false;
      });
    });
  },
  setActiveDay(dayId) {
    state.calendarWeekData.map((dayObj) => {
      dayObj.id === dayId ? (dayObj.active = true) : (dayObj.active = false);
    });
  },
  updateEvent(dayId, eventId, newEvent) {
    console.log({ newEvent });
    const dayObj = state.calendarWeekData.find((day) => day.id === dayId);
    const eventObj = dayObj.events.find((event) => event.id === eventId);
    eventObj.title = newEvent.title !== "" ? newEvent.title : eventObj.title;
    eventObj.priority = Number(newEvent.priority.value);
    eventObj.edit = false;
  },
  addEvent(newEvent) {
    const activeDay = getters.activeDay();
    console.log({ activeDay });
    console.log({ newEvent });
    activeDay.events.push({
      ...newEvent,
      edit: false,
      id: `${activeDay.id} - ${activeDay.events.length + 1}`,
      priority: Number(newEvent.priority),
    });
    console.log(activeDay);
  },
};

export default {
  state: readonly(state),
  getters,
  mutations,
};
