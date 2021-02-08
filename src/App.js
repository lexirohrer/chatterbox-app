
import { useState } from 'react';
import './App.css';
import TextInput from './textinput';
import Message from './Message'
import NamePicker from './NamePicker'
import {db, useDB} from './db'

function App() {
  const messages = useDB()
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
        send={(t)=> db.send({text:t, name:username, date:new Date()})}
        // send={(t)=> setMessages([{text:t, name:username, date:new Date()}, ...messages] )}
      />
      
  </div>
}
export default App;