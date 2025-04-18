import {defineStore} from "pinia";
import {ref, computed} from 'vue'
import {UserStore} from './User.js'
import {findnewCartApi, insertCartApi, deleteCartApi} from "@/apis/cart.js";

export const useCartStore = defineStore('cart', () => {
    const cartList = ref([])
    const userstre = UserStore()
    const islogn = computed(() => userstre.userInfo.token)


    const addCart = async (goods) => {
        const {skuId, count} = goods
        if (islogn.value) {
            await insertCartApi({skuId, count})
            const res = await findnewCartApi()
            cartList.value = res.result;
        } else {
            const item = cartList.value.find((item) => goods.skuId === item.skuId)
            if (item) {
                item.count += goods.count;
            } else {
                cartList.value.push(goods)
            }

        }
    }
    const delCart = async (skuId) => {
        if (islogn.value) {
            await deleteCartApi([skuId])
            const res = await findnewCartApi()
            cartList.value = res.result;
        } else {
            cartList.value = cartList.value.filter((item) => skuId !== item.skuId)
        }

    }
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))
    const singleCheck = (skuId, selected) => {
        const item = cartList.value.find((item) => skuId === item.skuId)
        if (item) {
            item.selected = selected
        }

    }
    const isALL = computed(() =>
        cartList.value.every((item) => item.selected === true)
    )
    const selectedPrice = computed(() => cartList.value.filter((item) => item => item.selected).reduce((a, c) => a + c.count * c.price, 0))
    const selectedCount = computed(() => cartList.value.filter((item) => item => item.selected).reduce((a, c) => a + c.count, 0))
    const allCheck = (selected) => {
        cartList.value.forEach((item) => item.selected = selected)
    }
    return {
        selectedCount,
        selectedPrice,
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice,
        singleCheck,
        isALL,
        allCheck,
        
    }
}, {
    persist: true,
})