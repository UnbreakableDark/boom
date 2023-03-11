import { useState,createContext  } from "react";
import { Outlet,useNavigate } from "react-router-dom";
import {Button,Input} from "antd";
import "antd/dist/reset.css";
import "./Home.css";

const Context=createContext();
const { Search } = Input;


let defaultUser={
    account:"",
    password:"",
    name:"登录",
    isLog:false,
    phone:"",
    searchList:[],
}

function Home(props){
    let [user,setUser]=useState(defaultUser);
    let nav=useNavigate();
    const onSearch=(value,event)=>{
        //value search框的值，
        nav(`/search?condition=${value}`);
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
                        <div className="header-navbar">{user.isLog?user.name:"未登录"}</div>
                        <Button type="primary" 
                            onClick={()=>user.isLog?nav("/space"):nav("/login") }
                            
                        >
                            {user.name}
                        </Button>
                    </div>
                    <div className="header-button">
                        <Button type="primary" 
                            onClick={()=>user.isLog?nav("/message"):nav("/login")}  
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
        </div>
        </Context.Provider>
    )
}

export default Home;