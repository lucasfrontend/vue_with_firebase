<template>
<div class="container">
    <div class="top"></div>
    <div class="bottom"></div>
    <div class="center">
        <h2>Please Sign In</h2>
        <div class="login">
            <form @submit.prevent="Register">
                <input type="text" placeholder="Your Email" v-model="email"/>
                <input type="password" placeholder="Your password" v-model="password"/>
                <input type="submit" value="Register" />
                <p v-if="errorMsg">{{ errorMsg }}</p>
                <p>Ya tenes cuenta? <router-link to='/login'>Ingresa aca</router-link></p>
                <!--
                <p><button @click="singInWithGoogle">Registrarse</button></p>
                -->
            </form>
        </div>
    </div>
</div>
</template>

<script>
import { ref } from 'vue' 
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { GoogleAuthProvider } from '@firebase/auth-types';
// import { getAuth, signInWithPopup } from '@firebase/auth';

export default {
    name: 'RegisterView',
    setup () {
        const email = ref('');
        const password = ref('');
        const errorMsg = ref();

        const Register = () => {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value)
                .then(user => {
                    alert(user);
                })
                .catch((error) => {
                    switch (error.code){
                        case "auth/invalid-email":
                            errorMsg.value = "El valor proporcionado para la propiedad de usuario de email no es válido. Debe ser una dirección de correo electrónico de cadena.";
                            break;
                        case "auth/email-already-exists":
                            errorMsg.value = "El correo electrónico proporcionado ya está en uso por un usuario existente. Cada usuario debe tener un correo electrónico único."
                            break;
                        case "auth/invalid-password":
                            errorMsg.value = "El valor proporcionado para la propiedad de usuario de la password no es válido. Debe ser una cadena con al menos seis caracteres.";
                            break;
                        default:
                            errorMsg.value = "Correo o Password incorrecto"
                            break; 
                    }
                });
        }

        /*
        const singInWithGoogle = () => {
            const provider = new GoogleAuthProvider();
            signInWithPopup(getAuth(), provider)
            .then(data => console.log(data))
            .catch((error) => {
                    switch (error.code){
                        case "auth/invalid-email":
                            errorMsg.value = "Correo invalido";
                            break;
                        case "auth/user-not-found":
                            errorMsg.value = "No hay cuenta con este correo"
                            break;
                        case "auth/wrong-password":
                            errorMsg.value = "Password incorrecto";
                            break;
                        default:
                            errorMsg.value = "Correo o Password incorrecto"
                            break; 
                    }
            })
        }
        */

        return {
            Register,
            email,
            password,
            errorMsg
        }

    }
}

</script>
  