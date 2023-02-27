import "./ZAnime.css"
import { amimeList } from "../../data/animeList";
import AnimeCard from "./components/AnimeCard";

function ZAnime(){
    const aList=amimeList;
    return(
        <div className="zanime-box">
            <p>anime</p>
            <div className="anime-box">
                {aList.map((item,index,array)=><div><AnimeCard data={item}/></div>)}
            </div>
        </div>
    )
}

export default ZAnime;

