import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const items = ref([]);
  const getItemList = computed(() => items.value);
  function addNewItem(itemsToAdd) {
    items.value.push(itemsToAdd);
  }

  return { items, getItemList, addNewItem }
})
