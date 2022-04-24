import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
const Cart = ({ ordered, removeFromCart }) => {
    const orderSum = ordered.map(order => order.price)
    return (
        <div id="cartMainDiv">
            <div id="cartContent">
                <div id="nameOfOrder">
                    {ordered.map(order => (order.spicy !== "" && order.meat !== "" ?
                        <p className="lineOfOrder">{order.piece}x Termék: {order.name}, Hús: {order.meat}, Csípősség: {order.spicy}, Ár: {order.price}
                            <span className="removeCart"><FontAwesomeIcon icon={faTrashCan} /></span>
                        </p> :
                        <p className="lineOfOrder">{order.piece}x Termék: {order.name}, Ár: {order.price}
                            <span className="removeCart" onClick={()=>removeFromCart(order.name)}><FontAwesomeIcon icon={faTrashCan} /></span>
                        </p>))}
                </div>
                <div id="priceOfOrder">
                    <p>Végösszeg:</p>
                    <p>{orderSum.reduce((prev, next) => prev + next, 0)} Ft</p>
                </div>
            </div>
            <div id="customerDetails">
                <p for="nameField" className="customerDetailsLabels">Név:</p>
                <input id="nameField" className="nameTelAddress" type="text" />
                <p for="telephoneField" className="customerDetailsLabels">Telefonszám:</p>
                <input id="telephoneField" className="nameTelAddress" type="text" />
                <p for="addressField" className="customerDetailsLabels">Lakcím:</p>
                <input id="addressField" className="nameTelAddress" type="text" />
            </div>
            <div id="commentDiv">
                <p id="commentFieldLabel" for="commentField">Megjegyzés:</p>
                <input id="commentField" type="text" />
            </div>
            <button id="orderBtn" onClick={() => console.log(ordered)}>Megrendelem</button>
        </div>
    )
}

export default Cart;