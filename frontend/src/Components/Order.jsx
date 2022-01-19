import { useState } from "react";
import axios from "axios"

const Order = () => {

    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAdress] = useState("")

    const send = async ()=>{
       await axios.post("http://localhost:8080/rendeles",{user:userName})
    }

    return (
        <div className="box">
            <form>
                <div className="group">
                    <input type="text" required value={userName} onChange={(e)=>setUserName(e.target.value)} />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Név</label>
                </div>

                <div className="group">
                    <input type="text" required value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Email</label>
                </div>

                <div className="group">
                    <input type="text" required value={address} onChange={(e)=>setAdress(e.target.value)} />
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Szállítási cím</label>
                </div>
            </form>
                <button onClick={send} className="submit">Rendelés leadása</button>
        </div>
    )
}

export default Order;