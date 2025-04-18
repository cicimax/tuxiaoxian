import httpInstance from "@/utils/http.js";

export const insertCartApi = ({skuId, count}) => {
    return httpInstance({
        method: "POST",
        url: "/member/cart",
        data: {
            skuId,
            count
        }
    })
}
export const findnewCartApi = () => {
    return httpInstance({
        url: "/member/cart",
    })
}
export const deleteCartApi = (idos) => {
    return httpInstance({
        url:'/member/cart',
        method:'DELETE',
        data:{idos}
    })
}
export const mergeCartApi = (data) => {
    return httpInstance({
        method:"POST",
        url:"/member/cart/merge",
        data
    })
}