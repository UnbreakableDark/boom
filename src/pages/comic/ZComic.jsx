import "./ZComic.css"
import BookCard from "./components/BookCard"
import { comicList } from "../../data/comicList";

function ZComic(){
    const comicData=comicList;
    return(
        <div className="zcomic-box">
            <div>comic</div>
            <div className="zcomic-card">
                {comicData.map((item)=><div><BookCard data={item}/></div>)}
            </div>
        </div>
    )
}

export default ZComic;