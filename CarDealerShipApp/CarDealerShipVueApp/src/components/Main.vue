<script setup>
import PostComponent from './PostComponent.vue'
</script>

<style scoped>
    header {
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: center;
        background-color: darkblue;
        width: 100vw;
        height: 10vh;
    }
    .content {
        display: flex;
        width: 100vw;
        height: 85vh;
        background-color: green;
    }

    footer {
        display: flex;
        width: 100vw;
        height: 5vh;
        position: fixed;
        left: 0;
        bottom: 0;
        
    }
</style>

<template>
    <header>
        <h1>Banner</h1>
    </header>
    <div class="content">
        <PostComponent/>
    </div>
    <footer>

    </footer>
</template>
