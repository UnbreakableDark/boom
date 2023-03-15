import "./Forgot.css";
import { useState } from "react";
import {Button,Input} from "antd";
import "antd/dist/reset.css";
import { useNavigate,useOutletContext } from "react-router-dom";
import { debounce } from "../../utils/debounce";
import axios from "axios";
import Global from "../../data/global";
import "../../data/mock.js"

const serverURL=Global.server;

function Forgot(props){

    const [user,setUser]=useOutletContext();
    const nav=useNavigate();
    const [now,setNow]=useState({password:""});


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

    const forgot=()=>{
        let isNone=0;//判断是否有未填项
        if(user.password!=="") isNone++;
        if(user.account!=="") isNone++;
        if(user.phone!=="") isNone++;
        if(now.password!=="") isNone++;
        if(isNone===4){
            if(user.password===now.password){
                async function ss(){
                    const res=await axios.post(serverURL+"/forgot",user);
                    if(res.data.forgot===true){
                        nav("/");
                        //window.location.reload();加了可以刷新页面，但mock的密码就白修改了
                        //console.log(user);
                    }else{
                        alert(`密码挂失失败 ,${res.data.mistake}`)
                    }
                }
                ss();//包装下async函数
            }else{
                alert("两次密码输入不一致");
            }
        }else{
            alert("信息缺失");
        }
    }

    return(
        <div className="register-box">
            <form action="">
        <div className="register">
            <div className="register-head">忘记密码了？不要慌哦！</div>
            <div>
                <div className="register-text">账号：</div>
                <Input 
                    type="text"
                    value={user.account}
                    name="account"
                    onChange={(e)=>{debounce(changeAccount(e),500)}}
                    className=""
                    style={{width:200}}
                    autoComplete="new-password"
                />
            </div>
            <div>
                <div className="register-text">预留电话：</div>
                <Input  
                    type="text"
                    value={user.phone}
                    name="password"
                    onChange={(e)=>{debounce(changePhone(e),500)}}
                    style={{width:200}} 
                    autoComplete="new-password"
                />
            </div>
            <div>
                <div className="register-text">密码重置：</div>
                <Input  
                    type="password"
                    value={user.password}
                    name="password"
                    onChange={(e)=>{debounce(changePassword(e),500)}}
                    style={{width:200}} 
                    autoComplete="new-password"
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
                    autoComplete="new-password"
                />
            </div>
            <div>
                <Button type="dashed" onClick={forgot} style={{margin:10}}>
                    忘记密码
                </Button>
            </div>
        </div>
        </form>
    </div>
    )
}

export default Forgot;