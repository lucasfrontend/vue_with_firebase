<template>
    <div class="container">
        <div class="top"></div>
        <div class="bottom"></div>
        <div class="center">
            <h2>Please Sign In</h2>
            <div class="login">
                <form @submit.prevent="Login">
                    <input type="text" placeholder="Your Email" v-model="email"/>
                    <input type="password" placeholder="Your password" v-model="password"/>
                    <input type="submit" value="Login" />
                    <p v-if="errorMsg">{{ errorMsg }}</p>
                    <p>Necesita una cuenta? <router-link to='/register'>Registrate aca</router-link></p>
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

export default {
    name: 'LoginView',
    setup () {
        const email = ref('');
        const password = ref('');
        const errorMsg = ref();

        const Login = () => {
            firebase
                .auth()
                .signInWithEmailAndPassword(email.value, password.value)
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
                }); 
        }

        return {
            Login,
            email,
            password,
            errorMsg
        }

    }
}
</script>

<style lang="scss">
*,*:before,*:after{box-sizing:border-box}

body{
  min-height:100vh;
  font-family: 'Raleway', sans-serif;
}

.container{
  position:absolute;
  width:100%;
  height:100%;
  overflow:hidden;
  
  &:hover,&:active {
    .top, .bottom {
      &:before, &:after{
        margin-left: 200px;
        transform-origin: -200px 50%;
        transition-delay:0s;
      }
    }
    .center{
      opacity:1;
      transition-delay:0.2s;
    }
  }
  @media (max-width: 1200px) {
    .top, .bottom {
      &:before, &:after{
        margin-left: 200px;
        transform-origin: -200px 50%;
        transition-delay:0s;
      }
    }
    .center{
      opacity:1;
      transition-delay:0.2s;
    }

    }
}

.top, .bottom{
  &:before, &:after{
    content:'';
    display:block;
    position:absolute;
    width:200vmax;
    height:200vmax;
    top:50%;left:50%;
    margin-top:-100vmax;
    transform-origin: 0 50%;
    transition:all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
    z-index:10;
    opacity:0.65;
    transition-delay:0.2s;
  }
}

.top{
  &:before{
    transform:rotate(45deg);
    background:#682323;}
  &:after{
    transform:rotate(135deg);
    background:#c21313;}
  // &:before{transform:rotate(45deg);background:#e46569;}
  // &:after{transform:rotate(135deg);background:#ecaf81;}
}

.bottom{
  &:before{transform:rotate(-45deg);background:#237f4f;}
  &:after{transform:rotate(-135deg);background:#171616;}
  //  &:before{transform:rotate(-45deg);background:#60b8d4;}
  // &:after{transform:rotate(-135deg);background:#3745b5;}
}

.center{
  position:absolute;
  width:400px;
  height:400px;
  top:50%;left:50%;
  margin-left:-200px;
  margin-top:-200px;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:30px;
  opacity:0;
  transition:all 0.5s cubic-bezier(0.445, 0.05, 0, 1);
  transition-delay:0s;
  color:#333;
  
  input{
    width:100%;
    padding:15px;
    margin:5px;
    border-radius:1px;
    border:1px solid #ccc;
    font-family:inherit;
  }
}
</style>