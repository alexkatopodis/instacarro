import React from 'react';
import Button from '../button';
import './Card.css';

const Card = (props) => {
    const imageStyle = {
        background:`url(${props.data.imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    };
    const biggerOffer = props.data.bids.length === 0 ? {amount: 0} : props.data.bids[props.data.bids.length -1]
    
    return (
        <div className="card">
            <div className="image-container" style={imageStyle}>
                <button>
                    ver detalhes
                </button>                
            </div>
            <div className="details-card">
                <div className="first-container">
                    <div className="time-remaining-container">
                        <span className="time-remaining-text">
                            TEMPO RESTANTE
                        </span>
                        <span className="time-remaining">
                            15:55:55
                        </span>
                    </div>
                    <div className="vertical-bar"></div>
                    <div className="last-offer-container">
                        <span className="last-offer-text">
                            ÚLIMA OFERTA
                        </span>
                        <span className="last-offer-price">
                            R$ {biggerOffer.amount}
                        </span>
                    </div>
                </div>

                <div className="second-container">
                    <h4 className="card-make">
                        {props.data.make} {props.data.model} {props.data.version}
                    </h4>
                </div>

                <div className="third-container">
                    <div className="year">
                        {props.data.year}
                    </div>
                    <div className="vertical-bar" />
                    <div className="km">
                        {props.data.km} KM
                    </div>
                </div>
            </div>
            <Button content={"FAZER OFERTA"} onClick={() => props.handleMakeOffer(props.data.id)} />

        </div>
    )
}


export default Card;
