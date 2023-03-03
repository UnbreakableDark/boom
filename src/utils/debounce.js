
//防抖:用户事件触发过于频繁 只执行最后一次
export function debounce(fn,delay){
    let t=null;
    return function(){
        if(t!=null){
            clearTimeout(t);
        }
        t=setTimeout(() => {
            fn.call(this);
            fn();
        }, delay);
    }
}

//节流：控制执行次数
export function throttle(fn,delay){
    let flag=true;
    return function(){
        if(flag){
            setTimeout(()=>{
                fn.call(this);
                fn();
                flag=true;
            },delay)
        }
        flag=false;
    }
}


/*
    call,bind,apply
    call
1. fn.call()可以直接调用函数
2.  fn.call(this/obj,fn的参数1,参数2)可以绑定函数中的this

    apply
与call区别的是传参
  fn.apply(this,obj,[参数1，参数2])

  bind  
不会立即调用函数
let fun=fn.bind(this,参数1，参数2)；
    fun();
*/