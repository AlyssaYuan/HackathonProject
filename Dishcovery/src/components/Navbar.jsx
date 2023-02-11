import React from "react"

export default function Navbar() {
    return (
        <header>
            <img className="logo" src="/images/logo.png" />
            <h2 className="food-title">Dishcovery</h2>
            <input 
                className="zipcode-input" 
                placeholder="Zipcode"
                type="text"
            ></input>
            <button classname="zipcode-button">Food</button>
        </header>
    )
}
