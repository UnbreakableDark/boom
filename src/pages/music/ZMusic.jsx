import "./ZMusic.css";
import { useState,createContext,useEffect } from "react";
import MusicPlay from "./component/MusicPlay";
import MusicIndex from "./component/MusicIndex";

const MusicPlayContext=createContext();


function ZMusic(){
    const [musicNowF,setMusicNowF]=useState({})

    const playing=(item)=>{
        //兄弟传值中转
        setMusicNowF({...item});
    }


    return(
        <MusicPlayContext.Provider value={musicNowF}>
        <div className="music-box">
            <header className="music-header">
                <h2>音乐区</h2>
            </header>
            <nav className="music-nav">
                <div className="music-index">
                    <MusicIndex playing={playing}></MusicIndex>
                </div>
                <div className="music-play">
                <MusicPlay now={musicNowF}></MusicPlay>
                </div>
            </nav>
        </div>
        </MusicPlayContext.Provider>
    )
}

export default ZMusic;