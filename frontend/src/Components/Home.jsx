import pizzaOne from "../Media/pizza_1.jpg"
import {Link} from "react-router-dom"


const Home = ()=>{
    return(
        
        <div id="homeMain">
            <div id="homeBackground">
                <img  id="pizzaImg" src={pizzaOne} alt="pizza"></img>
            </div>
                <Link id="goToMenu" to="menu">Tovább az étlapra</Link>
        </div>
    )
}

export default Home;

