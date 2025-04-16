import {useIntersectionObserver} from "@vueuse/core";
export const lazyPluin={
    install(app){
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
    }
}