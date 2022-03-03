import Input from './../Input/Input'
import style from './InputForm.module.css'
import { FcCancel, FcCheckmark } from "react-icons/fc"
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel';
import { FiCheck } from "react-icons/fi"
import { TiCancel } from 'react-icons/ti'
import { useState } from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import { Button } from 'react-bootstrap'


type InputFormProps = {
    input: string
}

export default function InputForm({input}:InputFormProps):JSX.Element {

    const [state, setState] = useState({
        pro: true,
        contra: false,
      });
    
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
          ...state,
          [event.target.name]: event.target.checked,
        });
      };
    
      const { pro, contra } = state;
      const error = [pro, contra].filter((v) => v).length !== 1;

  return (
    <section className={style.container}>
    <div className={style.box}>
    <FormControl className={style.box} error={error}>
        <FormLabel className={style.text}><p>Pick Pro or Contra</p></FormLabel>
       <div className={style.boxes}>
          <FormControlLabel 
            control={
              <Checkbox checked={pro} onChange={handleChange} name="pro" icon={<FiCheck/>} checkedIcon={<FcCheckmark />}/>
            }
            label=""
          />
         
          <FormControlLabel 
            control={
              <Checkbox checked={contra} onChange={handleChange} name="contra" icon={<TiCancel/>} checkedIcon={<FcCancel />}/>
            }
            label=""
          />
        </div>
        
    </FormControl>
    </div>
    <br/>
    <Input input={input}/>
    <br/>
    <Button variant="dark">Add</Button>
    </section>

  )
}
