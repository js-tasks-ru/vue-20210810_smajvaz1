import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const Root = defineComponent({
  name: 'Root',

  data() {
    return {
      count: 0,
    };
  },

  methods: {
    ss: function (event) {
      this.count++;
    },
  },

  //template: '',
});

const app = createApp(Root);

const vm = app.mount('#app');

window.vm = vm;
