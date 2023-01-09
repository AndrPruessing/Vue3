const app = Vue.createApp({
  data: function () {
    return {
      submissions: submissions, // aus seed.js ( möglich da import in html file vor app.js import)
      //   totalVotes: 0,
    };
  },
  // 3 ways for data changes: computed, methods & watch
  // code wird ausgeführt, wenn
  // computed: abhängige Daten sich ändern
  // methods: sich sichtbare daten ändern, d.h. wen ndas template neu gerendert wird
  // watch: wenn sich die beobachteten daten ändern
  // einsatz:
  // computed: Daten welche von anderen abhängen
  // method:Eventlistener ( click) oder für permanentes ändern von Daten
  // watcher: für code welcher sich nicht direkt aufs Template auswirkt z.B. http request, localStorage nutzen etv.
  computed: {
    totalVotes() {
      return this.submissions.reduce((totalVotes, submission) => {
        return totalVotes + submission.votes;
      }, 0);
    },
  },
  methods: {
    upvote(idx) {
      this.submissions[idx].votes++;
    },
    downvote(idx) {
      this.submissions[idx].votes--;
    },
  },
  watch: {
    // submissions(newVal, oldVal){
    //     console.log(newVal);
    //     console.log(oldVal);
    // }
    // submissions: {
    //   handler(newVal, oldVal) {
    //     this.totalVotes = this.submissions.reduce((totalVotes, submission) => {
    //       return totalVotes + submission.votes;
    //     }, 0);
    //   },
    //   deep: true,
    //   immediate: true,
    // },
  },
});

const vm = app.mount("#app");
console.log(submissions);
