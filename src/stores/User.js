import {defineStore} from "pinia";
import {ref} from 'vue'
import {loginApi} from "@/apis/Login.js";
export const UserStore=defineStore('UserStore',()=>{

    const userInfo=ref({})

    const getUserInfo=async ({account,password})=>{
      const res= await loginApi({account,password})
        userInfo.value=res.result
    }
    const claerUserInfo = () => {
        userInfo.value={}
    }
    return{
        userInfo,
        getUserInfo,
        claerUserInfo
    }
},{
    persist: true,
},)