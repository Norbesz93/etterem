import React,  { useState, useEffect } from "react";
import logo from "../Media/logo.png"


const Navbar = ()=>{
    
    const [isOpen, setIsOpen] = useState("Open")
    const [canOrder, setCanOrder] = useState("")

    const date = new Date()

    const areWeOpen = () => {
        let openTime = [ {open : -1, close : -1},
            { open: 9, close : 18 },
            { open: 9, close : 18 },
            { open: 9, close : 18 },
            { open: 9, close : 18 }, 
            { open: 9, close : 18 },
            { open: 10, close : 16.5 }
        ]

        let day = date.getDay();
        let currentTime = date.getHours() + (date.getMinutes()/60);
        let remainTime = 0;
        if (openTime[day].open >= 0 && openTime[day].open < currentTime && openTime[day].close > currentTime) {
            remainTime = (openTime[day].close  - currentTime).toFixed(2)
            setIsOpen("Open")
            setCanOrder(`Rendelés leadás még ${remainTime} óra`)
        }else{
            setIsOpen("Closed")
        }
    console.log("the shop will close in %s hours", remainTime);
    }

    useEffect(() => {
        areWeOpen();
    }, []);
    
    return(        
        <nav>
            <div id="firstDivInNav">
                <p className="dateTimeField">{date.toLocaleDateString("hu-HU")}</p>
                <h3 className="isOpen">{isOpen} - {canOrder}</h3>
            </div>
            <div id="secondDivInNav">
                <ul id="navList">
                    <li><a href="menu">Étlap</a></li>
                    <li><a href="abousUs">Rólunk</a></li>
                    <li><a href="conatctUs">Kapcsolat</a></li>
                </ul>
            </div>
            <div id="logoDiv">
                <h1><a href="/"><img src={logo} alt="logo"/></a></h1>
            </div>
        </nav>
    );
}

export default Navbar;