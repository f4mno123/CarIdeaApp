<template>
    <div>
        <h1>Page Not Found</h1>
        <p>The requested page could not be found.</p>
        <button @click="goBack">Go Back</button>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
    router.go(-1);
}
</script>

<style scoped>
p {
    font-size: 24px;
    color: red;
    text-align: center;
    margin-top: 50px;
}

div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

p {
    font-size: 16px;
    color: gray;
}

button {
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
</style>