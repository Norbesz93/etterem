import React,{useState} from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'  
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"

const Gyroses = ({gyros, foodToCart})=>{
    const [gyrosPrice, setGyrosPrice] = useState(gyros.price)
    const [gyrosMeat, setGyrosMeat] = useState(gyros.meat[0])
    const [gyrosSpicy, setGyrosSpicy] = useState(gyros.spicy[0])
    const priceUpdate = (e)=>{
        let price = gyros.price
        if(e.target.value === "bárány"){
            setGyrosPrice(price = price +100)
        }else{
            setGyrosPrice(price)
        }
        setGyrosMeat(e.target.value)
    }
return(
<div className={`${gyros.name} kaja`}>
    <h3 className="gyrosContent">{gyros.name}</h3>
    <select className="gyrosContent" onChange={priceUpdate} name="gyrosMeat">
        {gyros.meat.map(meat =>
            <option value={meat}>
                {meat}
            </option>)}
    </select>
    <br />
    <select className="gyrosContent" name="gyrosOnion" onChange={(e)=>setGyrosSpicy(e.target.value)}>
        {gyros.spicy.map(spicy =>
            <option value={spicy}>
                {spicy}
            </option>)}
    </select>
    <p className="gyrosContent">{gyrosPrice}</p>
    <span className="gyrosContent addCart" onClick={()=>foodToCart(gyros.name,gyrosSpicy,gyrosMeat,gyrosPrice)}><FontAwesomeIcon icon={faCartShopping} size="2x"/></span>
</div>
)}

export default Gyroses;