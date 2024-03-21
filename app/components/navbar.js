import Link from 'next/link'
import Image from "next/image"

import NavbarMobile from "./navbar-mobile.js"

import "../page.module.css";
import "../styles/navbar.css"

import logo_teriscore from "../../public/assets/logo.svg"




export default function Navbar() {
  return (
    <div className="navbar">

      <span id="logo"> 
        <Image src={logo_teriscore} alt="Logo Tersicore" />  
      </span>

      <li id="list-menu">
        <ul>  <Link href="/"> Home </Link>  </ul>
        <ul>  <Link href="/chi_siamo"> Chi siamo </Link>  </ul>
        <ul>  <Link href="/direttore"> Direttore </Link>  </ul>
        <ul>  <Link href="/calendario"> Calendario </Link>  </ul>
      </li>

      <NavbarMobile />

      </div>
  );
}
