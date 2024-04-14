<!-- <script setup>
import { ref, defineProps, watch } from 'vue';
import { useCartStore } from '@/stores/cart';


const shouldDisplayCart = ref(false);
const shouldDisplayEmptyCart = ref(true);
const isCartHoveredOver = ref(false);
const items = ref([]);

const cart = useCartStore();
items.value = cart.getItemList;

watch(cart, async(newValue) => {
    items.value = newValue;
    shouldDisplayEmptyCart.value = false;
})



const changeCartState = () => {
    shouldDisplayCart.value = !shouldDisplayCart.value;
    isCartHoveredOver.value = !isCartHoveredOver.value;
}

</script>

<style scoped>

.icon {
    width: 7.5vw;
    height: 7.5vh;
}

.dropDownCart {
    position: absolute;
    top: 7.5%;
    left: 77.5%;
    height: 26vh;
    width: 22.5vw;
    background-color: #87D7E5;
    z-index: 1;
    display: flex;
    flex-direction: column;
}
.dropDownCartTop {
    padding: 10px;
    width: 100%;
    height: 25%;
    background-color: #87D7E5;
    border-bottom: 5px solid #96EFFF;
}
.dropDownCartBottom {
    width: 100%;
    height: 25%;
    border-top: 5px solid #96EFFF;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
}

.dropDownCartImg {
    display: flex;
    align-items: center;
    width: 100%;
    height: 50%;
    background-color: #87D7E5;
}
.dropDownCartImg img {
    width: 40%;
    height: 90%;
}


.dropDownCartBottom button {
    width: 75%;
    height: 75%;
    background-color: #7B66FF;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 18px;
}
.cartHovered {
    background-color: #87D7E5;
}

.dropDownCartImgText {
    display: flex;
    align-items: start;
    justify-content: start;
    margin: 10px;
    width: 100%;
    height: 100%;
}

.isCartHoveredOver {
    background-color: #87D7E5;
}
</style>

<template>
    <div class="actionButtons" @mouseenter="changeCartState" @mouseleave="changeCartState" :class="{ 'cartHovered' : isCartHoveredOver}">

    <v-icon 
        class="icon"
        name="co-cart"
    />
    <div class="dropDownCart" v-if="shouldDisplayCart">
        <div class="dropDownCartTop" v-if="!shouldDisplayEmptyCart">
            <h1>Cart</h1>      
        </div>
                
        <div class="dropDownCartImg" v-if="!shouldDisplayEmptyCart">
            <img :src="imageSrc" alt="alt image" width="50" height="50"/>
            <div class="dropDownCartImgText">
                <p>{{ itemName }}</p>
                <br>
                <p> {{ price }}</p>
            </div>
        </div>
        
        <div  v-if="!shouldDisplayEmptyCart" class="dropDownCartBottom">
            <button>Go to cart</button>
        </div>
    </div>
    </div>
</template> -->