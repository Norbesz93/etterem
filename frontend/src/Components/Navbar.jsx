import React,  { useState, useEffect } from "react";
import logo from "../Media/logo.png"

import bars from "../Media/bars-solid.svg"
import cart from "../Media/cart-shopping-solid.svg"

import {Link} from "react-router-dom"


const Navbar = ({cartSum})=>{
    
    const [isOpen, setIsOpen] = useState("Open")
    const [canOrder, setCanOrder] = useState("")
    const [isShrunk, setShrunk] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const date = new Date()

    const areWeOpen = () => {
        let openTime = [ {open : -1, close : -1},
            { open: 9, close : 18 },
            { open: 9, close : 18 },
            { open: 9, close : 18 },
            { open: 9, close : 18 }, 
            { open: 9, close : 18 },
            { open: 10, close : 23 }
        ]

        function timeConverter(n){
            let rhours = Math.floor(n)
            let minutes = (n - rhours) * 60
            let rminutes = Math.round(minutes)
            if(rminutes === 0 ){
                return "A rendelés leadása még " + rhours + " órán keresztül lehetséges. "
            }else if(rhours === 0){
                return "A rendelés leadása még " + rminutes + " percen keresztül lehetséges."
            }else {
                return "A rendelés leadása még " + rhours + " óra " + rminutes + " percen keresztül lehetséges."
            }
            
        }

        let day = date.getDay();
        let currentTime = date.getHours() + (date.getMinutes()/60);
        let remainTime = 0;
        if (openTime[day].open >= 0 && openTime[day].open < currentTime && openTime[day].close > currentTime) {
            remainTime = (openTime[day].close  - currentTime).toFixed(2)
            setIsOpen("Nyitva vagyunk!")
            setCanOrder(timeConverter(remainTime))
        }else{
            setIsOpen("Zárva vagyunk")
        }
        
    console.log("the shop will close in %s hours", remainTime);
    }

    const hamburgerIconClick = () => {
        if(isClicked === false){
            setIsClicked(true);  
        }else{
            setIsClicked(false)
        }
    }

    useEffect(() => {
        areWeOpen();

        const handler = () => {
            setShrunk((isShrunk) => {
                if (
                  !isShrunk &&
                  (document.body.scrollTop > 20 ||
                    document.documentElement.scrollTop > 20)
                ) {
                  return true;
                }
        
                if (
                  isShrunk &&
                  document.body.scrollTop < 4 &&
                  document.documentElement.scrollTop < 4
                ) {
                  return false;
                }
        
                return isShrunk;
              });
          };
      
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    
    }, []);
    
    return(        
        <nav>
            <div className={isShrunk ? "firstDivInNav firstDivInNavScrolled" : "firstDivInNav"}>
                <p className="dateTimeField">{date.toLocaleDateString("hu-HU")}</p>
                <h3 className="isOpen">{isOpen} - {canOrder}</h3>
            </div>
            <div className={isShrunk ? "secondDivInNav secondDivInNavScrolled" : "secondDivInNav"}>
                <ul id="navList">
                    <li><Link to="menu">Étlap</Link></li>
                    <li><Link to="aboutUs">Rólunk</Link></li>
                    <li><Link to="contactUs">Kapcsolat</Link></li>
                    <li>
                        <div className="cartSum">
                            <Link to="cart">Kosár</Link>
                            <p>{cartSum}</p>
                        </div>
                    </li>
                </ul>
                <div className="hamburgerIconMobile">
                    <img src={bars} alt="bars" onClick={() => hamburgerIconClick()} />
                    <ul className={ isClicked ? "mobileMenuVisible" : "mobileMenuNotVisible"}>
                        <li onClick={() => hamburgerIconClick()}><Link to="menu">Étlap</Link></li>
                        <li onClick={() => hamburgerIconClick()}><Link to="aboutUs">Rólunk</Link></li>
                        <li onClick={() => hamburgerIconClick()}><Link to="contactUs">Kapcsolat</Link></li>
                    </ul>
                </div>
            </div>
            <div className={isShrunk ? "logoDiv logoDivScrolled" : "logoDiv"}>
                <div id="shoppingCartMobile" onClick={() => hamburgerIconClick()}>
                    <Link to="cart"><img src={cart} alt="shopping-cart" /></Link>
                </div>
                <h1><Link to="/"><img className={isShrunk ? "imageDiv imageDivScrolled" : "imageDiv"} src={logo} alt="logo"/></Link></h1>
            </div>
        </nav>
    );
}

export default Navbar;