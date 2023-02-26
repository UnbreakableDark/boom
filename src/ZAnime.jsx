import "./CSS/ZAnime.css"
import { amimeList } from "./Data/animeList";


function ZAnime(){
    const aList=amimeList;
    return(
        <div className="zanime-box">
            <p>anime</p>
            <div className="anime-box">
                {aList.map((item,index,array)=><div><AnimeList data={item}/></div>)}
            </div>
        </div>
    )
}

export default ZAnime;


function AnimeList(props){
    const data=props.data
    return(
        <div style={{display:"inline-block",margin:20}}>
            <a href={data.anime} className="anime-list" target="_blank" rel="noreferrer">
                <img src={data.image} alt="" className="anime-image" />
                <div>{data.name}</div>
                <div>{data.publish}出品</div>
                <div>
                    <span>类型：{data.type} {"\u00A0\u00A0\u00A0\u00A0"}</span>
                    <span>共{data.chapter}集</span>
                </div>
            </a>
        </div>
    )
}