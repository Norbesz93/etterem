const Cart = ({ordered})=>{
    console.log(ordered)
    return(
        <div id="cartMainDiv">
            <div id="cartContent">
                <div id="priceOfOrder">
                    <p>{}</p>
                    <p>Végösszeg:</p>
                    <p>ÖSSZEG</p>
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
                <p  id="commentFieldLabel" for="commentField">Megjegyzés:</p>
                <input id="commentField" type="text" />
            </div>
            <button id="orderBtn">Megrendelem</button>
        </div>
    )
}

export default Cart;