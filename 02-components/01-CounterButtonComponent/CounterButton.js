import { defineComponent } from './vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'CounterButton',

  props: {
    count: {
      type: Number,
      default: 0,
    }
  },

  emits: ['update:count'],

  methods: {
    update: function (event) {
      let counter = this.count;
      counter++;
      this.$emit('update:count', counter);
    },
  },

  template: `<button type="button" @click="update">{{count}}</button>`,
});
