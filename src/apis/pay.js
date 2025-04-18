import httpInstance from "@/utils/http.js";
// 创建订单
export const createOrderAPI = (data) => {
    return httpInstance({
        url: '/member/order',
        method: 'POST',
        data
    })
}
export const getOrderAPI = (id) => {
    return httpInstance({
        url: `/member/order/${id}`
    })
}