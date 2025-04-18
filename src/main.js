import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from '@/router'

// 引入初始化样式文件
import '@/styles/common.scss'
import {useIntersectionObserver} from "@vueuse/core";

const pinia=createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')


//自定义全局指令
app.directive('img-lazy',{
    mounted(el,binding){
        useIntersectionObserver(
            el,([{isIntersecting}])=>{
                if(isIntersecting){
                    el.src=binding.value
                }
            }
        )
    }
})