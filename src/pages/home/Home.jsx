import { useState,createContext  } from "react";
import { Outlet,useNavigate } from "react-router-dom";
import {Button,Input,Drawer} from "antd";
import Global from "../../data/global";
import "antd/dist/reset.css";
import "./Home.css";
import axios from "axios";
import "../../data/mock.js"

const Context=createContext();
const { Search } = Input;
const serverURL=Global.server;


let defaultUser=Global.user;
let defaultMap=new Map(Object.entries(defaultUser));
//第二种显示对象元素的方法
//let defaultValue=Object.values(defaultUser);
//{defaultValue[index].toString()

function Home(props){
    let [user,setUser]=useState(defaultUser);
    const [drawerState,setDrawerState]=useState(false);
    let nav=useNavigate();
    const onSearch=(value,event)=>{
        //value search框的值，
        let search={
            time:new Date(),
            condition:value
        }
        //user.searchList.push(search);
        let list=[...user.searchList];
        list.push(search);
        setUser({...user,searchList:list})
        axios.post(serverURL+"/searchlist",user);
        nav(`/search?condition=${value}`);
    }

    const drawerOpen=()=>{
        //抽屉打开
        setDrawerState(true);
    }
    const drawerClose=()=>{
        setDrawerState(false);
    }

    return(
        <Context.Provider value={user}>
        <div className="home-box">  
            <header className="header">
                <div className="header-box">
                    <div className="header-button">
                        <Button type="primary" onClick={()=>nav("/")} >
                            首页
                        </Button>
                    </div>
                    <div className="header-button">
                        <Button type="primary" onClick={()=>nav("/anime")} >
                            剧番
                        </Button>
                    </div>
                    <div className="header-button">
                        <Button type="primary" onClick={()=>nav("/music")} >
                            音乐
                        </Button>
                    </div>
                    <div className="header-button">
                        <Button type="primary" onClick={()=>nav("/comic")} >
                            漫画
                        </Button>
                    </div>
                </div>
                <div className="header-box" >
                    <Search 
                        placeholder="search" 
                        onSearch={onSearch} 
                        enterButton 
                        style={{width:400,height:16,}} 
                    />
                </div>
                <div className="header-box" >
                    <div className="header-button header-nav">
                        <div className="header-navbar">{user.isLog?<div><p>{user.name}</p><p>点击按钮获取详情</p></div>:"未登录"}</div>
                        <Button type="primary" 
                            onClick={()=>user.isLog?drawerOpen():nav("/login") }
                            
                        >
                            登录
                        </Button>
                    </div>
                    <div className="header-button">
                        <Button type="primary" 
                            onClick={()=>nav("/message")}  
                        >
                            消息
                        </Button>
                    </div>
                    <div className="header-button">
                        <Button type="primary" 
                            onClick={()=>user.isLog?nav("/history"):nav("/login")}  
                        >
                            历史
                        </Button>
                    </div>
                    <div className="header-button">
                        <Button type="primary" 
                            onClick={()=>user.isLog?nav("/center"):nav("/login")}  
                        >
                            个人
                        </Button>
                    </div>
                </div>
            </header>
                <Outlet context={[user,setUser]}></Outlet>

                <Drawer
                    title="user测试数据"
                    placement="left"
                    onClose={drawerClose}
                    open={drawerState}
                    key={1}
                >
                   <div>
                    <h2>下面是测试对象(当前登录的user)的具体数据 </h2>
                    {Object.keys(defaultUser).map((item,index)=>(
                        <div>
                            <p key={item}>{item}:{defaultMap.get(item).toString()}</p>
                        </div>
                    ))}
                   </div>
                </Drawer>

        </div>
        </Context.Provider>
    )
}

export default Home;