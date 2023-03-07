import "./ZArea.css";
import { useState } from "react";
import { animeCarousel } from "../../data/animeCarousel";
import ZCarousel from "../Carousel/Carousel";
import { amimeList } from "../../data/animeList";
import ZCard from "../ZCard/ZCard"

//父组件传入  data（走马灯）,typeList（具体列表4个元素）两个数组即可   此页面数据 均以 state为数据源

function ZArea({data=animeCarousel,typeList=amimeList}){
    const [carouselList,setCarouselList]=useState(data);
    const [dataList,setDataList]=useState(typeList.slice(0,4))
    return (
        <div className="area-box">
            <div className="area-suggest">
                <ZCarousel data={carouselList}></ZCarousel>
            </div>
            <div className="area-list">
                {dataList.map((item,index,array)=>{
                    return <div key={index}><ZCard data={item}></ZCard></div>
                })}
            </div>
            <div>
                <div className="area-a">
                    <a href={"/"+dataList[0].type}>更多{dataList[0].type}</a>
                </div>
            </div>
        </div>
    )
}

export default ZArea;