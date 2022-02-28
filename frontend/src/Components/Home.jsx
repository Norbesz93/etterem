import pizzaOne from "../Media/pizza_1.jpg"



const Home = ()=>{
    return(
        
        <div>
            <div id="homeBackground">
                <img  id="pizzaImg" src={pizzaOne} alt="pizza"></img>
                <a id="goToMenu" href="menu">Tovább az étlapra</a>
            </div>
        </div>
    )
}

export default Home;

