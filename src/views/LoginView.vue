<template>
    <div class="login">
        <form @submit.prevent="Login">
            <input type="text" placeholder="Your Email" v-model="email"/>
            <input type="password" placeholder="Your password" v-model="password"/>
            <input type="submit" value="Login" />
            <p>Necesita una cuenta? <router-link to='/register'>Registrate aca</router-link></p>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue' 
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default {
    name: 'LoginView',
    setup () {
        const email = ref('');
        const password = ref('');

        const Login = () => {
            firebase
                .auth()
                .signInWithEmailAndPassword(email.value, password.value)
                .then(data => console.log(data))
                .catch(error => alert(error.message));
        }

        return {
            Login,
            email,
            password
        }

    }
}
</script>