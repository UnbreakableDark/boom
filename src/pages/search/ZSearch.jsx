import { useSearchParams } from "react-router-dom";
import {Button} from "antd";
import "antd/dist/reset.css";
import "./ZSearch.css"

function ZSearch(props){
    //路由传参的固定写法
    const [params]=useSearchParams();
    let condition=params.get("condition");
    const changeArea=()=>{
        //改变分区
    }
    return(
        <div className="search-box">
            <header className="search-header">
                <div>
                    <p>{condition}的搜索结果</p>
                </div>
                <div className="search-button">
                    <Button type="primary" 
                            onClick={changeArea} 
                            name="anime" 
                            shape="round"
                    >
                        剧番
                    </Button>
                    <Button type="primary" 
                            onClick={changeArea} 
                            name="music" 
                            shape="round"
                    >
                        音乐
                    </Button>
                    <Button type="primary" 
                            onClick={changeArea} 
                            name="comic" 
                            shape="round"
                    >
                        漫画
                    </Button>
                </div>
            </header>
        </div>
    )
}

export default ZSearch;