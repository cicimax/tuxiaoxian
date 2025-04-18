import httpInstance from "@/utils/http.js";
export const loginApi=({account,password})=>{
    return httpInstance({
        url:'/login',
        method:'POST',
        data:{
            account,
            password
    }
    })
}