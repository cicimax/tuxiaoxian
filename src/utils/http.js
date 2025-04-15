import axios from "axios";

const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
});

// 请求拦截器（必须返回config）
httpInstance.interceptors.request.use((config) => {
    // 可在此添加token等逻辑
    return config; // 关键！必须返回处理后的config
}, (error) => {
    return Promise.reject(error);
});

// 响应拦截器
httpInstance.interceptors.response.use(
    (response) => {
        // 对响应数据做处理
        return response.data; // 通常返回data字段
    },
    (error) => {
        // 统一处理错误（如401跳登录页）
        return Promise.reject(error);
    }
);

export default httpInstance;