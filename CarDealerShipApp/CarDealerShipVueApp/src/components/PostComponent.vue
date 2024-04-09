
<script setup>
import { onMounted } from 'vue';
import { nextTick } from 'vue';
import { ref } from 'vue';

const boxWidth = ref(0);
const boxHeight = ref(0);

onMounted(async () => {
    await nextTick();
    boxWidth.value = getRandomNumber();
    boxHeight.value = getRandomNumber();
});


function getRandomNumber() {
    return Math.floor(Math.random() * (601 - 300) + 300);
}
</script>

<style scoped>
#blogBox {
    background-color: aliceblue;
}
</style>

<template>
    <div ref="div" id="blogBox" :style="{ width: boxWidth + 'px', height: boxHeight + 'px' }"></div>
</template>

