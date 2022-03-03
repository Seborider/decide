import React from 'react'
import style from './Card.module.css'
import { Button} from 'react-bootstrap'
import { FcCancel, FcCheckmark } from "react-icons/fc"


type headerProps = {
    name: string;
    onClick?: () => void;
    icon: "No" | "Yes" 
}

const IconStateMap = {
  Yes: <FcCheckmark size="100"/>,
  No: <FcCancel size="100"/>
}

function Card({name, onClick, icon}:headerProps):JSX.Element {
  return (
    <section className= {style.card}>
    <header className={style.header}>
        <h1>{name}</h1>
       <Button variant="dark" onClick={onClick}>Edit</Button>
    </header>
    <main className={style.icon}>
       {IconStateMap[icon]}
    </main>
    </section>
  )
}

export default Card