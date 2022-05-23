import Hamburgers from "./Hamburgers"
import Gyroses from "./Gyroses"
import burger from "../Media/Slideshow/burger.jpg"
import gyros_tal from "../Media/Slideshow/gyros_tal.jpg"
import pizza_in_oven from "../Media/Slideshow/pizza_in_oven.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
const Menu = ({ foodToCart }) => {

    const pizzas = [
        { name: "pizza1", feltet: "sonka,gomba,ez,az,amaz,sajt,stb,stb", price: 1500, currency: "HUF" },
        { name: "pizza2", feltet: "sonka,gomba,ez,az,amaz,sajt,stb,stb", price: 1500, currency: "HUF" },
        { name: "pizza3", feltet: "sonka,gomba,ez,az,amaz,sajt,stb,stb", price: 1500, currency: "HUF" },
        { name: "pizza4", feltet: "sonka,gomba,ez,az,amaz,sajt,stb,stb", price: 1500, currency: "HUF" },
        { name: "pizza5", feltet: "sonka,gomba,ez,az,amaz,sajt,stfgdxfgdb,stb sadasd", price: 1500, currency: "HUF" },
        { name: "pizza6", feltet: "sonka,gomba,ez,az,amaz,sajt,stb,stb", price: 1500, currency: "HUF" },
        { name: "pizza7", feltet: "sonka,gomba,ez,az,amaz,sajt,stb,stb", price: 1500, currency: "HUF" }
    ]
    const gyroses = [
        { name: "Gyros pita", meat: ["csirke", "bárány"], spicy: ["csípős hagymával", "csípős hagyma nélkül", "hagyma csípős nélkül", "egyik sem"], price: 1200 },
        { name: "Gyros tál", meat: ["csirke", "bárány"], spicy: ["csípős hagymával", "csípős hagyma nélkül", "hagyma csípős nélkül", "egyik sem"], price: 1500 }
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
            <div className="hely"></div>
            <div className="what">
                <div className="hely"></div>
                <h2 className="mit">Mit ennél?</h2>
                <div className="foods">
                    <a href="#gyros"><img src={gyros_tal} alt="" className="foodPic" /></a>
                    <a href="#hamburger"><img src={burger} alt="" className="foodPic" /></a>
                    <a href="#pizza"><img src={pizza_in_oven} alt="" className="foodPic" /></a>
                </div>
            </div>
            <div className="gyrosok">
                <div className="hely"><a name="gyros"></a></div>
                <h2>Gyrosok</h2>
                {gyroses.map(gyros => <Gyroses gyros={gyros} key={gyros.type} foodToCart={foodToCart} />)}
            </div>
            <div className="hely"><a name="pizza"></a></div>
            <h2>Pizzák</h2>
            <div className="pizzas">
                {pizzas.map(pizza =>
                    <div className="pizza kaja">
                        <h3>{pizza.name}</h3>
                        <p>{pizza.feltet}</p>
                        <p>{pizza.price} {pizza.currency}</p>
                        <span className="addCart" onClick={() => foodToCart(pizza.name, "", "", pizza.price)}><FontAwesomeIcon icon={faCartShopping} size="2x" /></span>
                    </div>)}
            </div>
            <div className="hely"><a name="hamburger"></a></div>
            <h2>Hamburgerek</h2>
            <div className="hamburgers">
                {hamburgers.map(hamburger => <Hamburgers key={hamburger.name} foodToCart={foodToCart} hamburger={hamburger} />)}
            </div>
        </div>
    )
}

export default Menu;