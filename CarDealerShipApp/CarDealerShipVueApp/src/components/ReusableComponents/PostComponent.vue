<script setup>
import { ref } from 'vue';

const title = ref('Title');
const isHovered = ref(false);

const imageSrc = 'https://picsum.photos/200/300';
const altText = 'random image';

function AnimateBlogPost() {
    isHovered.value = true;
}

function ReturnToNotAnimated() {
    isHovered.value = false;
}
</script>

<style scoped>
.postBottom {
    height: 20%;
    background-color: lightgray;
    border-radius: 0;
    text-align: center;
}

.postTop {
    height: 80%;
}
.card {
    display: flex;
    flex-direction: column;
    padding: 0px;
    margin: 15px;
    border-radius: var(--card_border_radius);
    background-color: red;
    transition: background-color 0.3s;
}


.card_small {
    grid-row-end: span var(--card_small);
}

.card_medium {
    grid-row-end: span var(--card_medium);
}

.card_large {
    grid-row-end: span var(--card_large);
}

.postTop img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.hovered {
    border-style: solid;
    border-color: #96EFFF;
    border-width: 4px;
    border-radius: 0;
    transition: 0.3s;
}
</style>

<template>
    <div @mouseenter="AnimateBlogPost" @mouseleave="ReturnToNotAnimated" ref="div" class="card" :class="{ 'hovered': isHovered }">
        <div class="postTop">
            <img :src="imageSrc" :alt="altText">
        </div>
        <div class="postBottom">
            <h2>{{ title }}</h2>
        </div>
    </div>
</template>

