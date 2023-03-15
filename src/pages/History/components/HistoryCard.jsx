import "./HistoryCard.css"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { handlerTime } from "../../../utils/ztime";

function HistoryCard(props){

    const [search,setSearch]=useState(props.data);
    const nav=useNavigate();

    const searchIt=(condition)=>{
        nav(`/search?condition=${condition}`);
    }

    return (
        <div className="hcard-container" onClick={()=>searchIt(search.condition)}>
            <div className="hcard-list">
                <div className="hcard-time">{handlerTime(search.time)}</div>
                <div className="hcard-event">{search.condition}</div>
            </div>
            
        </div>
    )
}


export default HistoryCard;