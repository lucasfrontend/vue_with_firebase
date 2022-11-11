<template>
  <div class="">
    <h1>Bienvenido {{ name }}</h1>
    <router-link to="/about">About</router-link>
    <br>
    <button class="logout" @click="Logout">Logout</button>
  </div>
</template>

<script>
import { onBeforeMount, ref } from 'vue' 
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

export default {
  name: 'HomeView',
  setup () {
    const name = ref('');
    
    onBeforeMount(()=> {
      const user = firebase.auth().currentUser;
      if(user) {
        name.value = user.email.split('@')[0];
      }
    });

    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => console.log("signed out"))
        .catch(error => alert(error.message));
    }

    return {
      name,
      Logout
    }
  }
}
</script>
