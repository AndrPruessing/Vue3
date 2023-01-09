const app = Vue.createApp({
  data: function () {
    return {
      submissions: submissions, // aus seed.js ( möglich da import in html file vor app.js import)
    };
  },
  computed: {
    totalVotes() {
      return this.submissions.reduce((totalVotes, submission) => {
        return totalVotes + submission.votes;
      }, 0);
    },
    sortedSubmissionsByVotes() {
      return this.submissions.sort((a, b) => {
        return b.votes - a.votes;
      });
    },
  },
  methods: {},
});

app.component("submissionListItem", {
  template: `<div class="d-flex">
  <div class="d-shrink-0">
    <img :src="submission.img" alt="submission.title" />
  </div>
  <div class="flex-grow-1 px-2">
    <h5>
      {{ submission.title}}
      <span class="float-end text-primary" style="cursor: pointer">
        <i class="fa fa-chevron-up" @click="upvote"></i><br />
        <strong>{{ submission.votes}}</strong><br />
        <i class="fa fa-chevron-down" @click="downvote"></i>
      </span>
    </h5>
    <div v-html="submission.desc"></div>
    <small>{{ submission.author}}</small>
  </div>
</div>`,
  props: ["submission"],
  methods: {
    upvote() {
      this.submission.votes++;
    },
    downvote() {
      this.submission.votes--;
    },
  },
});

const vm = app.mount("#app");
