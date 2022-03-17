import { createApp } from 'vue';
import App from './App.vue';

import './assets/scss/common/_reset.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faPencil);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
