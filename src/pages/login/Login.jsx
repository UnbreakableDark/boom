//import { useState } from "react";
import {Button} from "antd";
import "antd/dist/reset.css";
import { useNavigate,useOutletContext } from "react-router-dom";
import "./Login.css";
import axios from "axios";


export default function Login(props){
    let [user,setUser]=useOutletContext();
    let navigate=useNavigate();
    const changeAccount=(e)=>{
        setUser({...user,account:e.target.value});//改变账号 密码
    }
    const changePassword=(e)=>{
        setUser({...user,password:e.target.value});//改变账号 密码
    }
    const log=()=>{
        let message={account:user.account,password:user.password}
        let msg=JSON.stringify(message);
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
        */
        let nowUser={isLog:true,name:"ZYY"}
        if(nowUser.isLog===true){
            setUser({name:nowUser.name,isLog:true});
            navigate("/");
        }
    }
    return(
        <div className="box">
            <div className="login">
                <div style={{margin:50}}>
                    请登录
                </div>
                <div>
                    账号：
                    <input 
                        type="text"
                        value={user.account}
                        name="account"
                        onChange={(e)=>{changeAccount(e)}}
                        className=""
                        style={{width:200}}
                    />
                    <Button type="dashed" onClick={()=>navigate("/register")} style={{margin:10}}>
                        立即注册
                    </Button>
                </div>
                <div>
                    密码：
                    <input  
                        type="password"
                        value={user.password}
                        name="password"
                        onChange={(e)=>{changePassword(e)}}
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
