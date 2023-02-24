//import { useState } from "react";
import {Button,Input} from "antd";
import "antd/dist/reset.css";
import { useNavigate,useOutletContext } from "react-router-dom";
import "./CSS/Login.css";
import axios from "axios";


export default function Login(props){
    let [user,setUser]=useOutletContext();
    let navigate=useNavigate();
    const changeLog=(e)=>{
        setUser({[e.target.name]:e.target.value});
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
            <div>
                账号：
                <Input 
                    type="text"
                    value={user.account}
                    name="account"
                    onChange={(e)=>{changeLog(e)}}
                    className=""
                    style={{width:200}}
                />
                <Button type="dashed" onClick={()=>navigate("/register")}>立即注册</Button>
            </div>
            <div>
                密码：
                <Input  
                    type="text"
                    value={user.password}
                    name="password"
                    onChange={(e)=>{changeLog(e)}}
                    style={{width:200}} 
                />
                <Button type="dashed" onClick={()=>navigate("/forgot")}>忘记密码</Button>
            </div>
            <div>
            <Button type="dashed" onClick={log} style={{width:100}}>登录</Button>
            </div>
            <div>
                <br />
                <p>如遇到页面问题,请联系tel:95599</p>
                <p>账号：{user.account}</p>
                <p>密码：{user.password}</p>
            </div>
        </div>
        </div>
        
    )
}
