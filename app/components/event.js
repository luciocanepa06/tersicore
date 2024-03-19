'use client'

import {useState, useEffect} from 'react'

import { getData } from './fetching'

export default function Event(){
  const [datas, setDatas] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
      getData().then(data => {
          if(data.length > 0){
            setDatas(data[0])
          }
          
      }).finally(() => {
          setLoading(false)
      })
  }, [])

  if(isLoading){
    return(
      <p> Loading </p>
    )
  }else{
    if(datas != []){
      let event = datas.metadata
      let data = event.data.slice(8, 10) + " / " + event.data.slice(5, 7) + " / " + event.data.slice(0, 4)
      return(
          <>
          <h2>{event.titolo}</h2>
          <p>{event.luogo}</p>
          <p>{data + " - " + event.ora}</p>
          <p id="next-event-description"><i>{event.descrizione}</i></p>
          </>
      )
    }else{
      return(
        <p> Al momento non sono previsti eventi futuri </p>
      )
    }
    }
  }