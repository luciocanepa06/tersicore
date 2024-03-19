export default async function Event({e}){
    if(e){
      let event = e.metadata
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
        <>
          <br></br>
          <p> Al momento non sono previsti eventi futuri </p>
          <br></br>
        </>
      )
    }
  }