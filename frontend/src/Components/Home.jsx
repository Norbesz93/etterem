import pizzaOne from "../Media/pizza_1.jpg"
import {Link } from "react-router-dom"
import Menu from "./Menu";


const Home = ()=>{
    return(
        
        <div>
            <div id="homeBackground">
                <img  id="pizzaImg" src={pizzaOne} alt="pizza"/>
                <Link id="goToMenu" to={<Menu/>}>Tovább az étlapra</Link>
            </div>
        </div>
    )
}

export default Home;
