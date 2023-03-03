import "./AnimeCard.css"

function AnimeCard(props){
    const data=props.data
    return(
        <div style={{display:"inline-block",margin:20}}>
            <a href={data.source} className="anime-list" target="_blank" rel="noreferrer">
                <img src={data.image} alt="" className="anime-image" />
                <div>{data.name}</div>
                <div>{data.author}</div>
            </a>
        </div>
    )
}

export default AnimeCard;