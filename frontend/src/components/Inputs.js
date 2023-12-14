import React from 'react'
import { useState, useRef } from 'react'
import { io } from 'socket.io-client'

function Inputs({setReceiveMessage, receiveMessage, chatContainerRef, sendMessage, reloadMessage ,setReloadMessage, nombreUsuario, setSendMessage}) {
  const [texto, setTexto] = useState(null)
  const [messageSocket, setMessageSocket] = useState(null)
  const [error, setError] = useState(null)
const [valueText, setValueText] = useState("")
const [errorSocket, setErrorSocket] = useState(null)
const socketRef = useRef()
let socket;

socketRef.current = io('https://diningexperiencesource.shop', { path: '/socket' });
  

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };
  

const challengeText = (e) => {
  
    setTexto(e.target.value)
}



const challengeTextSocket = (e) => {
  
  setMessageSocket(e.target.value)
}

const submitFormSocket = (e) => {
  e.preventDefault()
  
  socketRef.current.emit('nuevoMensajeDesdeCliente', { username: nombreUsuario, message: messageSocket });

  setMessageSocket('');
};

const submitForm = (e) => {
e.preventDefault()
if(texto.length > 0){
    setReloadMessage(false)
setSendMessage({username: nombreUsuario, message: texto || ""})
setReceiveMessage(true)
setTimeout(() => {
    scrollToBottom();
  }, 150);

if(reloadMessage = false){
    setTimeout(() => setReloadMessage(true), 100) 

}
} else {
    setError("Escriba un texto en el mensaje porfavor")
}
}
  
    return (


    <div className='inputs-container'>
        <div className='welcome-to-chat'>
        <h1>Bienvenido Al Chat En Linea</h1>
        </div>
    <div style={{display: "flex", flexDirection: "row", gap: "150px", marginTop: "-50px"}}> 
        <form onSubmit={submitForm} className='form-sendmessage'>
          <h1>Sin Libreria</h1>
<h1>Usuario: {nombreUsuario}</h1>            
<textarea  className='input-messsage' onChange={challengeText} placeholder='Escribe el contenido de tu mensaje' />
<button className='btn btn-send' type='submit'>Enviar</button>
{error && <div >
    <h1 className='error'>{error}</h1></div>}
        </form>


        <form onSubmit={submitFormSocket} className='form-sendmessage'>
          <h1>Chat Socket</h1>
<h1>Usuario: {nombreUsuario}</h1>            
<textarea  className='input-messsage' onChange={challengeTextSocket} placeholder='Escribe el contenido de tu mensaje' />
<button className='btn btn-send' type='submit'>Enviar</button>
{error && <div>
    <h1 className='error'>{errorSocket}</h1></div>}
        </form>
        </div>  
    
    </div>
   
  )
}

export default Inputs