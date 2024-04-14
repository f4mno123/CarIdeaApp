<script setup>
import HeaderComponent from '../ReusableComponents/HeaderComponent.vue';
import PostComponent from '../ReusableComponents/PostComponent.vue';
import { onBeforeMount, ref } from 'vue';
import axios from '../../plugins/axios';

const itemsToDisplay = ref([])

onBeforeMount(() => {
    axios.get('https://localhost:8000/api/user-selling-items')
    .then((response) => {
        itemsToDisplay.value = response.data.map(item => item.sellingItem);
        console.log(itemsToDisplay.value)
    })
    .catch((error) => {
        console.log(error)
    })
})
</script>

<style scoped>
h1 {
    color: #333;
    font-size: 24px;
    margin-bottom: 20px;
}

.content {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    
}

.post {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    padding: 20px;
    height: 400px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

}
</style>

<template>
    <HeaderComponent />
    <div>
        <h1>Own Listings</h1>
        <div class="content">
            <PostComponent class="post" v-for="item in itemsToDisplay" :itemDescription="item.itemDescription" :postId="item.id" :key="item.id" :item="item" :imageSrc="item.imageLinkBlob" :price="item.price" :itemName="item.itemName"/>
        </div>
    </div>
</template>