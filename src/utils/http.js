import axios from "axios";
import {ElMessage} from "element-plus";
import 'element-plus/theme-chalk/el-message.css'
import {UserStore} from '@/stores/User.js'
import router from "@/router/index.js";

const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
});

// 请求拦截器（必须返回config）
httpInstance.interceptors.request.use((config) => {

    const userStore =  UserStore()
    const token=userStore.userInfo.token
    if(token){
        config.headers['Authorization'] = `Bearer ${token}`
    }
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
        const userStore =  UserStore()
        // 统一处理错误（如401跳登录页）
        ElMessage({
            type:'warning',
            message: error.response.data.message,
        })
        if(e.response.status===401){
            userStore.claerUserInfo()
            router.push('/login')
        }
        return Promise.reject(error);
    }
);

export default httpInstance;