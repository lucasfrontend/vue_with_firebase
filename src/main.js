import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyBaopBkoOR81_l_v0AQIeAkO31CCGbU-pc",
    authDomain: "auth-with-firebase-67d18.firebaseapp.com",
    projectId: "auth-with-firebase-67d18",
    storageBucket: "auth-with-firebase-67d18.appspot.com",
    messagingSenderId: "1059883823206",
    appId: "1:1059883823206:web:87b428b86688370ed57da7"
};

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
