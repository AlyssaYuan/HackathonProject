import Navbar from "./components/Navbar.jsx"
import Card from "./components/Card.jsx"
import data from "./data.jsx"
import React from "react"
import axios from 'axios';

export default function App() {
  const cards = data.map(item => {
    return (
      <Card 
        id={item.id}
        img={item.img}
        rating={item.rating}
        reviews={item.reviews}
        phone={item.phone}
        address={item.address}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <section className="card-list">
        {cards}
      </section>
    </div>
  )
}

