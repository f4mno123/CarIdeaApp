<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
    postId: Number,
});

const postId = props.postId;

</script>

<style scoped>
</style>

<template>
    <div>
        <h1>Item Screen</h1>
        <p>Post ID: {{ postId }}</p>
    </div>  
</template>