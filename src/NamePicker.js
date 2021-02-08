import { useState } from "react";

function NamePicker(props){
    
    const[showInput,setShowInput] = useState(false)
    const[username, setUsername] = useState(
        localStorage.getItem('username') || ''
      )

    function keyPressed(e){
        if (e.key==="Enter") {
            setShowInput(false)
        }
    }

    function save(){
        props.saveName(username)
        setShowInput(false)
    localStorage.setItem('username',username)
    }

    /*if showInput is true, then there should be the textfield and submit button*/
    if (showInput){
        return <div className = "name-picker">
            <input 
                value={username}
                onKeyPress={keyPressed}
                onChange={e=>setUsername(e.target.value)}
            />

            <button onClick={save}>
            <i class="fas fa-check-circle" fa-lg></i>
            </button>
        </div>
    }
    
    /*otherwise, showInput will be false (ie username has been entered) and an edit  button will appear)*/
    return <div className="name-picker">
        <div>{username}</div>
        <button onClick={()=>setShowInput(true)}>
            <i class="fa fa-pencil" fa-lg></i>
        </button>
    </div>

}

export default NamePicker