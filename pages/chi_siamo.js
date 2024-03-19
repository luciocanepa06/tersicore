import "../app/globals.css"
import "../app/page.module.css";

import "../app/styles/text-pages.css"

import Navbar from "../app/components/navbar.js"
import Footer from "../app/components/footer.js"


export default function ChiSiamo() {
  return (
    <div className="main">
      <Navbar />
      <div className="text-pages">
        <div className="bg-photo" id="chi-siamo">
          <h1>Chi siamo</h1>
        </div>
        <div className="text-content">
        <p>
        L'Associazione Coro Tersicore nasce a Lugano nel mese di novembre del 2002 per volontà di un gruppo di giovani (di età compresa fra i 20 e i 30 anni) accomunati dalla passione per la musica.
        <br></br>
        Gli attuali membri, che vantano un'esperienza pluriennale in ambito corale, si ritrovano settimanalmente per provare insieme. I coristi curano la propria preparazione sia attraverso gli incontri settimanali che attraverso uno studio personale.
        <br></br>
        Al Maestro Guido Mollica è affidata la direzione del coro, l'accompagnamento musicale e l'organizzazione di giornate di studio in cui, lavorando sulle capacità individuali di ognuno, si affina il suono d'insieme.
        </p>

        <p>
        Il gruppo vocale si è esibito sia in Svizzera che in Italia, riscontrando apprezzamento da parte del pubblico. Nel 2007 ha eseguito presso gli studi della RSI la prima di La Nebbia di Cristian Gentilini, premiato al Concorso internazionale di composizione corale. Nel 2010 il Coro Tersicore è stato chiamato dalla RSI ad esibirsi in occasione della messa per l'Ascensione trasmessa in Eurovisione. Nel 2011 ha partecipato, insieme ad altri cori ticinesi, alle celebrazioni del quarantesimo anniversario della morte del compositore Luigi Picchi con il concerto del quale è seguita la pubblicazione di un CD.
        <br></br>
        Nel 2013, a distanza di 10 anni dalla sua fondazione, il Coro Tersicore ha ritenuto fosse giunto il momento di pubblicare un CD, per presentare all'ascoltatore la propria identià musicale esprimendola attraverso la scelta delle opere, degli strumenti e dello stile interpretativo. Il CD, registrato nel 2012, ha per tema le musiche di Felix Mendelssohn Bartholdy. Ulteriori informazioni e le anteprime di alcuni brani si trovano nella sezione "novità".
        </p>

        <p>
        Nel 2014 il gruppo vocale ha partecipato alla XXI edizione del Festival internazionale di musica corale "D.G. KIRIAC", svoltosi nella regione della Muntenia (Romania), esibendosi nelle sezioni "musica corale romena ed internazionale" e "musica sacra".
        <br></br>
        Oltre alle consuete esecuzioni con opere di epoche e compositori vari, il coro anima varie funzioni religiose come messe, feste patronali e matrimoni, proponendo un repertorio che attualmente comprende brani che spaziano dalla musica rinascimentale a quella contemporanea.
        </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
