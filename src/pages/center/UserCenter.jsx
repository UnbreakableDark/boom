import "./userCenter.css";
import {Button,Input,Select} from "antd";
import "antd/dist/reset.css";
import { useOutletContext } from "react-router-dom";
import { debounce } from "../../utils/debounce";
import axios from "axios";
import Global from "../../data/global";
import "../../data/mock.js"

const serverURL=Global.server;


function UserCenter(props){
    const [user,setUser]=useOutletContext();//传入全局的user

    const changePhone=(e)=>{
        setUser({...user,phone:e.target.value});//改变电话
    }
    const changeMotto=(e)=>{
        setUser({...user,motto:e.target.value});//改变座右铭
    }
    const changeEmail=(e)=>{
        setUser({...user,email:e.target.value});//改变邮箱
    }
    const changeAddress=(e)=>{
        setUser({...user,address:e.target.value});//改变地址
    }
    const changeCareer=(e)=>{
        setUser({...user,career:e.target.value});//改变职业
    }
    const changeBirthday=(e)=>{
        setUser({...user,birthday:e.target.value});//改变生日
    }

    const changeSex=(e)=>{
        if(e==="男"){
            setUser({...user,sex:"boy"});//改变性别
        
        }else if(e==="女"){
            setUser({...user,sex:"girl"});//改变性别
        }
    }

    //window.addEventListener("mousewheel",changeSex,{passive:true});


    const revise=()=>{
        //提交按钮
        async function ss(){
            const res=await axios.post(serverURL+"/center",user);
            //alert(res.data.result)
            if(res.data.result){
                alert(`修改成功`);
            }else{
                alert(`修改失败 ${res.data.mistake}`)
            }
        }
        ss();//包装下async函数
    }

    return(
        <div className="center-container">
            <div className="center-head">
                <h2>个人中心</h2>
                <span>——为了更好的了解您，请完善您的个人信息</span>
            </div>
            <form className="center-form">
                <div className="center-item">
                    <div className="center-text">用户名：</div>
                    <Input 
                        type="text"
                        value={user.name}
                        name="name"
                        //onChange={(e)=>{debounce(changeName(e),500)}}
                        className="center-button"
                        style={{width:200,backgroundColor:"white"}}
                        disabled
                    />
                </div>
                <div className="center-item">
                    <div className="center-text">账号：</div>
                    <Input 
                        type="text"
                        value={user.account}
                        name="account"
                        //onChange={(e)=>{debounce(changeName(e),500)}}
                        className="center-button"
                        style={{width:200,backgroundColor:"white"}}
                        disabled
                    />
                </div>
                <div className="center-item">
                    <div className="center-text">注册时间：</div>
                    <Input 
                        type="text"
                        value={user.registerTime}
                        name="registerTime"
                        //onChange={(e)=>{debounce(changeName(e),500)}}
                        className="center-button"
                        style={{width:200,backgroundColor:"white"}}
                        disabled
                    />
                </div>
                <div className="center-item">
                    <div className="center-text">电话：</div>
                    <Input 
                        type="text"
                        value={user.phone}
                        name="phone"
                        onChange={(e)=>{debounce(changePhone(e),500)}}
                        className="center-button"
                        style={{width:200}}
                    />
                </div>
                <div className="center-item">
                    <div className="center-text">座右铭：</div>
                    <Input 
                        type="text"
                        value={user.motto}
                        name="motto"
                        onChange={(e)=>{debounce(changeMotto(e),500)}}
                        className="center-button"
                        style={{width:200}}
                    />
                </div>
                <div className="center-item">
                    <div className="center-text">E-mail：</div>
                    <Input 
                        type="email"
                        value={user.email}
                        pattern=".+@163\.com"
                        name="email"
                        onChange={(e)=>{debounce(changeEmail(e),500)}}
                        className="center-button"
                        style={{width:200}}
                    />
                </div>
                <div className="center-item">
                    <div className="center-text">地址：</div>
                    <Input 
                        type="text"
                        value={user.address}
                        name="address"
                        onChange={(e)=>{debounce(changeAddress(e),500)}}
                        className="center-button"
                        style={{width:200}}
                    />
                </div>
                <div className="center-item">
                    <div className="center-text">职业：</div>
                    <Input 
                        type="text"
                        value={user.career}
                        name="career"
                        onChange={(e)=>{debounce(changeCareer(e),500)}}
                        className="center-button"
                        style={{width:200}}
                    />
                </div>
                <div className="center-item">
                    <div className="center-text">生日：</div>
                    <Input 
                        type="date"
                        value={user.birthday}
                        name="birthday"
                        onChange={(e)=>{changeBirthday(e)}}
                        className="center-button"
                        style={{width:200}}
                    />

                </div>
                <div className="center-item">
                    <div className="center-text">性别：</div>
                    <Select 
                        defaultValue={user.sex}
                        style={{ width: 200 }}
                        allowClear
                        className="center-button"
                        onChange={changeSex}
                        options={[{value:"男",lable:"boy"},{value:"女",lable:"girl"}]}
                    />
                </div>
                <div>
                    <Button type="dashed" onClick={revise} style={{margin:10}}>
                        提交修改
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default UserCenter;

/*
    <div className="center-item">
                    <div className="center-text">性别：</div>
                    <Input 
                        type="text"
                        value={user.sex}
                        name="career"
                        onChange={(e)=>{debounce(changeCareer(e),500)}}
                        className=""
                        style={{width:50}}
                    />
                    <Input 
                        type="radio"
                        value="boy"
                        name="sex"
                        className=""
                        style={{width:50}}
                    />男
                    <Input 
                        type="radio"
                        value="girl"
                        name="sex"
                        className=""
                        style={{width:50}}
                    />女
                </div>
*/