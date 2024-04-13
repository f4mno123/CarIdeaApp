<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps({
    error: String,
    duration: Number
});

const hidden = ref(false);

setTimeout(() => {
    hidden.value = true
}, props.duration)

</script>


<style scoped>
.error {
    color: #7B66FF;
    font-size: 1.5rem;
    text-align: center;
}

.hidden {
    display: none;
}
</style>


<template>
    <div>
        <h1 v-if="props.error" class="error" :class="{hidden}">{{ props.error }}</h1>
    </div>
</template>