import style from './Input.module.css'
import { InputGroup, FloatingLabel, Form } from 'react-bootstrap'
import { FcPlus, FcMinus } from "react-icons/fc"

type InputProps = {
    input: string
}

function Input({input} : InputProps) :JSX.Element {
  return (
    <form className={style.form}>
        <div>
        <InputGroup size="sm" className="mb-3">
            <FloatingLabel controlId="floatingTextarea" label={input} className={style.floating} >
                <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel>
        </InputGroup>
        </div>
        <div className={style.range}>
            <Form.Label className={style.minusplus}>
                <FcMinus/>
                Importance
                <FcPlus/>
            </Form.Label>
            <Form.Range />
        </div>
    
    
    </form>
  )
}

export default Input