import React from 'react'
import { Button, Container, Col, Row } from 'react-bootstrap'
import style from './ProContra.module.css'

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
        name: 'environment',
        value: 'Cars are shite for the environment'
    }
]


function ProContra() {


  return (
    <section className={style.container}>
        <h4>Pro's & Con's</h4>
        <Button variant="dark">Add</Button>
        <br />
        <div className={style.list}>
        <Container>
  <Row>
    <Col>
    {MockdataPro.map((point) => (
          <li key={point.name}>
            {point.name}
            <p></p>
            {point.value}
            </li>
        ))}
    </Col>

    <Col> 
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
    </section>
  )
}

export default ProContra