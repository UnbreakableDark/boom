import { useState } from "react";
import { Outlet,useNavigate } from "react-router-dom";
import { createContext } from 'react';
import {Button,Input as Search,Space} from "antd";
import "antd/dist/reset.css";
import "./Home.css"

const Context=createContext();


let defaultUser={
    account:"",
    password:"",
    name:"登录|注册",
    isLog:false,

}

function Home(props){
    let [user,setUser]=useState(defaultUser);
    let nav=useNavigate();
    const onSearch=()=>{
        alert("a")
        nav("/search");
    }

    return(
        <Context.Provider value={user}>
        <div>
            <header className="header">            
                <Space>
                <Search placeholder="input search text" onSearch={onSearch} enterButton />
                </Space>
                <Button type="dashed" onClick={()=>nav("/")}>首页</Button>
                <Button type="dashed" onClick={()=>nav("/login")}>{user.name}</Button>
                <Button type="dashed" onClick={()=>user.isLog?nav("/center"):nav("/login")}>个人中心</Button>
            </header>
            <Outlet context={[user,setUser]}></Outlet>
        </div>
        </Context.Provider>
    )
}

export default Home;