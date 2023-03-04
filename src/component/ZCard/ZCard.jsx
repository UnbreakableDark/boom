import "./ZCard.css"

function ZCard(props){
    const data=props.data;
    return(
        <div className="card-box">
            <a  href={data.source} className="card-list" target="_blank" rel="noreferrer">
                <div><img src={data.image} alt="" className="card-image"/></div>
                <div className="card-text">
                    <p>{data.name}</p>
                    <p>出版：{data.author}</p>
                    <p>类型：{data.tag}</p>
                    <p>已完结{' '}共{data.chapter}话</p>
                </div>
            </a>
        </div>
    )
}

export default ZCard;