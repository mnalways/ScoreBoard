import { useState } from 'react'
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Style from "./App.module.scss";

export interface User {userId: number, userName: string, points: number}

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const removeUser = (userId: number) => {
    setUsers(users.filter((item) => item.userId != userId));
  }

  const addUser = (user: User) => {
    setUsers([...users, user]);
  }

  return (
    <div className={Style.AppContainer}>
      <div className={Style.scoreBoardContainer}>
        <Header users={users}/>
        <Body users={users} removeUser={removeUser} setUser={setUsers}/>
        <Footer addUser={addUser}/>
      </div>
    </div>
    );
  }

export default App
