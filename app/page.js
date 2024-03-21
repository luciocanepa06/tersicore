import "./page.module.css";
import "./styles/home.css"

import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Event from "./components/event"


export default async function Home() {
  
  return (
    <div className="main">
      <Navbar />
      <div className="home">
        <div className="big-photo">
          <h1>Tersicore</h1>
        </div>
        <div className="next-event">
          <h4>Prossimo appuntamento</h4>
          <Event />
        </div>

      <div className="cd">
        <img src="https://imgix.cosmicjs.com/db01c9b0-e53c-11ee-a01e-c56f185aea7b-CD-cover.jpg" alt="CD cover"/>
        <div>
          <h2>Dieci</h2>
          <p>Il nostro CD, con musiche di Felix Mendelsohn</p>
          <a>Scopri di più</a>
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
}