<template>
    <HeaderComponent/>
<div class="content">
    <template v-for="index in 50">
        <PostComponent :class="'card card_' + getRandomClass()" />
    </template>
</div>
    <footer>
        <h2>Footer</h2>
    </footer>
</template>

<script setup>
import PostComponent from '../ReusableComponents/PostComponent.vue';
import HeaderComponent from '../ReusableComponents/HeaderComponent.vue';

const getRandomClass = () => {
    const classes = ['small', 'medium', 'large']
    return classes[Math.floor(Math.random() * classes.length)]
}
</script>

<style scoped>

body {
    margin: 0;
    padding: 0;
    padding-top: 5px;
    background-color: grey;
}

.content {
        margin: 20px;
        padding: 0;
        width: 80vw;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        display: grid;
        grid-template-columns: repeat(auto-fill, var(--card_width));
        grid-auto-rows: var(--row_increment);
        justify-content: center;
        background-color: black;
}

footer {
    background-color: #96EFFF;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;
}

</style>
