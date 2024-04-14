<script setup>
import { defineProps } from 'vue';
import HeaderComponent from '../ReusableComponents/HeaderComponent.vue';
import { useRoute } from 'vue-router';

const props = defineProps({
    postId: Number,
});

const route = useRoute();
const postId = props.postId;
const imageSrc = route.query.imageSrc; 
const itemName = route.query.itemName;
const price = route.query.price;
const itemDescription = route.query.itemDescription;

const addToCart = () => {
    console.log('Added to cart');
}

</script>

<style scoped>
.main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100vw;
    flex-direction: column;
    overflow-y: scroll;
}
.mainTop {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 50vw;
    background-color: aqua;
}
.imgDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 70%; 
    background-color: lightblue;
    
}



.mainTop img {
    width: 75%;
    height: 75%;
    object-fit: fill;
    margin-bottom: 20px;
}

.actionsButtonsDiv {
    width: 50vw;
    height: 20vh;   
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: lightblue;
    margin-bottom: 20px;
}

.mainBottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 50vw;
    background-color: lightcoral;
    height: 50vh; 
}
.underImageDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 15vh;
    background-color: lightgreen;
}

.actionButtons {
    width: 10vw;
    height: 30%;
    background-color: lightblue;
    border: none;
    border-radius: 10px;
    background-color: aliceblue;
    margin: 5px;
}

.actionButtons:hover {
    background-color: #87D7E5;
}

.mainBottom h1 {
    font-size: 24px;
    margin: 10px;
}
</style>

<template>
    <HeaderComponent/>
    <div class="main">
        <div class="mainTop">
            <div class="imgDiv">
                <img :src="imageSrc" alt="placeholder" />
                <h1>{{ itemName }}</h1>
                <p>{{ price }}</p>
            </div>

            <div class="mainBottom">
                <h1>{{ itemDescription }}</h1>
            </div>
            
        </div>
        <div class="actionsButtonsDiv" @click="addToCart">
            <v-icon 
                class="actionButtons"
                name="co-cart"
            />
            <v-icon 
                class="actionButtons"
                name="bi-balloon-heart-fill"
            /> 
        </div>
    </div>
</template>