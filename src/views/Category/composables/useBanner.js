//封装轮播图
import {onMounted, ref} from 'vue'
import {getBannerAPI} from "@/apis/home.js";

export function useBanner() {

    const bannerList=ref([]);
    const getBanner=async ()=>{
        const res = await getBannerAPI({distributionSite:'2'}); // 等待请求完成
        bannerList.value = res.result; // 假设数据在 res.data.result 中
    }
    onMounted(()=>{
        getBanner()

    })
    return {bannerList}
}