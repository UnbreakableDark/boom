import { useState } from "react";
import { Carousel } from "antd";
import { animeCarousel } from "../../data/animeCarousel";
import "./Carousel.css"

function ZCarousel({data=animeCarousel}){
    const [list,setList]=useState(data);
    return (
       <div>
            <Carousel autoplay className="carousel-box" dotPosition="bottom"> 
                {list.map((item,index,array)=>{
                    return(
                    <div key={index} className="carousel-list">
                        <div className="carousel-text">{item.type}</div>
                        <div className="carousel-text">强烈推荐!!!</div>
                        <img src={item.image} alt="" className="carousel-image"/>
                        <a href={item.source}>{item.name}</a>
                    </div>
                    )
                })}
            </Carousel>
       </div>
    )
}


export default ZCarousel;