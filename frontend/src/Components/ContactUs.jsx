const ContactUs = ()=>{


    return(        
        <div className="contactUsMainDiv">
            <div className="contactUsDetails">
                <h2>Kapcsolat</h2>
                <h1>Pizzéria</h1>
                <p>8294 Kapolcs, Kossuth utca 110.</p>
                <h3>Pizza és Gyros Kft.</h3>
                <p>Adószám: 12495999-2-42</p>
                <p>8294 Kapolcs, Kossuth utca 110.</p>
                <p>Házhozszállítás, Pizzéria: +36/30-609-9999</p>
                <p>Asztalfoglalás, Pizzéria Étterem: +36/70-609-9999</p>
                <p>Email: info@pizzeriaetterem.hu</p>
                <h4>Probléma bejelentés a szállítással kapcsolatban:</h4>
                <p>Telefon:+36/30-609-9998</p>
                <p>Email: info@pizzeriaetterem.hu</p>
            </div>
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe className="mapFrame" title="googlemap" src="https://maps.google.com/maps?q=8294%20Kapolcs,%20Kossuth%20utca%20110.&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
            </div>
            <div className="contactUsDetails">
                <h2>Nyitvatartás</h2>
                <h1>Pizzéria</h1>
                <p>8294 Kapolcs, Kossuth utca 110.</p>
                <p>Hétfő-Szombat 9:00-18:00</p>
                <p>Vasárnap ZÁRVA</p>
                <h1>Online rendelés nyitás és befogadása:</h1>
                <p>Hétfő-Szombat 9:00-17:30</p>
                <p>Vasárnap 12:00-ig</p>
            </div>
        </div>
    );
}

export default ContactUs;