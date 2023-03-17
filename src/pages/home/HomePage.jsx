import { useState,useEffect} from "react";
//import { Outlet,useNavigate } from "react-router-dom";
import {FloatButton} from "antd";
import "antd/dist/reset.css";
import "./Home.css";
import ZArea from "../../component/ZArea/ZArea";
import { animeCarousel } from "../../data/animeCarousel";
import { animeList } from "../../data/animeList";
import {comicList} from "../../data/comicList"
import {musicList} from "../../data/musicList"

let anime=animeCarousel;


function HomePage(props){
    const [animeCarousel,setAnimeCarousel]=useState(anime);
    const [musicCarousel,setMusicCarousel]=useState(anime);
    const [comicCarousel,setComicCarousel]=useState(anime);
    /*
    useEffect(()=>{
        setAnimeCarousel([...animeCarousel,...anime]);
        setMusicCarousel([...musicCarousel,...anime]);
        setComicCarousel([...comicCarousel,...anime]);
    },[])
    */

    return (
        <div>
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