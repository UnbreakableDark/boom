import "./ZArea.css";
import { useState } from "react";
import { animeCarousel } from "../../data/animeCarousel";
import ZCarousel from "../Carousel/Carousel";
import { amimeList } from "../../data/animeList";
import ZCard from "../ZCard/ZCard"

function ZArea(props){
    const [carouselList,setCarouselList]=useState(animeCarousel);
    return (
        <div className="area-box">
            <div className="area-suggest">
                <ZCarousel data={carouselList}></ZCarousel>
            </div>
            <div className="area-list">
                {amimeList.slice(0,4).map((item,index,array)=>{
                    return <div key={index}><ZCard data={item}></ZCard></div>
                })}
            </div>
            <div>
                <div className="area-a"><a href="/anime">更多</a></div>
            </div>
        </div>
    )
}

export default ZArea;