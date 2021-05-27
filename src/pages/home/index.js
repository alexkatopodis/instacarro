import React, { useState, useEffect } from "react";
import HeaderComponent from "../../components/header";
import GetInstaCarroData from "../../services/data.service";
import Card from "../../components/card";
import "./Home.css";

const Home = () => {

    const [data, setData] = useState([])

    useEffect(() => {
        if (data.length === 0) {
            GetInstaCarroData().then(result => {
                if (result.status === "success") setData(result.content)
                else {
                    console.log(result);
                }
            });
        }
    })

    const handleMakeOffer = (id) => {
       const updateData = data.map((item) => {
        if(item.id === id) {
            const biggerAmount = item.bids.length === 0 ? {amount: 0} : item.bids[item.bids.length -1]
            biggerAmount.amount = biggerAmount.amount + 250
            item.bids.push(biggerAmount)  
        }
        return item        
        })
        setData(updateData);
    }




    const cardData = () => {
        var values = Object.values(data);
        return values.map((info, idx) => {
            return <Card data={info} key={idx} handleMakeOffer={handleMakeOffer} />;
        })
    }


    return (

        <div id="container-home">
            <HeaderComponent />
            <div className="content-card">
                {cardData()}
            </div>

        </div>

    )
}

export default Home;


