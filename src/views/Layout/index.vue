<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from "./components/LayoutFixed.vue";
import {useCategoryStore} from "@/stores/catgory.js";
import {onMounted} from "vue";

const categoryStore = useCategoryStore();
onMounted(()=>{
  categoryStore.getCategory()
})
</script>

<template>
  <LayoutFixed/>
  <LayoutNav/>
  <LayoutHeader />
  <router-view />
  <LayoutFooter />
</template>