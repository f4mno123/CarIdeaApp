<script setup>

import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useCartStore } from '@/stores/cart';

const isSearchInputDisplayed = ref(false);
const showPikachuInfo = ref(false);
const shouldDisplayMenu = ref(false);
const isHoveredOver = ref(false);
const isCartHoveredOver = ref(false);
const shouldDisplayCart = ref(false);

const shouldDisplayEmptyCart = ref(true);
const cart = useCartStore();

const router = useRouter();
let shoppingCartItems = ref([]);


onMounted(() => {
    if (localStorage.getItem('cartItems') !== null) {
        shoppingCartItems =  JSON.parse(localStorage.getItem('cartItems'));
        shouldDisplayEmptyCart.value = false;
    }
    else if (cart.getItemList.length > 0){
        shoppingCartItems = cart.getItemList;
        shouldDisplayEmptyCart.value = false;
    }
    else {
        shouldDisplayEmptyCart.value = true;
    }
})


// if (cart.getItemList.length > 0){
//     itemName.value = cart.getItemList[cart.getItemList.length - 1].itemName;
//     price.value = cart.getItemList[cart.getItemList.length - 1].price;
//     imageSrc.value = cart.getItemList[cart.getItemList.length - 1].imageSrc;
//     shouldDisplayEmptyCart.value = false;

// }

// watch(localStorage.getItem('cartItems'), async(newValue) => {
//     console.log(newValue);
//     if (newValue !== null){
//         const cartItems = JSON.parse(newValue);
//         console.log(cartItems);
//         cartItems.forEach((item) => {
//             cart.addNewItem(item);
//         })
//     }

// })

const displaySearchInput = () => {
    isSearchInputDisplayed.value = !isSearchInputDisplayed.value;
}

const pikachuClick = () => {
    showPikachuInfo.value = !showPikachuInfo.value;
}

const goHome = () => {
    router.push('/main');
}
const changeMenuState = () => {
    shouldDisplayMenu.value = !shouldDisplayMenu.value;
    isHoveredOver.value = !isHoveredOver.value;
}

const logout = () => {
    localStorage.removeItem('token');
    router.push('/auth/login');
}

const navigateToLoginPage = () => {
    router.push('/auth/login');
}

const navigateToOwnListingsPage = () => {
    router.push('/own-listings');
}


const changeCartState = () => {
    shouldDisplayCart.value = !shouldDisplayCart.value;
    isCartHoveredOver.value = !isCartHoveredOver.value;
}

</script>

<style scoped>
header {
    background-color: #96EFFF;
    width: 100vw;
    height: 7.5vh;
    display: flex;

    align-items: center;
}

.menu {
    display: flex;
    width: 7.5vw;
    height: 7.5vh;
}

.searchIcon {
    display: flex;
    width: 7.5vw;
    height: 7.5vh;
}

.icon {
    width: 7.5vw;
    height: 7.5vh;
}

.icon:hover {
    transition: 0.3s;
    background-color: #87D7E5;
}

.searchBarDisplayed {
    width: 16.5vw;
    height: 6vh;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}

input {
    width: 15vw;
    height: 4.5vh;
    border: none;
    border-radius: 10px;
    padding-left: 10px;
}

.logo {
    width: 7.5vw;
    height: 7.5vh;
}
.navigation {
    display: flex;
    width: 92.5vw;
    height: 7.5vh;
    justify-content: flex-end;
    align-items: center;
}
.pikachu-info {
    width: 7.5vw;
    height: 7.5vh;
    display: flex;
    text-align: center;
    font-size: large;
    align-items: center;
    justify-content: center;
}   
.pikachu-info:hover {
    background-color: #87D7E5;
}

.isHoveredOver {
    background-color: #87D7E5;
}

.dropDownMenu {
    position: absolute;
    top: 7.5%;
    left: 85%;
    height: 26vh;
    width: 15vw;
    background-color: #87D7E5;
    align-items: end;
    z-index: 1;
    padding: 0;
    margin: 0;
}
  
.dropDownMenu ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}
  
.dropDownMenu ul li {
    padding: 10px;
    border-bottom: 5px solid #96EFFF;
    cursor: pointer;
    }

.dropDownMenu ul li:last-child {
    border-bottom: none;
}
  
.dropDownMenu ul li:hover {
    background-color: #96EFFF;
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
    /* only border bottom */
    border-bottom: 5px solid #96EFFF;
}
.dropDownCartBottom {
    width: 100%;
    height: 25%;
    border-top: 5px solid #96EFFF;
    display: flex;
    text-align: center;
    align-items: center;
    /* only the bottom border */
    border-bottom: 5px solid #96EFFF;
    background-color: #96EFFF;
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
    margin: 10px;
}


.dropDownCartBottom button {
    width: 75%;
    height: 90%;
    background-color: #7B66FF;
    border: none;
    border-radius: 10px;
    color: white;
    font-size: 18px;

}
.dropDownCartBottom button:hover {
    background-color: #5848B7;
}
.cartHovered {
    background-color: #87D7E5;
}

.dropDownCartImgText {
    display: flex;
    align-items: start;
    justify-content: start;
    margin: 5px;
    width: 100%;
    height: 100%;
}

</style>

<template>
    <header>
        <div class="logo" @click="pikachuClick">
            <v-icon
                name="pi-pikachu"
                scale="5"
                color="black"
                class="icon"
            />
        </div>
        <div v-if="showPikachuInfo" class="pikachu-info">
            Learn more about us
        </div>

        <div class="home" @click="goHome">
            <v-icon
                name="hi-solid-home"
                scale="5"
                color="#7B66FF"
                class="icon"
            />
        </div>
        

        <div class="navigation">
        <div v-if="isSearchInputDisplayed" class="searchBarDisplayed">
            <input type="text" placeholder="Search..."/>
        </div>
        <div class="searchIcon" @click="displaySearchInput">
            <v-icon
                name="fc-search"
                scale="5"
                color="black"
                class="icon"/>
                
        </div>
        <div class="actionButtons" @mouseenter="changeCartState" @mouseleave="changeCartState" :class="{ 'cartHovered' : isCartHoveredOver}">
            <v-icon 
                class="icon"
                name="co-cart"
            />
            <div class="dropDownCart" v-if="shouldDisplayCart">
                <div class="dropDownCartTop" v-if="!shouldDisplayEmptyCart">
                    <h1>Cart</h1>
                </div>
                <div v-for="(item, index) in shoppingCartItems" class="dropDownCartImg" v-if="!shouldDisplayEmptyCart">
                    <img :src="item.imageSrc" alt="alt image" width="50" height="50"/>
                    <div class="dropDownCartImgText">
                        <p>{{ item.itemName }}</p>
                        <br>
                        <p> {{ item.price }}</p>
                    </div>
                </div>
                <div  v-if="!shouldDisplayEmptyCart" class="dropDownCartBottom">
                    <button>Go to cart</button>
                </div>
            </div>
        </div>
        <div class="menu" @mouseenter="changeMenuState" @mouseleave="changeMenuState" :class="{'isHoveredOver': isHoveredOver}">
            <v-icon
                name="px-menu"
                scale="5"
                color="black"
                class="icon"/>
            <div class="dropDownMenu" v-if="shouldDisplayMenu">
                <ul>
                    <li @click="navigateToOwnListingsPage">Manage your listings</li>
                    <li>Profile</li>
                    <li>Settings</li>
                    <li @click="navigateToLoginPage">Login</li>
                    <li @click="logout">Logout</li>
                </ul>
            </div>
        </div>
    </div>
    </header>
</template>
