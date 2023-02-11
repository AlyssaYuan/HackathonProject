import React from "react"


export default function Card(props) {
    return (
        <div className="cards">
            <img className="img-cover" src={`/images/${props.img}`} />
            <div className="card-stats">
                <img className="rating-star" src="/images/star.png" />
                <span>{props.rating}</span>
                <span>({props.reviews})</span>
            </div>
            <div className="card-info">
                <span>{props.name}</span>
                <span>{props.address}</span>
                <span>{props.phone}</span>
            </div>
        </div>
    )
}
