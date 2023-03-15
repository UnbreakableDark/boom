import "./Register.css";
import { useState } from "react";
import {Button,Input} from "antd";
import "antd/dist/reset.css";
import { useNavigate,useOutletContext } from "react-router-dom";
import { debounce } from "../../utils/debounce";
import axios from "axios";
import Global from "../../data/global";
import "../../data/mock.js"

const serverURL=Global.server;


function Register(props){

    const [user,setUser]=useOutletContext();
    const nav=useNavigate();
    const [now,setNow]=useState({password:""});

    const changeName=(e)=>{
        setUser({...user,name:e.target.value});//改变用户名
    }
    const changeAccount=(e)=>{
        setUser({...user,account:e.target.value});//改变账号
    }
    const changePassword=(e)=>{
        setUser({...user,password:e.target.value});//改变密码
    }
    const changeNowPassword=(e)=>{
        setNow({...now,password:e.target.value});//确认密码
    }
    const changePhone=(e)=>{
        setUser({...user,phone:e.target.value});//改变电话
    }

    const register=()=>{
        let isNone=0;//判断是否有未填项
        if(user.name!=="") isNone++;
        if(user.password!=="") isNone++;
        if(user.account!=="") isNone++;
        if(user.phone!=="") isNone++;
        if(now.password!=="") isNone++;
        if(isNone===5){
            if(user.password===now.password){
                async function ss(){
                    const res=await axios.post(serverURL+"/register",user);
                    if(res.data.registerTime){
                        setUser({...user,...res.data});
                        alert(`注册成功,欢迎新人:${user.name}`);
                        nav("/");
                        //console.log(user);
                    }else{
                        alert(`注册失败 ${res.data.mistake}`)
                    }
                }
                ss();//包装下async函数
            }else{
                alert("两次输入的密码不一致");
                //window.location.reload();   刷新页面 就比较邪恶了 哈哈哈
            }
        }else{
            alert("有未填项");
        }
    }

    return(
        <div className="register-box">
            <div className="register">
                <div className="register-head">欢迎注册</div>
                <div>
                    <div className="register-text">用户名：</div>
                    <Input 
                        type="text"
                        value={user.name}
                        name="account"
                        onChange={(e)=>{debounce(changeName(e),500)}}
                        className=""
                        style={{width:200}}
                    />
                </div>
                <div>
                    <div className="register-text">账号：</div>
                    <Input 
                        type="text"
                        value={user.account}
                        name="account"
                        onChange={(e)=>{debounce(changeAccount(e),500)}}
                        className=""
                        style={{width:200}}
                    />
                </div>
                <div>
                    <div className="register-text">密码：</div>
                    <Input  
                        type="password"
                        value={user.password}
                        name="password"
                        onChange={(e)=>{debounce(changePassword(e),500)}}
                        style={{width:200}} 
                    />
                </div>
                <div>
                    <div className="register-text">确认密码：</div>
                    <Input  
                        type="password"
                        value={now.password}
                        name="password"
                        onChange={(e)=>{debounce(changeNowPassword(e),500)}}
                        style={{width:200}} 
                    />
                </div>
                <div>
                    <div className="register-text">联系电话：</div>
                    <Input  
                        type="text"
                        value={user.phone}
                        name="password"
                        onChange={(e)=>{debounce(changePhone(e),500)}}
                        style={{width:200}} 
                    />
                </div>
                <div>
                    <Button type="dashed" onClick={register} style={{margin:10}}>
                        立即注册
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Register