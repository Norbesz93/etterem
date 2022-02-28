import React,{useState} from "react"

const Gyroses = ({gyros, foodToCart})=>{
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
<div className={gyros.name}>
    <h3 className="gyrosContent">{gyros.name}</h3>
    <select className="gyrosContent" onChange={priceUpdate} name="gyrosMeat">
        {gyros.meat.map(meat =>
            <option value={meat}>
                {meat}
            </option>)}
    </select>
    <br />
    <select className="gyrosContent" name="gyrosOnion">
        {gyros.spicy.map(spicy =>
            <option value={spicy}>
                {spicy}
            </option>)}
    </select>
    <p className="gyrosContent">{gyrosPrice}</p>
    <button className="gyrosContent" onClick={()=>foodToCart(gyros)}>vásárlás</button>
</div>
)}

export default Gyroses;