import {useState} from 'react'
import './App.css';

function TextInput(props){
    const [text, setText] = useState(' ')
    
    function sendMessage(){
        if (text===''){return}
        props.send(text)
        setText('')
    }

    function keyPressed(e){
        if (e.key==="Enter") {
            sendMessage()
        }
    }
    
    return <footer className="footer">

    <div className="input">
        <input className="text-input"
        placeholder="write your message"
        value={text}
        onChange={e=> setText(e.target.value)}
        onKeyPress= {keyPressed}
        />
        <button className ="button"
            onClick={sendMessage}
        >
        </button>
    </div>
    </footer>

}

export default TextInput