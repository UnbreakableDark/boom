import "./MusicPlay.css";
import { useState,useRef,useContext,useEffect} from "react";
import ZCard from "../../../component/ZCard/ZCard"
import DataBase from "../../../data/database";
import {StepBackwardOutlined,StepForwardOutlined,PlayCircleOutlined} from "@ant-design/icons";
import MusicPlayContext from "./MusicPlay"



const test=DataBase.musicList;

function MusicPlay(props){
    const [musicList,setMusicList]=useState(test);
    const [musicNow,setMusicNow]=useState(test[0])

    //let musicNow=useContext(MusicPlayContext);

    useEffect(()=>{
        setMusicNow(test[0]);
    },[])

    //  音乐播放用

    const [isPlay,setIsPlay]=useState(false);
    const playRef=useRef(null);
    const playMusic=()=>{
        if(isPlay) {playRef.current.play();}
        else {
            playRef.current.pause();
        }
        setIsPlay(isPlay?false:true);
    }
    const previousMusic=()=>{
        //音乐播放与暂停
        if(musicNow.id===1){alert("已经是第一首了")}
        else{
            setMusicNow(musicList[musicNow.id-2]);
        }

    }
    const nextMusic=()=>{
        if(musicNow.id===musicList.length){alert("已经是最后一首了")}
        else{
            //setMusicNow(musicList[musicNow.id]);
        }
    }

    return (
        
        <div className="play-box">
            <div>
                <img src="./nostudy.jpg" alt="22"/>    
            </div>
            <div>
                <ZCard data={musicNow}></ZCard>
            </div>
            <div>
                <audio src={musicNow.source}  ref={playRef} ></audio>
            </div>
            <div>
                <StepBackwardOutlined 
                    className="play-button"
                    onClick={previousMusic}
                />
                <PlayCircleOutlined 
                    className="play-button"
                    onClick={playMusic}
                />
                <StepForwardOutlined 
                    className="play-button"
                    onClick={nextMusic}
                />
            </div>
        </div>
    )
}

export default MusicPlay;