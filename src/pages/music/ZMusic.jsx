import "./ZMusic.css";
import { useState,createContext,useEffect } from "react";
import MusicPlay from "./component/MusicPlay";
import MusicIndex from "./component/MusicIndex";

const MusicPlayContext=createContext();


function ZMusic(){
    const [musicNow,setMusicNow]=useState({})

    const playing=(item)=>{
        //兄弟传值中转
        setMusicNow({...item});
        console.log(musicNow);

    }


    return(
        <MusicPlayContext.Provider value={musicNow}>
        <div className="music-box">
            <header className="music-header">
                <h2>音乐区</h2>
            </header>
            <nav className="music-nav">
                <div className="music-index">
                    <MusicIndex playing={playing}></MusicIndex>
                </div>
                <div className="music-play">
                <MusicPlay></MusicPlay>
                </div>
            </nav>
        </div>
        </MusicPlayContext.Provider>
    )
}

export default ZMusic;