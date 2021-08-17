import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const App = defineComponent({
  name: 'App',

  data() {
    return {
      picked: '',
      meetup: '',
    };
  },

  watch: {
    picked: function (newPicked, oldPicked) {
      fetchMeetupById(Number(newPicked)).then((res) => {
        this.meetup = res.title;
      });
    },
  },
});

createApp(App).mount('#app');
