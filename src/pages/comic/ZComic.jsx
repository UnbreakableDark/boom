import "./ZComic.css"
//import BookCard from "./components/BookCard"
import ZCard from "../../component/ZCard/ZCard";
import { comicList } from "../../data/comicList";

function ZComic(){
    const comicData=comicList;
    return(
        <div className="zcomic-box">
            <div>comic</div>
            <div className="zcomic-card">
                {comicData.map((item,index)=><div key={index}><ZCard data={item}/></div>)}
            </div>
        </div>
    )
}

export default ZComic;