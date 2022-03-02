import React from 'react'
import style from './Card.module.css'
import { Button} from 'react-bootstrap'

type headerProps = {
    name: string;
}

function Card({name}:headerProps):JSX.Element {
  return (
    <>
    <header className={style.header}>
        <h1>{name}</h1>
       <Button variant="dark">Edit</Button>
    </header>
    </>
  )
}

export default Card