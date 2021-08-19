import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

// Создайте Vue приложение
const Root = defineComponent({
  name: 'Root',

  data() {
    return {
      a: 0,
      b: 0,
      picked: '',
    };
  },

  computed: {
    result: function () {
      switch (this.picked) {
        case 'sum':
          return this.a + this.b;
        case 'subtract':
          return this.a - this.b;
        case 'multiply':
          return this.a * this.b;
        case 'divide':
          return this.a / this.b;
        default:
          return 0;
      }
    },
  },
});

const app = createApp(Root);

const vm = app.mount('#app');

window.vm = vm;
