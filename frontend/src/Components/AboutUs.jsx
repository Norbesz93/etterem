import pizza_oven from "../Media/pizza_oven.jpg"
import crew from "../Media/crew.jpg"

const AboutUs = ()=>{
    return(
        <div id="aboutUsMain">
            <h2 id="aboutUsTitle">Rólunk</h2>
            <div id="aboutUsContent">
                <div className="aboutUsSections">
                    <div className="aboutUsPictures">
                        <img src={pizza_oven} alt="pizza_oven"/>
                    </div>
                    <div className="aboutUsTexts">
                        <p>Éttermünket 2021 decemberében nyítottuk meg  Kapolcs gyorsan fejlődő körzetében.
                        Kellemes környezetben, minőségi ételekkel és színvonalas kiszolgálással várjuk kedves látogatóinkat.
                        Tavasztól-őszig nyitott grill teraszunkon is fogyaszthatják ínyencségeinket, de választhatnak étlapunkról az interneten is és mi házhoz szállítjuk Önnek rendelését.</p>
                    </div>
                </div>
                <div className="aboutUsSections">
                    <div className="aboutUsPictures">
                        <img src={crew} alt="crew"/>
                    </div>
                    <div className="aboutUsTexts">
                        <p>Ételeink kizárólag friss, Magyar alapanyagokból készülnek.
                        Mesterszakácsunk kiváló helyeken szerzett évtizedes tapasztalata a biztosíték arra, hogy mindenki teli hassal és elégedetten távozzon tőlünk.
                        Éttermünkben a pizzák színes választékán kívül gyros, hamburger és egyéb ételkülönlegességek közül válogathatnak</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;