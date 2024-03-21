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
      let ev = datas.metadata
      let data = ev.data.slice(8, 10) + " / " + ev.data.slice(5, 7) + " / " + ev.data.slice(0, 4)
      return(
          <>
          <h2>{ev.titolo}</h2>
          <p>{ev.luogo}</p>
          <p>{data + " - " + ev.ora}</p>
          <p id="next-event-description"><i>{ev.descrizione}</i></p>
          </>
      )
    }else{
      return(
        <p> Al momento non sono previsti eventi futuri </p>
      )
    }
    }
  }