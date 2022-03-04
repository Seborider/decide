import React from 'react'
import { Button, Container, Col, Row } from 'react-bootstrap'
import style from './ProContra.module.css'

type ProContraProps = {
    onClick?: () => void;
}

type MockData = {
    name: string | number,
    value: string | number,
}


const MockdataPro : MockData [] = [
    { 
        name: 'use',
        value: 'I can finally drive my own car'
    },
    {
        name: 'girls',
        value: 'All the girls are gonna like me'
    }
]

const MockDataContra : MockData[] = [
    { 
        name: 'cost',
        value: 'Its damn expensive'
    },
    {
        name: 'environment3',
        value: 'Cars are shite for the environment'
    },
    {
        name: 'environment2',
        value: 'Cars are shite for the environment'
    },
    {
        name: 'environment1',
        value: 'Cars are shite for the environment'
    }
]


function ProContra({onClick}:ProContraProps) :JSX.Element {


  return (
    <section className={style.container}>
        <h4>Pro's & Con's</h4>
        <Button variant="dark" onClick={onClick}>Add</Button>
        <br />
        <div>
        <Container>
  <Row>
    <Col className={style.colLeft}>
    {MockdataPro.map((point) => (
          <li key={point.name}>
            {point.name}
            <p></p>
            {point.value}
            </li>
        ))}
    </Col>

    <Col className={style.colRight}> 
    {MockDataContra.map((point) => (
          <li key={point.name}>
            {point.name}
            <p></p>
            {point.value}
            </li>
        ))}
    </Col>
  </Row>
  </Container>

        </div>
        <br />

        <Button variant="success" onClick={onClick}>Decide</Button>
    </section>
  )
}

export default ProContra