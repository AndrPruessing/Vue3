const app = Vue.createApp({
  data: function () {
    return {
      totalVotes: 0,
    };
  },

  watch: {
    submissions(newVal, oldVal) {},
    submissionsDeep: {
      handler(newVal, oldVal) {
        this.totalVotes = this.submissions.reduce((totalVotes, submission) => {
          return totalVotes + submission.votes;
        }, 0);
      },
      //  deep watcher schauen in objekten nach änderungen und nicht nur ob das objekt neuerstellt / gelöscht wurde
      deep: true,
      //  initialles ausführen
      immediate: true,
    },
  },
});

const vm = app.mount("#app");
