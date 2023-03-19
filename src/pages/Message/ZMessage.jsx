import "./ZMessage.css"
import Envelope from "./components/Envelope";
import { messageList } from "../../data/messageList";

const messageListR=messageList.reverse();//倒叙显示

function ZMessage(props){

    const open=()=>{
        //window.open(require("./组件列表.txt")); 打开列表
       }
    return(
        <div className="message-box">
            <header className="message-header">
                <h2 style={{textAlign:"center"}}>信息中心</h2>
                <p>————这里展示着关于本站的信息，以及站主的留言</p>
                <p>——————————项目大纲 亦或是 碰到的问题总结</p>
            </header>
            <div>
                {messageListR.map((item,index)=><div key={index}><Envelope data={item}></Envelope></div>)}
            </div>
        </div>
    )
}

export default ZMessage;