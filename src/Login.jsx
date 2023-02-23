import {Button,Input,Space} from "antd";
import "antd/dist/reset.css";
import { useNavigate,useOutletContext } from "react-router-dom";


function Login(props){
    let [user,setUser]=useOutletContext();
    let navigate=useNavigate();
    const changeAccount=(e)=>{
        setUser({account:e.target.value});
    }
    const changePassword=(e)=>{
        setUser({password:e.target.value});
    }
    const log=()=>{
        const nowUser={
            //通讯后获得的信息
            name:"zyy",
        }
        setUser({name:nowUser.name,isLog:true})
        navigate("/");
    }
    return(
        <div className="login">
                账号：
                <Input type="text"
                    placeholder="账号"
                    value={user.account}
                    onChange={(e)=>{changeAccount(e)}}
                    className=""
                    style={{width:200}}
                />
                <Button type="dashed" onClick={()=>navigate("/register")}>立即注册</Button>
                <br />
                密码：
                <Input  type="text"
                    placeholder="密码"
                    value={user.password}
                    onChange={(e)=>{changePassword(e)}}
                    style={{width:200}}
                    
                />
                <Button type="dashed" onClick={()=>navigate("/forgot")}>忘记密码</Button>
                <br />
                <Button type="dashed" onClick={log}>登录</Button>
        </div>
    )
}

export default Login;