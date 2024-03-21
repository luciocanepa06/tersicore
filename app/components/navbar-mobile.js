'use client'

import {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from "next/image"

import menu_logo from "../../public/assets/menu.svg"
import close_button from "../../public/assets/close.svg"


function setOptions(open, setOpen, id, setId){
    if(open == menu_logo || id == "no-mobile-menu"){
        setOpen(close_button)
        setId("mobile-menu")
    }else{
        setOpen(menu_logo)
        setId("no-mobile-menu")
    }
}

export default function NavbarMobile(){
    const [open, setOpen] = useState(menu_logo)
    const [id, setId] = useState("no-mobile-menu")
    return (
        <div className='navbar-mobile'>

        <div id="mobile-menu-button">
            <Image src={open} alt="SVG Menu" onClick={()=>{
                setOptions(open, setOpen, id, setId)
            }}/>
        </div>

        <div id={id}>
            <li id="mobile-list-menu">
                <ul>  <Link href="/" onClick={()=>{
                        setOptions(open, setOpen, id, setId)
                        }}> Home </Link>  </ul>
                <ul>  <Link href="/chi_siamo" onClick={()=>{
                        setOptions(open, setOpen, id, setId)
                        }}> Chi siamo </Link>  </ul>
                <ul>  <Link href="/direttore" onClick={()=>{
                        setOptions(open, setOpen, id, setId)
                        }}> Direttore </Link>  </ul>
                <ul>  <Link href="/calendario"onClick={()=>{
                        setOptions(open, setOpen, id, setId)
                        }}> Calendario </Link>  </ul>
            </li>
    </div>
    </div>
    )
  
  }