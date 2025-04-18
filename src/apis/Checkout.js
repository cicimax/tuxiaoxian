import httpInstance from "@/utils/http.js";
/**
 * 获取结算信息
 */
export const getCheckoutInfoAPI = () => {
    return httpInstance({
        url:'/member/order/pre'
    })
}