import {defineStore} from "pinia";
import {ref} from 'vue'
import {loginApi} from "@/apis/Login.js";
import {findnewCartApi, mergeCartApi} from "@/apis/cart.js";
import {useCartStore} from "@/stores/carStore.js";

export const UserStore = defineStore('UserStore', () => {
    const cartStore = useCartStore();
    const userInfo = ref({})

    const getUserInfo = async ({account, password}) => {
        const res = await loginApi({account, password})
        userInfo.value = res.result
        await mergeCartApi(cartStore.cartList.map((item) => {
            return {
                skuId: item.skuId,
                selected: item.selected,
                count: item.count,
            }
        }))
        const ress = await findnewCartApi()
        cartStore.cartList.value = ress.result;
    }
    const claerUserInfo = () => {
        userInfo.value = {}
    }
    return {
        userInfo,
        getUserInfo,
        claerUserInfo
    }
}, {
    persist: true,
},)