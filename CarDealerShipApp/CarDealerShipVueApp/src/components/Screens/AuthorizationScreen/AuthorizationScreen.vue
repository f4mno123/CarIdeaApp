<script setup>
import axios from '../../../plugins/axios'
import { defineProps, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import ErrorMessage from '../../ReusableComponents/ErrorMessage.vue';


const props = defineProps({
    typeOfAuthorization: String,
})

const showError = ref(false)
const router = useRouter();


onMounted( () => {
    if (localStorage.getItem('token') != null) {
        router.push({ name: 'main', query: { error: 'You are already logged in' }});
    }
});


const submitForm = (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (props.typeOfAuthorization == 'login') {
        axios.post('https://localhost:8000/api/login_check', {
            username: username,
            password: password
        })
        .then((response) => {
            console.log(response.data.token);
            localStorage.setItem('token', response.data.token);
            router.push({ name: 'main' });
        })
        .catch((error) => {
            showError.value = true;
        })
    } else {
        axios.post('https://localhost:8000/api/register', {
            email: username,
            password: password
        })
        .then(() => {
            router.push({ name: 'login' });
        })
        .catch((error) => {
            showError.value = true;
        })
    }
}

</script>


<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
    .screen {
        display: flex;
        background-color: white;
        width: 100vw;
        height: 100vh;
    }
    .box {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 40vw;
        height: 75vh;
        background-color: #96EFFF;
        margin: auto;
        box-shadow: 0px 0px 10px 0px #96EFFF;   
        border-radius: 20px;
    }
    .topBox {
        display: flex;
        margin: auto;
        flex: 0.2;
    }
    .bottomBox {
        display: flex;
        margin: auto;
        flex: 0.4;
    }
    .header-text {
        margin: auto;
        font-size: 36px;
    }
    input {
        margin: 10px;
        width: 150px;
        height: 25px;
        font-size: 18px;
        text-align: center; 
        justify-content:right;
        border-radius: 10px;
        
    }
    label {
        font-size: 24px;
    }
    button {
        display: flex;
        margin: auto;
        background-color: #7B66FF;
        border: none;
        width: 12.5vw;
        height: 3vh;
        align-items: center;
        font-size: 18px;
        border-radius: 10px;
        text-align: center;
        justify-content: center;
    }
    button:hover {
        background-color: #C5FFF8;
        transition: 0.5s;
    }
    .passwordBox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    }

    .passwordBox label {
        margin-right: 10px;
    }

    .passwordBox input {
        flex: 1;
    }

    .emailBox {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .emailBox label {
        margin-right: 10px;
    }

    .emailBox input {
        flex: 1;
    }
    


</style>


<template>
    <div class="screen">
        <div class="box">
            <div class="topBox">
                <ErrorMessage v-if="showError" error="Invalid Credentials" :duration="5000"/>
                <h1 class="header-text" v-if="props.typeOfAuthorization == 'login'">login</h1>
                <h1 class="header-text" v-else="props.typeOfAuthorization == 'register'">register</h1>
            </div>
            <div class="bottomBox">
                <form @submit="submitForm">
                    <div class="emailBox">
                        <label for="username">Email: </label>
                        <input type="text" id="username" placeholder="username" autocomplete="username" />
                    </div>

                    <br>

                    <div div="passwordBox">
                        <label for="password">Password: </label>
                        <input type="password" id="password" placeholder="password" autocomplete="current-password" />
                    </div>
                    <br>    

                    <button v-if="props.typeOfAuthorization == 'login'" type="submit">Login</button>
                    <button v-else="props.typeOfAuthorization == 'register'" type="submit">Register</button>
                </form> 
            </div>
        </div>
    </div>
</template>
