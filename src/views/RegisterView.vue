<template>
    <div class="">
        <h1>Register</h1>
        <form @submit.prevent="Register">
            <input type="text" placeholder="Your Email" v-model="email"/>
            <input type="password" placeholder="Your password" v-model="password"/>
            <input type="submit" value="Register" />
            <p>Ya tenes cuenta? <router-link to='/login'>Ingresa aca</router-link></p>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue' 
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default {
    name: 'RegisterView',
    setup () {
        const email = ref('');
        const password = ref('');

        const Register = () => {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
                .then(user => {
                    alert(user);
                })
                .catch(error => alert(error.message));
        }

        return {
            Register,
            email,
            password
        }

    }
}

</script>
  