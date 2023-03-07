import "./ZComic.css"
//import BookCard from "./components/BookCard"
import ZCard from "../../component/ZCard/ZCard";
import { comicList } from "../../data/comicList";
import { FloatButton } from "antd";

function ZComic(props){
    const comicData=comicList;
    return(
        <div className="zcomic-box">
            <h2>漫画区</h2>
            <div className="zcomic-card">
                {comicData.map((item,index)=><div key={index}><ZCard data={item}/></div>)}
                <FloatButton.BackTop></FloatButton.BackTop>
            </div>
        </div>
    )
}

export default ZComic;