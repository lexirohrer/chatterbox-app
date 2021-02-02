
import { useState } from 'react';
import './App.css';
import TextInput from './textinput';
import Message from './Message'

function App() {
  const [messages,setMessages] = useState([{text:'asdf'}])
  
  console.log(messages)
  
  return <div className="App">

    <header className="header">
      <div className="logo" />
    CHATTERBOX
    </header>

    <main className="messages">
      {messages.map((m,i)=> {
        return <Message key={i} {...m} />
      })}
    </main>

      <TextInput
        send={(t)=> setMessages([{text:t}, ...messages] )}
      />
      
  </div>
}
export default App;