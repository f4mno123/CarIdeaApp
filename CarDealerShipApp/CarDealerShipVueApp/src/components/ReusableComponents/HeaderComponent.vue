<script setup>

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const isSearchInputDisplayed = ref(false);
const showPikachuInfo = ref(false);
const shouldDisplayMenu = ref(false);
const isHoveredOver = ref(false);
const router = useRouter();

const displaySearchInput = () => {
    isSearchInputDisplayed.value = !isSearchInputDisplayed.value;
}

const pikachuClick = () => {
    showPikachuInfo.value = !showPikachuInfo.value;
}

const goHome = () => {
    router.push('/main');
}
const displayMenu = () => {
    shouldDisplayMenu.value = true;
    isHoveredOver.value = true;
}
const hideMenu = () => {
    shouldDisplayMenu.value = false;
    isHoveredOver.value = false;
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

const navigateToCart = () => {
    router.push('/cart');
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
    height: 31vh;
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
        <div class="menu" @mouseenter="displayMenu" @mouseleave="hideMenu" :class="{'isHoveredOver': isHoveredOver}">
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
                    <li @click="navigateToCart">Cart</li>
                    <li @click="navigateToLoginPage">Login</li>
                    <li @click="logout">Logout</li>
                </ul>
            </div>
        </div>
    </div>
    </header>
</template>
