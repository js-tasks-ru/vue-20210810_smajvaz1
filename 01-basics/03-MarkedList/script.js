import { createApp, defineComponent } from './vendor/vue.esm-browser.js';
const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
];
// Создайте Vue приложение
const Root = defineComponent({
  name: 'Root',

  data() {
    return {
      filter: '',
    };
  },

  computed: {
    emailsObject: function () {
      let emailsArray = [];
      for (let i = 0; i < emails.length; i++) {
        emailsArray.push({});
        emailsArray[i].email = emails[i];
        if (this.filter != '' && emails[i].toLowerCase().indexOf(this.filter.toLowerCase()) != -1)
          emailsArray[i].selected = true;
        else emailsArray[i].selected = false;
      }
      return emailsArray;
    },
  },
});

const app = createApp(Root);

const vm = app.mount('#app');

window.vm = vm;

// Требуется создать Vue приложение
