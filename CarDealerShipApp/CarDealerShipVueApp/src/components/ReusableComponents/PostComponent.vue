<script setup>
import { ref, defineProps } from 'vue';
import { useRouter } from 'vue-router';



const props = defineProps({
    postId: Number,
    imageSrc: String,
    price: Number,
    itemDescription: String,
    itemName: String
});

const postId = props.postId;
const itemName = props.itemName;
const imageSrc = props.imageSrc;
const price = props.price;
const itemDescription = props.itemDescription;

const router = useRouter();
const isHovered = ref(false);
const altText = 'img';

function AnimateBlogPost() {
    isHovered.value = true;
}

function ReturnToNotAnimated() {
    isHovered.value = false;
}
function redirectToItemPage() {
    router.push({ name: 'item', params: { postId: postId }, query: { imageSrc, price, itemDescription, itemName } });
}


</script>

<style scoped>
.postBottom {
    height: 20%;
    background-color: white;
    border-radius: 0;
    text-align: center;
    
}

.postTop {
    height: 80%;
    width: 100%;
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
    <div @click="redirectToItemPage" @mouseenter="AnimateBlogPost" @mouseleave="ReturnToNotAnimated" ref="div" class="card" :class="{ 'hovered': isHovered }">
        <div class="postTop">
            <img :src="imageSrc" :alt="altText">
        </div>
        <div class="postBottom">
            <h2>{{ itemName }}</h2>
            <p>{{ price }}$</p>
        </div>
    </div>
</template>

