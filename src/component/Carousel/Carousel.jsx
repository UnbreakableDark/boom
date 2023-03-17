import { useState } from "react";
import { Carousel } from "antd";
import { animeCarousel } from "../../data/animeCarousel";//默认数据
import "./Carousel.css"

//父组件传入  data数组（走马灯需要）即可    此页面数据 均以 state为数据源
//  走马灯图片 尽量往 16 : 9 靠
//取消掉的默认参数{data=animeCarousel}
function ZCarousel(props){
    const [list,setList]=useState(props.data);
    const playAnime=(source)=>{
        window.open(source);
    }
    return (
        <div>
            <div className="carousel-text">强烈推荐!!!</div>
            <Carousel autoplay className="carousel-box"> 
                {list.map((item,index,array)=>{
                    return(
                    <div key={index} className="carousel-list" onClick={()=>playAnime(item.source)}>
                        <p>{item.name}</p>
                        <img src={item.image} alt="" className="carousel-image"/>
                    </div>
                    
                    )
                })}
            </Carousel>
        </div>
    )
}


export default ZCarousel;