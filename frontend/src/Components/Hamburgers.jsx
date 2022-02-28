import React,{useState} from "react";
const Hamburgers = ({hamburger, foodToCart}) =>{
    const [hamburgerPrice, setHamburgerPrice] = useState(hamburger.price)
    const priceUpdate = (e)=>{
        let price = hamburger.price
        if(e.target.value === "csirke"||e.target.value==="vega"){
            setHamburgerPrice(price = price -100)
        }else{
            setHamburgerPrice(price)
        }
    }
    return(
    <div className="hamburger">
        <h3>{hamburger.name}</h3>
        <select onChange={priceUpdate} name="meat">
            {hamburger.meat.map(meat =>
                 <option value={meat}>
                     {meat}
            </option>)}
        </select>
        <select name="spicy">
            {hamburger.spicy.map(spicy =>
                <option value={spicy}>
                    {spicy}
                </option>)}
        </select>
        <p>{hamburgerPrice} <button onClick={()=>foodToCart(hamburger)}>vásárlás</button></p>
                
    </div>
)}

export default Hamburgers;
