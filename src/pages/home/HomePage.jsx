//import { useState,createContext  } from "react";
//import { Outlet,useNavigate } from "react-router-dom";
import {FloatButton,Watermark} from "antd";
import "antd/dist/reset.css";
import "./Home.css";
import ZArea from "../../component/ZArea/ZArea";
import { animeCarousel } from "../../data/animeCarousel";
import { animeList } from "../../data/animeList";
import {comicList} from "../../data/comicList"


function HomePage(props){
    return (
        <div>
             <div className="home-area">
                <ZArea data={animeCarousel} typeList={animeList.slice(0,4)}></ZArea>
                <ZArea data={animeCarousel} typeList={animeList.slice(4,8)}></ZArea>
                <ZArea data={animeCarousel} typeList={comicList.slice(0,4)}></ZArea>
                <FloatButton.BackTop></FloatButton.BackTop>
            </div>
        x</div>
    )    
}

export default HomePage;