import "./ZHistory.css"
//import { useEffect } from "react";
import HistoryCard from "./components/HistoryCard";
import { useOutletContext } from "react-router-dom";

function ZHistory(props){
    const [user,setUser]=useOutletContext();
    const list=[...user.searchList].reverse();
    return(
        <div className="history-container">
            <h2>搜索历史</h2>
            <div>
                {list.map((item,index)=><div key={index}><HistoryCard data={item}/></div>)}
            </div>
        </div>
    )
}

export default ZHistory;