import Navbar from "./components/Navbar.jsx"
import Card from "./components/Card.jsx"

export default function App() {

  return (
    <div>
      <Navbar />
      <Card 
        img= "bistro.png"
        name= "Viola the Bistro"
        phone= "(631) 584-5686"
        address="244 Lake Ave, St James, NY 11780"
        rating="4.6"
        reviews="104"

      />
      <Card 
        img= "ramen.png"
        name= "ESHIN Noodle Bar"
        phone= "(631) 675-6333"
        address="1113 Route 25A Ste 3E Stony Brook, NY 11790"
        rating="4.2"
        reviews="23"

      />
    </div>
  )
}

