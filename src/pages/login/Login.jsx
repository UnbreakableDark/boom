//import { useState } from "react";
import {Button,Input} from "antd";
import "antd/dist/reset.css";
import { useNavigate,useOutletContext } from "react-router-dom";
import "./Login.css";
import { debounce } from "../../utils/debounce";
import axios from "axios";
import Global from "../../data/global";
import "../../data/mock.js"

const serverURL=Global.server;


export default function Login(props){
    let [user,setUser]=useOutletContext();
    let navigate=useNavigate();
    const changeAccount=(e)=>{
        setUser({...user,account:e.target.value});//改变账号
    }
    const changePassword=(e)=>{
        setUser({...user,password:e.target.value});//改变密码
    }
    const log=()=>{
        let message={account:user.account,password:user.password}
        axios.post(serverURL+"/login",message)
        .then(function(res){
            //console.log(res);
            if(res.data.isLog==="账号未注册"){ alert("账号未注册")}
            if(res.data.isLog==="密码错误"){ alert("密码错误")}
            if(res.data.isLog===true){
                setUser({...res.data,});
                alert("欢迎回来"+res.data.name);
                navigate("/");
            }
        })
    }
    return(
        <div className="box">
            <div className="login">
                <div style={{margin:50}}>
                    请登录
                </div>
                <div>
                    账号：
                    <Input 
                        type="text"
                        value={user.account}
                        name="account"
                        onChange={(e)=>{debounce(changeAccount(e),500)}}
                        className=""
                        style={{width:200}}
                    />
                    <Button type="dashed" onClick={()=>navigate("/register")} style={{margin:10}}>
                        立即注册
                    </Button>
                </div>
                <div>
                    密码：
                    <Input  
                        type="password"
                        value={user.password}
                        name="password"
                        onChange={(e)=>{debounce(changePassword(e),500)}}
                        style={{width:200}} 
                    />
                    <Button type="dashed" onClick={()=>navigate("/forgot")} style={{margin:10}}>
                        忘记密码
                    </Button>
                </div>
                <div>
                    <br />
                    <Button type="dashed" onClick={log} style={{width:100}}>登录</Button>
                </div>
                <div style={{margin:50}}>
                    <p>如遇到页面问题,请联系tel:06558204</p>
                </div>
            </div>
        </div>
    )
}






       /*   log函数中的
            const res=await axios.post(serverURL+"/login",message);
            console.log(res);
            if(res.isLog==="账号未注册"){ alert("账号未注册")}
            if(res.isLog==="密码错误"){ alert("密码错误")}
            if(res.isLog===true){
                setUser({...res,});
                navigate("/");
                
    }*/
        

        //无用代码
        /*
        async function axiosF(){
            let nowUser=await axios(
                "https://www.axios-http.cn/docs/example",
                msg
            );
            nowUser={isLog:true,name:"zyy"}
            if(nowUser.isLog===true){
                setUser({name:nowUser.name,isLog:true})
                navigate("/");
            }
        }
        axiosF();
        
        let nowUser={isLog:true,name:"ZYY"}
        if(nowUser.isLog===true){
            setUser({name:nowUser.name,isLog:true});
            navigate("/");
        }
        */