import DataBase from "./database";
class Global{
    static server="https://www.zhaoyue.com";
    static user={
        account:"",
        password:"",
        name:"",
        isLog:false,
        phone:"",
        searchList:[],
        mistake:"",
        registerTime:"",
        //新增
        motto:"",
        email:"",
        sex:"",
        birthday:"",
        address:"",
        level:0,
        exp:0,
        career:"",
    };
}

Global.user=DataBase.userList[0];//完美展示



export default Global;

