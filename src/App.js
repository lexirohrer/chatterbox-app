
import { useState } from 'react';
import './App.css';
import TextInput from './textinput';
import Message from './Message'
import NamePicker from './NamePicker'
import {db, useDB} from './db'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function Wrap() {
  return <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/:room" component={App} />
    </Switch>
  </BrowserRouter>
}

function App(props) {

  const room = props.match.params.room || 'home'

  const messages = useDB(room)
  // const [messages,setMessages] = useState([])
  const [username, setUsername] = useState(
    localStorage.getItem('username') || ''
  )
  
  console.log(messages)
  
  return <div className="App">

    <header className="header">
      <div className="logo-and-title">
        <div className="logo" />
        CHATTERBOX
        </div>
        <NamePicker saveName={setUsername} />
    </header>

    <main className="messages">
      {messages.map((m,i)=> {
        const isMe = m.name===username
        return <Message key={i} {...m} isMe={isMe} />
      })}
    </main>

      <TextInput
        send={(t)=> db.send({text:t, name:username, date:new Date(), room})}
        // send={(t)=> setMessages([{text:t, name:username, date:new Date()}, ...messages] )}
      />
      
  </div>
}
export default Wrap;