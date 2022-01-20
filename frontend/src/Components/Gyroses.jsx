import React,{useState} from "react"
const Gyroses = ({gyros})=>{
    const [gyrosPrice, setGyrosPrice] = useState(gyros.price)
    const priceUpdate = (e)=>{
        let price = gyros.price
        if(e.target.value === "bárány"){
            setGyrosPrice(price = price +100)
        }else{
            setGyrosPrice(price)
        }
    }
return(
<div className="gyros">
    <h3>{gyros.type}</h3>
    <select onChange={priceUpdate} name="gyrosMeat">
        {gyros.meat.map(meat =>
            <option value={meat}>
                {meat}
            </option>)}
    </select>
    <select name="gyrosOnion">
        {gyros.spicy.map(spicy =>
            <option value={spicy}>
                {spicy}
            </option>)}
    </select>
    <p>{gyrosPrice}</p>
    <button>vásárlás</button>
</div>
)}

export default Gyroses;