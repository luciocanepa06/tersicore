import "../page.module.css";
import "../styles/footer.css"

export default function Footer() {
  return (
    <div className="footer">
        <div className="info">
            <p><strong>Associazione Coro Tersicore</strong></p>
            <p>c/o Gianluca D&apos;Ettorre</p>
            <p>Via Brentani 9</p>
            <p>6900 Lugano</p>
        </div>
        <div className="contacts">
            <p><strong>E-mail: </strong><a href="mailto:info@tersicore.ch">info@tersicore.ch</a></p>
            <p><strong>Telefono: </strong> <a href="tel:+41919711375">+41 91 971 13 75</a> </p>
        </div>
        <div className="social">
            <p><a href="https://www.facebook.com/CORO-TERSICORE-Lugano-381826281882584" target="_blank">Pagina Facebook</a></p>
            <p><a href="https://www.youtube.com/channel/UCrO2CbPTXWypWYg1gYmiXWA" target="_blank">Canale Youtube</a></p>
        </div>
    </div>
  );
}
