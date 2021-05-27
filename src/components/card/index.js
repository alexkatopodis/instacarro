import React, { useState, useEffect } from 'react';
import Button from '../button';
import './Card.css';

const Card = (props) => {

    let baseTime = props.data.remainingTime;

    let countDown;

    const [state, setState] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        countDown = setInterval(() => setNewTime(), 1000);
    }, []);


    const setNewTime = () => {
        let time = baseTime;
        const ms = time % 1000;
        time = (time - ms) / 1000;
        let seconds = time % 60;
        time = (time - seconds) / 60;
        let minutes = time % 60;
        let hours = (time - minutes) / 60;
        baseTime -= 1000;


        if (hours < 10) {
            hours = `0${hours}`;
        }
        if (minutes < 10) {
            minutes = `0${minutes}`;
        }
        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        if (baseTime <= 0) clearInterval(countDown)

        setState({ hours, minutes, seconds });
    };
    const imageStyle = {
        background: `url(${props.data.imageUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
    };
    const biggerOffer = props.data.bids.length === 0 ? { amount: 0 } : props.data.bids[props.data.bids.length - 1]


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
                            <div className="time-section">
                                <div className="time">{state.hours || '00'}</div>
                            </div>
                            <div className="time-section">
                                <div className="time">:</div>
                            </div>
                            <div className="time-section">
                                <div className="time">{state.minutes || '00'}</div>
                            </div>
                            <div className="time-section">
                                <div className="time">:</div>
                            </div>
                            <div className="time-section">
                                <div className="time">{state.seconds || '00'}</div>
                            </div>

                        </span>
                    </div>
                    <div className="vertical-bar"></div>
                    <div className="last-offer-container">
                        <span className="last-offer-text">
                            ÚLIMA OFERTA
                        </span>
                        <span className="last-offer-price">
                            R$ {biggerOffer.amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                        </span>
                    </div>
                </div>

                <div className="second-container">
                    <div className="card-make">
                        {props.data.make} {props.data.model} {props.data.version}
                    </div>
                </div>

                <div className="third-container">
                    <div className="year">
                        {props.data.year}
                    </div>
                    <div className="vertical-bar" />
                    <div className="km">
                        {props.data.km.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')} KM
                    </div>
                </div>
            </div>
            <Button content={"FAZER OFERTA"} onClick={() => props.handleMakeOffer(props.data.id)} />

        </div>
    )
}


export default Card;


