import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const Root = defineComponent({
  name: 'Root',

  data() {
    return {
      counter: 0,
    };
  },

  methods: {
    updateCounter: function (event) {
      this.counter++;
    },
  },

  //template: '',
});

const app = createApp(Root);

const vm = app.mount('#app');

window.vm = vm;
