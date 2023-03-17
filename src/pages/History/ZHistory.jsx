import "./ZHistory.css"
import { useEffect,useState } from "react";
import { Timeline } from "antd";
import HistoryCard from "./components/HistoryCard";
import { useOutletContext } from "react-router-dom";
import { handlerTime } from "../../utils/ztime";


function ZHistory(props){
    const [user,setUser]=useOutletContext();
    const list=[...user.searchList].reverse();
    const [line,setLine]=useState(()=>{
        let arr=list.map((item,index)=>{
            return {
                children:handlerTime(item.time),
                style:{height:100,padding:"20px 0"},
                key:index,
            }
        })
        return arr;
    });
    return(
        <div className="history-container">
            <h2>搜索历史</h2>
            <div className="history-box">
                <Timeline
                    className="history-line"
                    items={line}
                />
                <div>
                    {list.map((item,index)=><div key={index}><HistoryCard data={item}/></div>)}
                </div>
            </div>
        </div>
    )
}

export default ZHistory;