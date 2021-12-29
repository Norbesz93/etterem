const Menu = () => {
    const etlap = [
        { nev: "pizza1", feltet: "sonka,gomba,ez,az,amaz,sajt,stb,stb", ar: 1500, penznem: "HUF" },
        { nev: "pizza2", feltet: "sonka,gomba,ez,az,amaz,sajt,stb,stb", ar: 1500, penznem: "HUF" },
        { nev: "pizza3", feltet: "sonka,gomba,ez,az,amaz,sajt,stb,stb", ar: 1500, penznem: "HUF" },
        { nev: "pizza4", feltet: "sonka,gomba,ez,az,amaz,sajt,stb,stb", ar: 1500, penznem: "HUF" },
        { nev: "pizza5", feltet: "sonka,gomba,ez,az,amaz,sajt,stb,stb", ar: 1500, penznem: "HUF" },
        { nev: "pizza6", feltet: "sonka,gomba,ez,az,amaz,sajt,stb,stb", ar: 1500, penznem: "HUF" },
        { nev: "pizza7", feltet: "sonka,gomba,ez,az,amaz,sajt,stb,stb", ar: 1500, penznem: "HUF" }
    ]
    return (
        <div>
            {etlap.map(pizza =>
                <div>
                    <h3>{pizza.nev}</h3>
                    <p>{pizza.feltet}</p>
                    <p>{pizza.ar} {pizza.penznem}</p>
                </div>)}
        </div>
    )
}

export default Menu;