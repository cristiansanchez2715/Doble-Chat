import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from 'react';
import Login from './components/Login';
import React from 'react';
import Home from './components/Home';
import Inputs from './components/Inputs';
import imgChat from './components/assets/chat_publico-removebg-preview.png'
import io from 'socket.io-client';

function App() {
const [visibilityLogin, setVisibilityLogin] = useState(true)
const [visibilityHome, setVisibilityHome] = useState(false)
const [nombreUsuario, setNombreUsuario] = useState(null)
const [sendMessage, setSendMessage] = useState({username: null, message: null})
const [messgesAlreadyExist, setMessagesAlreadyExist] = useState([])
const [reloadMessage, setReloadMessage] = useState(false)
const [numberUsersConected, setNumberUsersConected] = useState(0)
const [usersConected, setUsersConected] = useState([])
const chatContainerRef = useRef(null)
const [receiveMessage, setReceiveMessage] = useState([])
const socketRef = useRef();
// Logica coneccion backend


const apiSendMessage = "http://localhost:4000/sendMessage"


// const apiSendMessage = "https://vercel-test-ncy3i41ui-cristian-medinas-projects.vercel.app/sendMessage"


// traer mensajes desde el chat websocket.io
useEffect(() => {
  // socketRef.current = io('https://vercel-test-ncy3i41ui-cristian-medinas-projects.vercel.app', { path: '/socket' });
// 
  socketRef.current = io('http://localhost:4000', { path: '/socket' });

  // e.preventDefault()
  // Conectarse al servidor Socket.IO

  socketRef.current.on('mensajeDesdeServidor', (data) => {
    setReceiveMessage((prevMessages) => {
      return [...prevMessages, { username: data.username, message: data.message }];
    });
  
  
  
  
      });


  // Limpieza al desmontar el componente
  return () => {
    if (socketRef.current) {
      socketRef.current.disconnect();
    }
  };


}, [socketRef]);


const sendMessageFunction =async () => {
  try {
    const response = await fetch(apiSendMessage, {
      method: "POST",
      headers: {
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify(sendMessage)
    });
    if (response.ok) {
      console.log('Mensaje enviado con éxito');
         } else {
      console.error('Error al enviar el mensaje');
    }
  } catch (error) {
    console.error('Error de red:', error);
  }


}

useEffect(() => {
sendMessageFunction()
}, [sendMessage])

const challengeVisibilityForm = () => {
  return(
    <React.Fragment>
<div className='little-console-container'>
  <div className='img-container'>
  <img className='img-chat' src={imgChat}/>
  <h1>Chat Publico</h1>
  </div>
</div>

      <Home receiveMessage={receiveMessage} setReceiveMessage={setReceiveMessage} chatContainerRef={chatContainerRef}  usersConected={usersConected} setUsersConected={setUsersConected} setVisibilityHome={setVisibilityHome} setVisibilityLogin={setVisibilityLogin} setNumberUsersConected={setNumberUsersConected} numberUsersConected={numberUsersConected} reloadMessage={reloadMessage} setReloadMessage={setReloadMessage} messgesAlreadyExist={messgesAlreadyExist} sendMessage={sendMessage} nombreUsuario={nombreUsuario} />
      <Inputs
       receiveMessage={receiveMessage}
       setReceiveMessage={setReceiveMessage}
        chatContainerRef={chatContainerRef} 
        reloadMessage={reloadMessage}
         setReloadMessage={setReloadMessage} 
         setSendMessage={setSendMessage}
         sendMessage={sendMessage}
          nombreUsuario={nombreUsuario} />
       </React.Fragment> 
  )
}

  return (
    <div className="App">
      <React.Fragment>
       {visibilityLogin &&  <Login setUsersConected={setUsersConected} numberUsersConected={numberUsersConected} setNumberUsersConected={setNumberUsersConected} nombreUsuario={nombreUsuario} setNombreUsuario={setNombreUsuario} setVisibilityLogin={setVisibilityLogin} setVisibilityHome={setVisibilityHome} />
      }
{visibilityHome && challengeVisibilityForm() }

      </React.Fragment>
      
    </div>
  );
}

export default App;
