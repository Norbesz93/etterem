import { useState } from "react"

import pizza_oven from "../Media/pizza_oven.jpg"
import crew from "../Media/crew.jpg"

/* Slideshow pictures*/
import burger from "../Media/Slideshow/burger.jpg"
import gyros_tal from "../Media/Slideshow/gyros_tal.jpg"
import gyrostal from "../Media/Slideshow/gyrostal.jpg"
import making_burger from "../Media/Slideshow/making_burger.jpg"
import pizza_in_oven from "../Media/Slideshow/pizza_in_oven.jpg"



const AboutUs = ()=>{


    const sliderData = [
        {
            image: burger,
            altText: "burger"
        },
        {
            image: gyros_tal,
            altText: "gyros_tal"
        },
        {
            image: gyrostal,
            altText: "gyrostal"
        },
        {
            image: making_burger,
            altText: "making_burger"
        },
        {
            image: pizza_in_oven,
            altText: "pizza_in_oven"
        }
    ]

    const ImageSlider = ({slides}) => {
        const [current, setCurrent] = useState(0)
        const length = slides.length

        const nextSlide = () => {
            setCurrent(current === length - 1 ? 0 : current + 1)
        }
        const prevSlide = () => {
            setCurrent(current === 0 ? length - 1  : current - 1)
        }

        return(
            <div className="sliderInAbout">
                <button className="left-arrow" onClick={prevSlide}>Előző</button>
                {slides.map((slide,index) => {
                    return <div className={index === current ? "slide active" : "slide"}
                    key={index}
                    >   
                        {index === current && (
                            <img src= {slide.image} alt={slide.altText} className="imageOfSlide"/>
                            )}
                    </div>
                })}
                <button className="right-arrow" onClick={nextSlide}>Következő</button>
            </div>
        )
    }



    return(
        <div id="aboutUsMain">
            <h2 id="aboutUsTitle">Rólunk</h2>
            <div id="aboutUsContent">
                <div className="aboutUsSections">
                    <div className="aboutUsPictures">
                        <img src={pizza_oven} alt="pizza_oven"/>
                    </div>
                    <div className="aboutUsTexts">
                        <p>Éttermünket 2021 decemberében nyitottuk meg  Kapolcs gyorsan fejlődő körzetében.
                        Kellemes környezetben, minőségi ételekkel és színvonalas kiszolgálással várjuk kedves látogatóinkat.
                        Tavasztól-őszig nyitott grill teraszunkon is fogyaszthatják ínyencségeinket, de választhatnak étlapunkról az interneten is és mi házhoz szállítjuk Önnek rendelését.</p>
                    </div>
                </div>
                <div className="aboutUsSections">
                    <div className="aboutUsTexts">
                        <p>Ételeink kizárólag friss, Magyar alapanyagokból készülnek.
                        Mesterszakácsunk kiváló helyeken szerzett évtizedes tapasztalata a biztosíték arra, hogy mindenki teli hassal és elégedetten távozzon tőlünk.
                        Éttermünkben a pizzák színes választékán kívül gyros, hamburger és egyéb ételkülönlegességek közül válogathatnak</p>
                    </div>
                    <div className="aboutUsPictures">
                        <img src={crew} alt="crew"/>
                    </div>
                </div>
            </div>
            <ImageSlider slides={sliderData}/>
        </div>
    )
}

export default AboutUs;