import Hamburgers from "./Hamburgers"
import Gyroses from "./Gyroses"
import burger from "../Media/Slideshow/burger.jpg"
import gyros_tal from "../Media/Slideshow/gyros_tal.jpg"
import pizza_in_oven from "../Media/Slideshow/pizza_in_oven.jpg"
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
    const gyroses = [
        { type: "Gyros pita", meat: ["csirke", "bárány"], spicy: ["csípős hagymával", "csípős hagyma nélkül", "hagyma csípős nélkül", "egyik sem"], price: 1200 },
        { type: "Gyros tál", meat: ["csirke", "bárány"], spicy: ["csípős hagymával", "csípős hagyma nélkül", "hagyma csípős nélkül", "egyik sem"], price: 1500 }
    ]
    const hamburgers = [
        { name: "hamburger1", meat: ["marha", "csirke", "vega"], spicy: ["csípős", "enyhén csípős", "nem csípős"], price: 1500, currency: "HUF" },
        { name: "hamburger2", meat: ["marha", "csirke", "vega"], spicy: ["csípős", "enyhén csípős", "nem csípős"], price: 1700, currency: "HUF" },
        { name: "hamburger3", meat: ["marha", "csirke", "vega"], spicy: ["csípős", "enyhén csípős", "nem csípős"], price: 1800, currency: "HUF" },
        { name: "hamburger4", meat: ["marha", "csirke", "vega"], spicy: ["csípős", "enyhén csípős", "nem csípős"], price: 1700, currency: "HUF" },
        { name: "hamburger5", meat: ["marha", "csirke", "vega"], spicy: ["csípős", "enyhén csípős", "nem csípős"], price: 1900, currency: "HUF" },
        { name: "hamburger6", meat: ["marha", "csirke", "vega"], spicy: ["csípős", "enyhén csípős", "nem csípős"], price: 2000, currency: "HUF" },
    ]
    return (
        <div className="menu">
            <h2 className="what">Mit ennél?</h2>
            <div className="foods">
                <img src={gyros_tal} alt="" className="foodPic"/>
                <img src={burger} alt="" className="foodPic" />
                <img src={pizza_in_oven} alt="" className="foodPic" />
            </div>
            <div className="gyrosok">
            <h2>Gyrosok</h2>
            {gyroses.map(gyros => <Gyroses gyros={gyros} />)}
            </div>
            <h2>Pizzák</h2>
            <div className="pizzas">
                {pizzas.map(pizza =>
                    <div className="pizza">
                        <h3>{pizza.name}</h3>
                        <p>{pizza.feltet}</p>
                        <p>{pizza.price} {pizza.currency}</p>
                        <button>vásárlás</button>
                    </div>)}
            </div>
            <h2>Hamburgerek</h2>            
            <div className="hamburgers">
            {hamburgers.map(hamburger => <Hamburgers hamburger={hamburger} />)}
            </div>
        </div>
    )
}

export default Menu;