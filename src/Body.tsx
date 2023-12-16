import React from 'react'
import Style from "./Body.module.scss";
import { User } from './App';

interface Props {
    users: User[];
    removeUser: (userId: number) => void;
    setUser: (user: User[]) => void
  }

const Body = ({users, removeUser, setUser}: Props) => {
const reduceScore = (user: User) => {
    user.points--;
    setUser([...users]);
}
const increaseScore = (user: User) => {
    user.points++;
    setUser([...users]);
}
const maxScore = users.reduce((max, user) => user.points>max? user.points : max, Number.NEGATIVE_INFINITY);
  return (
    <div className={Style.bodyContainer}>
        {users.map((user) => {
            return (
                <div className={Style.RowContainer} key={user.userId}>
                    <div className={Style.Button} onClick={() => removeUser(user.userId)}>X</div>
                    <div className={maxScore === user.points ? Style.winner : Style.crown}>Crown</div>
                    <div className={Style.nameContainer} >{user.userName}</div>
                    <div className={Style.Button} onClick={() => reduceScore(user)}>-</div>
                    <div className={Style.points} >{user.points}</div>
                    <div className={Style.Button}onClick={() => increaseScore(user)}>+</div>
                </div>
            )
        })}
    </div>
  )
}

export default Body