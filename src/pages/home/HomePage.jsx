import { useState,useEffect} from "react";
//import { Outlet,useNavigate } from "react-router-dom";
import {FloatButton} from "antd";
import "antd/dist/reset.css";
import "./Home.css";
import ZArea from "../../component/ZArea/ZArea";
import { animeCarousel } from "../../data/animeCarousel";
import { animeList } from "../../data/animeList";
import {comicList,comicCarousel} from "../../data/comicList"
import {musicList,musicCarousel} from "../../data/musicList"
import Global from "../../data/global";

let animec=animeCarousel;
let comicc=comicCarousel;
let muiscc=musicCarousel;


function HomePage(props){
    const [animeCarousel,setAnimeCarousel]=useState(animec);
    const [musicCarousel,setMusicCarousel]=useState(muiscc);
    const [comicCarousel,setComicCarousel]=useState(comicc);
    /*
    useEffect(()=>{
        setAnimeCarousel([...animeCarousel,...anime]);
        setMusicCarousel([...musicCarousel,...anime]);
        setComicCarousel([...comicCarousel,...anime]);
    },[])
    */

    return (
        <div className="home-container">
            <div className="home-guide">
                <h2>网站引导 请看消息</h2>
            </div>
             <div className="home-area">
                <ZArea data={animeCarousel} typeList={animeList.slice(0,4)}></ZArea>
                <ZArea data={musicCarousel} typeList={musicList.slice(0,4)}></ZArea>
                <ZArea data={comicCarousel} typeList={comicList.slice(0,4)}></ZArea>
                <FloatButton.BackTop></FloatButton.BackTop>
            </div>
        x</div>
    )    
}

export default HomePage;