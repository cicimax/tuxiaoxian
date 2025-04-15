import {defineStore} from 'pinia'
import {ref, computed} from 'vue'
import {getCategoryAPI} from "@/apis/layout.js";

export const useCategoryStore = defineStore('category', () =>
{

    //导航列表数据
    const categoryList = ref([])
    //action获取导航列表数据
    const getCategory = async () => {
        const res = await getCategoryAPI()
        categoryList.value = res.result;

    }
    return {
        categoryList,
        getCategory,
    }
})