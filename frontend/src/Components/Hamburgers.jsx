import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'  
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
const Hamburgers = ({hamburger, foodToCart}) =>{
    const [hamburgerPrice, setHamburgerPrice] = useState(hamburger.price)
    const [spicy, setSpicy]= useState(hamburger.spicy[0])
    const [meat, setMeat]= useState(hamburger.meat[0])
    const priceUpdate = (e)=>{
        let price = hamburger.price
        if(e.target.value === "csirke"||e.target.value==="vega"){
            setHamburgerPrice(price = price -100)
        }else{
            setHamburgerPrice(price)
        }
        setMeat(e.target.value)
    }
    return(
    <div className="hamburger">
        <div className="hambox">
        <h3>{hamburger.name}</h3>
        <select onChange={priceUpdate} name="meat" >
            {hamburger.meat.map(meat =>
                 <option value={meat}>
                     {meat}
            </option>)}
        </select>
        <select name="spicy" onChange={(e)=>setSpicy(e.target.value)}>
            {hamburger.spicy.map(spicy =>
                <option value={spicy}>
                    {spicy}
                </option>)}
        </select>
        <p className="hamburgerBuc">{hamburgerPrice} <span className="addCart" onClick={()=>foodToCart(hamburger.name,spicy,meat,hamburgerPrice)}><FontAwesomeIcon icon={faCartShopping} size="2x"/></span></p>
        </div>
    </div>
)}

export default Hamburgers;
