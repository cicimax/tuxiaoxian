import {defineStore} from "pinia";
import {ref,computed} from 'vue'

export const useCartStore = defineStore('cart', () => {
    const cartList = ref([])
    const addCart = (goods) => {
      const item= cartList.value.find((item)=>goods.skuId===item.skuId)
        if(item){
            item.count+=goods.count;
        }else {
            cartList.value.push(goods)
        }
    }
    const delCart = (skuId) => {
          cartList.value=cartList.value.filter((item)=>skuId!==item.skuId)
    }
    const allCount=computed(()=> cartList.value.reduce((a,c)=> a+c.count,0))
    const allPrice=computed(()=> cartList.value.reduce((a,c)=> a+c.count*c.price,0))
    const singleCheck=(skuId,selected)=>{
       const item=cartList.value.find((item)=>skuId===item.skuId)
        if(item)  item.selected=selected;

    }
    return {
        cartList,
        addCart,
        delCart,
        allCount,
        allPrice,
        singleCheck
    }
},{
    persist: true,
})