import style from './NameModal.module.css'
import {InputGroup, FloatingLabel, Form, Button} from 'react-bootstrap'

function NameModal() {
  return (
    <div className={style.container}> 
        <InputGroup size="sm" >
        <FloatingLabel controlId="floatingTextarea" label="Name:" className={style.input} >
        <Form.Control as="textarea" placeholder="Leave a comment here" />
        </FloatingLabel>
        </InputGroup>
        <br />
        <Button variant="dark">Next</Button>
    </div>
  )
}

export default NameModal