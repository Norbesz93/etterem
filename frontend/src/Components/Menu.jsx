const Menu = () => {
    const pizzas = [
        { name: "pizza1", feltet: "sonka,gomba,ez,az,amaz,sajt,stb,stb", price: 1500, currency: "HUF" },
        { name: "pizza2", feltet: "sonka,gomba,ez,az,amaz,sajt,stb,stb", price: 1500, currency: "HUF" },
        { name: "pizza3", feltet: "sonka,gomba,ez,az,amaz,sajt,stb,stb", price: 1500, currency: "HUF" },
        { name: "pizza4", feltet: "sonka,gomba,ez,az,amaz,sajt,stb,stb", price: 1500, currency: "HUF" },
        { name: "pizza5", feltet: "sonka,gomba,ez,az,amaz,sajt,stb,stb", price: 1500, currency: "HUF" },
        { name: "pizza6", feltet: "sonka,gomba,ez,az,amaz,sajt,stb,stb", price: 1500, currency: "HUF" },
        { name: "pizza7", feltet: "sonka,gomba,ez,az,amaz,sajt,stb,stb", price: 1500, currency: "HUF" }
    ]
    const gyroses = { meat: ["csirke", "bárány"], spicy: ["csípős hagymával", "csípős hagyma nélkül", "hagyma csípős nélkül", "egyik sem"] }
    const hamburgers = [
        { name: "hamburger1", meat: ["marha", "csirke", "vega"], spicy: ["csípős", "enyhén csípős", "nem csípős"], price: 1500, currency: "HUF" },
        { name: "hamburger2", meat: ["marha", "csirke", "vega"], spicy: ["csípős", "enyhén csípős", "nem csípős"], price: 1500, currency: "HUF" },
        { name: "hamburger3", meat: ["marha", "csirke", "vega"], spicy: ["csípős", "enyhén csípős", "nem csípős"], price: 1500, currency: "HUF" },
        { name: "hamburger4", meat: ["marha", "csirke", "vega"], spicy: ["csípős", "enyhén csípős", "nem csípős"], price: 1500, currency: "HUF" },
        { name: "hamburger5", meat: ["marha", "csirke", "vega"], spicy: ["csípős", "enyhén csípős", "nem csípős"], price: 1500, currency: "HUF" },
        { name: "hamburger6", meat: ["marha", "csirke", "vega"], spicy: ["csípős", "enyhén csípős", "nem csípős"], price: 1500, currency: "HUF" },
    ]
    return (
        <div className="menu">
            <div className="gyroses">
                <div className="gyrosPita">
                    <h3>Gyros pita</h3>
                    <select name="gyrosPitaMeat">
                        {gyroses.meat.map(gyros =>
                            <option value={gyros}>
                                {gyros}
                            </option>)}
                    </select>
                    <select name="gyrosPitaOnion">
                        {gyroses.spicy.map(gyros =>
                            <option value={gyros}>
                                {gyros}
                            </option>)}
                    </select>
                </div>
                <div className="gyrosPlate">
                    <h3>Gyros tál</h3>
                    <select name="gyrosPitaMeat">
                        {gyroses.meat.map(gyros =>
                            <option value={gyros}>
                                {gyros}
                            </option>)}
                    </select>
                    <select name="gyrosPitaOnion">
                        {gyroses.spicy.map(gyros =>
                            <option value={gyros}>
                                {gyros}
                            </option>)}
                    </select>
                </div>
            </div>
            <div className="pizzas">
                {pizzas.map(pizza =>
                    <div className="pizza">
                        <h3>{pizza.name}</h3>
                        <p>{pizza.feltet}</p>
                        <p>{pizza.price} {pizza.currency}</p>
                    </div>)}
            </div>
            <div className="hamburgers">
                {hamburgers.map(hamburger => <div className="hamburger">
                    <h3>{hamburger.name}</h3>
                    <select name="" id=""></select>
                </div>
                )}
            </div>
        </div>
    )
}

export default Menu;