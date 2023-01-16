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
};

export default {
  state: readonly(state),
  getters,
  mutations,
};
