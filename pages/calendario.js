"use client"

import { useState, useEffect } from 'react'

import "../app/globals.css"
import "../app/page.module.css";

import "../app/styles/calendario.css"


import Navbar from "../app/components/navbar.js"
import Footer from "../app/components/footer.js"

import { getData } from "../app/components/fetching";

export default function Calendario() {
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        getData().then(data => {
            setData(data)
        }).finally(() => {
            setLoading(false)
        })
    }, [])
    if(isLoading){
         return(
            <div className="main">
            <Navbar />
            <div className="calendario">
                <p>Loading...</p>
            </div>
        <Footer />
        </div>
         ) 
    }else{
    return (
        <div className="main">
        <Navbar />
            <div className="calendario">
                <ul>
                {data.map((e) => {
                    let event = e.metadata
                    let data = event.data.slice(8, 10) + " / " + event.data.slice(5, 7) + " / " + event.data.slice(0, 4)
                    return(
                        <li key={event.id}>
                            <div className='event' >
                                    <h2>{event.titolo}</h2>
                                    <p>{event.luogo}</p>
                                    <p>{data + " - " + event.ora}</p>
                                    <p id="next-event-description"><i>{event.descrizione}</i></p>
                            </div>
                        </li>
                    )
                })}
                </ul>
            </div>
        <Footer />
        </div>
    );
        }
}
