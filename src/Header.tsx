import React from 'react'
import Style from "./Header.module.scss";
import { User } from './App';

interface Props {
    users: User[];
  }

const Header = ({users}: Props) => {
    const getTotalPoints = () => {
        return users.reduce((acc, user) => acc + user.points, 0);
    }
  return (
    <div className={Style.headerContainer}>
        <div className={Style.infoContainer}>
            <div>Players {users.length}</div>
            <div>Points  {getTotalPoints()}</div>
        </div>
        <div>Game Score Board</div>
        <div>Stopwatch</div>
    </div>
  )
}

export default Header