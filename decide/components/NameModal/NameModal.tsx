import style from './NameModal.module.css'
import {InputGroup, FloatingLabel, Form, Button} from 'react-bootstrap'

type NameModalProps = {
    onClick?: () => void;
}

function NameModal({onClick}:NameModalProps) {
  return (
    <div className={style.container}> 
        <InputGroup size="sm" >
        <FloatingLabel controlId="floatingTextarea" label="Name:" className={style.input} >
        <Form.Control as="textarea" placeholder="Leave a comment here" />
        </FloatingLabel>
        </InputGroup>
        <br />
        <Button variant="dark" onClick={onClick}>Next</Button>
    </div>
  )
}

export default NameModal