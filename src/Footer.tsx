import React, { useRef, useState } from 'react'
import Style from "./Footer.module.scss";
import { User } from './App';

interface Props {
    addUser: (user: User) => void
  }

const Footer = ({addUser}: Props) => {
    const ref = useRef<HTMLInputElement>(null);
    const [counter, setCounter] = useState(0);

    const onAddPlayer = () => {
        const name = ref.current?.value;
        if (name){
            console.log(name);
            addUser({userId: counter, userName: name, points: 0});
            setCounter(counter+1);
            ref.current.value = '';
        }
    }
  return (
    <div className={Style.footerContainer}>
        <input className={Style.footerInput} type='text' ref={ref}/>
        <div className={Style.footerButton} onClick={onAddPlayer}>ADD PLAYER</div>
    </div>
  )
}

export default Footer