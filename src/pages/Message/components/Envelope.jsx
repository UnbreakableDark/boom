import "./Envelope.css"
import { useState } from "react";

function Envelope(props){
    const [data,setData]=useState(props.data);
    const open=()=>{
        window.open(data.source)
    }
    return (
        <div className="envelope-container" onClick={open}>
            <div>{data.title}</div>
        </div>
    )
}

export default Envelope;