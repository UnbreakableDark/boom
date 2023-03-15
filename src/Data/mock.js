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
    return DataBase.musicList;
});

export const registerMock=Mock.mock(serverURL+"/register","post",(options)=>{
    let user=JSON.parse(options.body);
    if(DataBase.userList.find((item)=>item.account===user.account)){
        user.registerTime=false;
        user.mistake="该账户已注册"
        //console.log(user,"-");
        return user
    }else{
        user.registerTime=new Date();
        DataBase.userList.push(user);
        user.isLog=true;
        return user;
    }
})

export const forgotMock=Mock.mock(serverURL+"/forgot","post",(options)=>{
    let user=JSON.parse(options.body);
    let now=DataBase.userList.find((item)=>item.account===user.account);
    if(now.phone===user.phone){
        now.password=user.password;
        return {
            forgot:true,
            mistake:""
        }
    }else{
        //user.mistake="未注册或预留手机号错误";
        return {
            forgot:false,
            mistake:"未注册或预留手机号错误",
        }
    }
})

export const centerMock=Mock.mock(serverURL+"/center","post",(options)=>{
    const changeUser=JSON.parse(options.body);
    let now=null;
    DataBase.userList.map((item,index,array)=>{
        if(item.account===changeUser.account){now=index}
    })
    //alert(now)
    if(now!==null){
        DataBase.userList[now]=changeUser;
        return {
            result:true,
        }
    }else{
        return {
            result:false,
            mistake:"修改失败 原因未知"
        }
    }
})


export const searchListMock=Mock.mock(serverURL+"/searchlist","post",(options)=>{
    let user=JSON.parse(options.body);
    let now=DataBase.userList.find((item)=>item.account===user.account);
    now.searchList=user.searchList;

})


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