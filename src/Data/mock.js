import  Mock  from "mockjs";
import Global from "./global";
import DataBase from "./database";

const serverURL=Global.server;



//设置延时请求  延时200-600毫秒请求到数据
Mock.setup({timeout:"200-400",})

export const dataUser=Mock.mock(serverURL+"/login","post",(options)=>{
    let opt=JSON.parse(options.body);
    let user={
        account:"账号未注册",
        password:"账号未注册",
        name:"账号未注册",
        isLog:"账号未注册",
        phone:"账号未注册",
    }
    let userNow=DataBase.userList.find((item,index,array)=> item.account===opt.account)
    if(userNow!==undefined){
        user={
            account:"密码错误",
            password:"密码错误",
            name:"密码错误",
            isLog:"密码错误",
            phone:"密码错误",
        }
        if(userNow.password===opt.password ) user=userNow;
    }
    
    return user;
});
//
export const musicMock=Mock.mock(serverURL+"/music","get",(options)=>{
    return DataBase.musicList.slice(0,4);
});


 /*
    if(DataBase.userList.filter((item,index,array)=> item.account===opt.account)){
        user={
            account:"密码错误",
            password:"密码错误",
            name:"密码错误",
            isLog:"密码错误",
            phone:"密码错误",
        }
        if(DataBase.userList.filter((item,index,array)=>{
            return item.account===opt.account && item.password===opt.password;
        })){
            user=DataBase.userList.filter((item,index,array)=>{
                return item.account===opt.account && item.password===opt.password;
            })
        }
        
    }
    */