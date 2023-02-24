import { useState } from "react";
import { Outlet,useNavigate } from "react-router-dom";
import { createContext } from 'react';
import {Button,Input} from "antd";
import "antd/dist/reset.css";
import "./CSS/Home.css"

const Context=createContext();
const { Search } = Input;


let defaultUser={
    account:"",
    password:"",
    name:"登录",
    isLog:false,

}

function Home(props){
    let [user,setUser]=useState(defaultUser);
    let nav=useNavigate();
    const onSearch=()=>{
        nav("/search");
    }

    return(
        <Context.Provider value={user}>
        <div>  
            <header className="header">
                <div>
                    <Button type="primary" onClick={()=>nav("/")} className="son">
                        首页
                    </Button>
                    <Button type="primary" onClick={()=>nav("/anime")} className="son">
                        剧番
                    </Button>
                    <Button type="primary" onClick={()=>nav("/music")} className="son">
                        音乐
                    </Button>
                    <Button type="primary" onClick={()=>nav("/comic")} className="son">
                        漫画
                    </Button>
                </div>
                <Search placeholder="search" onSearch={onSearch} enterButton style={{width:400}} />
                <div>
                    <Button type="primary" 
                        onClick={()=>nav("/login")}
                        className="son"
                    >
                        登录
                    </Button>
                    <Button type="primary" 
                        onClick={()=>user.isLog?nav("/center"):nav("/login")}  
                        className="son"
                    >
                        消息
                    </Button>
                    <Button type="primary" 
                        onClick={()=>user.isLog?nav("/center"):nav("/login")}  
                        className="son"
                    >
                        历史
                    </Button>
                    <Button type="primary" 
                        onClick={()=>user.isLog?nav("/center"):nav("/login")}  
                        className="son"
                    >
                        个人
                    </Button>
                </div>
            </header>
            <Outlet context={[user,setUser]}></Outlet>
        </div>
        </Context.Provider>
    )
}

export default Home;