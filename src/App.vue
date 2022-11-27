<template>
  <router-view/>
</template>


<script>
import { onBeforeMount } from '@vue/runtime-core';
import {useRouter, useRoute } from 'vue-router'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


export default {
    setup () {
      const router = useRouter();
      const route = useRoute();

      onBeforeMount(()=> {
        firebase.auth().onAuthStateChanged((user) => {
          if (!user) {
            router.replace('/login');
          } else if (route.path == '/login' || route.path == '/register') {
            router.replace('/');
          }
        })

      })
    }
}
</script>

<style lang="scss">
*,*:before,*:after{
  box-sizing: border-box;
} 

body {
  margin: 0px;
  background-color: #f7f7f7;
  color: rgb(44, 44, 44);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
