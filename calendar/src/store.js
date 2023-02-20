import { calendarWeekData } from "./seed";
import { reactive, readonly } from "vue";

const state = reactive({
  calendarWeekData,
  activeView: "CalendarWeek",
  activeOrdering: "title",
});

const getters = {
  activeDay: () => state.calendarWeekData.find((day) => day.active),
  activeView: () => state.activeView,
  activeOrdering: () => state.activeOrdering,
  events: (dayId) => {
    const dayObj = state.calendarWeekData.find((day) => day.id === dayId);
    return dayObj.events.sort((eventA, eventB) => {
      if (eventA[state.activeOrdering] > eventB[state.activeOrdering]) {
        return 1;
      } else if (eventA[state.activeOrdering] < eventB[state.activeOrdering]) {
        return -1;
      }
      return 0;
    });
  },
};

const mutations = {
  setActiveOrdering(ordering) {
    state.activeOrdering = ordering;
  },
  setActiveView(view) {
    state.activeView = view;
  },
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
    const dayObj = state.calendarWeekData.find((day) => day.id === dayId);
    const eventObj = dayObj.events.find((event) => event.id === eventId);
    eventObj.title = newEvent.title !== "" ? newEvent.title : eventObj.title;
    eventObj.priority = Number(newEvent.priority.value);
    eventObj.edit = false;
  },
  addEvent(newEvent) {
    const activeDay = getters.activeDay();
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
