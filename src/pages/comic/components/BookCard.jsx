import "./BookCard.css"

function BookCard(props){
    const data=props.data;
    return(
        <div className="comic-box">
            <a  href={data.source} className="comic-list" target="_blank" rel="noreferrer">
                <div><img src={data.image} alt="" className="comic-image"/></div>
                <div className="comic-text">
                    <p>{data.name}</p>
                    <p>{data.author}</p>
                    <p>{data.type}</p>
                    <p>已完结{' '}共{data.chapter}话</p>
                </div>
            </a>
        </div>
    )
}

export default BookCard;