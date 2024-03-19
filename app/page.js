import "./page.module.css";
import "./styles/home.css"

import Navbar from "./components/navbar"
import Footer from "./components/footer"
import Event from "./components/event"

import { createBucketClient } from '@cosmicjs/sdk';

const cosmic = createBucketClient({
  bucketSlug: 'tersicore-v2-tersicore',
  readKey: 'XfrOLrgYlSBJNqtbOuf0jqjYQ5WRUZRtQGiEW2c6rpT5R95A7J',
});

export async function getData() {
  const currentDate = new Date().toISOString().slice(0, 10)
  const data = await cosmic.objects.find({
    type: "appuntamenti",
    'metadata.data':{
      $gte: currentDate,
    },
  }).props(["id", "title", "metadata"]).sort('metadata.data')
 
  return data.objects
}

export default async function Home() {
  const events = await getData()

  let event = false
  if(events.length > 0){
    event = events[0]
  }

  return (
    <div className="main">
      <Navbar />
      <div className="home">
        <div className="big-photo">
          <h1>Tersicore</h1>
        </div>
        <div className="next-event">
          <h4>Prossimo appuntamento</h4>
          <Event e={event}/>
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