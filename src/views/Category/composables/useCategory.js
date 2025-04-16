import {getTopCategoryAPI} from "@/apis/category.js";
import {ref,onMounted} from "vue";
import { onBeforeRouteUpdate, useRoute} from "vue-router";

export function useCategory(){

    const route = useRoute({})
    const categoryData=ref({})
    const getCategory = async (id) => {
        // 如何在setup中获取路由参数 useRoute() -> route 等价于this.$route
        const res = await getTopCategoryAPI(id)
        categoryData.value = res.result
    }
    onBeforeRouteUpdate(async (to)=>{
      await  getCategory(to.params.id)
    })
   onMounted(async ()=>{
     await  getCategory(route.params.id)
   })
    return{
        categoryData
    }
}