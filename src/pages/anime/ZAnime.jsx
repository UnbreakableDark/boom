import "./ZAnime.css"
import {Button,Input} from "antd";
import "antd/dist/reset.css";
import { useState,useEffect } from "react";
import { animeList } from "../../data/animeList";
//import AnimeCard from "./components/AnimeCard";
import ZCard from "../../component/ZCard/ZCard";


function ZAnime(){
    const [aList,setAList]=useState(animeList);
    const [pageList,setPageList]=useState(animeList.slice(0,12))
    const [amountPage,setAmountPage]=useState(()=>Math.ceil(aList.length/12));
    const [index,setIndex]=useState(1);
    const [skipPage,setSkipPage]=useState(1);

    const changePage=(operation)=>{
        //分页
        if(operation==="subtract"){setIndex(index-1);}
        if(operation==="add"){setIndex(index+1)}
        if(operation===skipPage){
            if(skipPage>amountPage){setIndex(3)}
            else setIndex(skipPage);
        }
    }
    const skipChange=(e)=>{
        setSkipPage(e.target.value)
    }
    const classify=(type)=>{
        //分类
        let list=animeList.filter((item,index,array)=>item.tag===type);
        setAList(list);
        setIndex(1);
    }
    useEffect(()=>{
        let nowList=aList;
        setPageList(nowList.slice(index*12-12,index*12));
        setAmountPage(Math.ceil(nowList.length/12));
    },[aList,index])

    return(
        <div className="zanime-box">
            <header className="zanime-header">
                <div>
                    <h2>番剧区</h2>
                </div>
                <div className="zanime-button">
                    <Button type="primary" 
                            onClick={()=>{setAList(animeList);setIndex(1);}} 
                            name="anime" 
                            shape="round"
                    >
                        全部
                    </Button>
                    <Button type="primary" 
                            onClick={()=>classify("游戏改")} 
                            name="游戏改" 
                            shape="round"
                    >
                        游戏改
                    </Button>
                    <Button type="primary" 
                            onClick={()=>classify("漫改")} 
                            name="漫改" 
                            shape="round"
                    >
                        漫改
                    </Button>
                    <Button type="primary" 
                            onClick={()=>classify("轻改")} 
                            name="轻改" 
                            shape="round"
                            //(e)=>classify(e.currentTarget.getAttribute("name")
                    >
                        轻改
                    </Button>
                    <Button type="primary" 
                            onClick={()=>classify("原创")} 
                            name="原创" 
                            shape="round"
                    >
                        原创
                    </Button>
                </div>
            </header>
            <div className="anime-box">
                {pageList.map((item,index,array)=><div key={index}><ZCard data={item}/></div>)}
            </div>
            <div style={{display:"flex",justifyContent:"space-between",margin:"0 50px"}}>
                <div style={{visibility:"hidden"}}>
                    <Input style={{width:64}}></Input>
                    <Button type="primary" onClick={()=>changePage("add")}>跳转到</Button>
                </div>
                <div>
                    {index>1 
                    ? <Button type="primary" onClick={()=>changePage("subtract")}>上一页</Button>
                    :null}
                    <Button type="primary" disabled>第{index}页,共{amountPage}页</Button>
                    {index<amountPage
                    ? <Button type="primary" onClick={()=>changePage("add")}>下一页</Button>
                    :null}
                </div>
                <div>
                    <Input style={{width:64}} value={skipPage} onChange={(e)=>skipChange(e)}></Input>
                    <Button type="primary" onClick={()=>changePage(skipPage)}>跳转到</Button>
                </div>
            </div>
        </div>

    )
}

export default ZAnime;

