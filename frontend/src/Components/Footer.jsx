import logo from "../Media/logo.png"

const Footer = ()=>{


    return(
        <div className="footer">
            <div id="footerMainDiv">
                <div id="firstDivInFooter">
                
                </div>
                <div id="secondDivInFooter">
                    
                </div>
                <div id="logoDivFooter">
                    <h1><a href="/"><img src={logo} alt="logo"/></a></h1>
                </div>
                <div id="allRightsReserved">
                    <p>All Rights Reserved - @2022</p>
                </div>
            </div>
        </div>        
    );
}

export default Footer;