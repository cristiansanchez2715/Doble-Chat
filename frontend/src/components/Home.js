import React from 'react'
import { useEffect, useState, useRef } from 'react'


function Home({receiveMessage, setReceiveMessage, chatContainerRef, setUsersConected, usersConected, setVisibilityLogin, setVisibilityHome, setNumberUsersConected, numberUsersConected, sendMessage, messgesAlreadyExist, nombreUsuario, setReloadMessage, reloadMessage}) {
  const [dataApi, setDataApi] = useState([])
  const [visibilityUsersConected, setVisibilityUsersConected] = useState(true)
const breakPointMessage = "https://diningexperiencesource.shop"
   const [activarChat, setActivarChat] = useState(false)
  const [challangeComponent, setChallangeComponent] = useState(false)
  const [actualization, setActualization] = useState(0) 
  let [activeChat, setActiveChat] = useState(false)
  const [visibilityChatSocket, setVisibilityChatSocket] = useState(false)
// const challengeComponentFunction1 =() => {
//   if(challangeComponent === false){
//     setChallangeComponent(true)
//   }
  
    
// }

// const challengeComponentFunction2 = () => {
//   if(challangeComponent === true){
//     setChallangeComponent(false)
//   }
// }


// useEffect(() => {
//   challengeComponentFunction1()
// }, [])

const desabilityVisibilityUsersConected = () => {
  setVisibilityUsersConected(false)
}


// traer usuarios conectados

const addUserConected = () => {
  // e.preventDefault()
  fetch("https://diningexperiencesource.shop/userContainer")
  .then(res => res.json())
  .then(data => setUsersConected(prev => [...prev, ...data.usersConnected]))
  
  }

  useEffect(() => {
addUserConected()
  }, [])

  useEffect(() => {
    const miFuncion = () => {
      setActualization(0)
      // setTimeout(() => {if(actualization < 100){
        setActualization((prevActualization) => prevActualization + 1)
      // }}, 50)
    };

    
    const intervalId = setInterval(miFuncion, 5000);

    return () => {
     clearInterval(intervalId);
    };
  }, [activeChat]); 

useEffect(() => {
// challengeComponentFunction2()
  // Definir la función asíncrona dentro del bloque del useEffect
  const fetchData = async () => {
    try {
      const response = await fetch(breakPointMessage);

      if (!response.ok) {
        throw new Error(`Failed to fetch. Status: ${response.status}`);
      }

      const data = await response.json();
      setDataApi(data);
      console.log(data ? "La API contiene esto: " + JSON.stringify(data) : "Aún no carga");
      setReloadMessage(true);
      setReceiveMessage(false);
    } catch (error) {
      console.log(error);
    }
  };

  // Llamar a la función asíncrona
  if (receiveMessage === true) {
    fetchData();
  }
  // setTimeout(challengeComponentFunction1(), 1000)
}, [actualization, sendMessage]);




const logOut = () => {
  setNumberUsersConected(numberUsersConected - 1)
  setVisibilityHome(false)
  setVisibilityLogin(true)
}

const activarChatFunction = () => {
  setActivarChat(!activarChat)
  setActiveChat(!activeChat)
}
const handleInterval = () => {
  // Lógica que se ejecutará cada segundo
  functionViewChat();
};


useEffect(() => {
  if (activarChat === true) {
    const intervalId = setInterval(handleInterval, 1000);

    // Devolver una función de limpieza para detener el intervalo cuando el componente se desmonta o isActiveInterval cambia
    return () => clearInterval(intervalId);
  }
}, [activarChat]);

// funcion que permite ver el chat

const functionViewChat =  () => {
  
    if (reloadMessage || sendMessage) {
      if (dataApi.length > 0) {
        return dataApi.map((message, index) => (
          <div key={index} className='container-message'>
            <h1 className='message'>{message.username} Dice: {message.message} </h1>
          </div>
        ));


        
      } else {
        return <p>No hay mensajes disponibles.</p>;
      }
    } else {
      return <p>Cargando...</p>;
    
  }
    
}


const functionViewChatSocket = () => (
  receiveMessage.length > 0 ? (
    receiveMessage.map((message, index) => (
      <div key={index} className='container-message-socket'>
        <h1 className='message-socket'>{message.username} Dice: {message.message} </h1>
      </div>
    ))
  ) : (
    <p>{receiveMessage ? 'No hay mensajes disponibles.' : 'Cargando...'}</p>
  )
);


const functionViewPeoplesLive = () => {
  setVisibilityUsersConected(!visibilityUsersConected)
}

const activarChatSocket = () => {
  setVisibilityChatSocket(!visibilityChatSocket)
}

return  (
    <div className='home-container'>
    
<div className='container-messages'>
  <div>
    <h1>Personas que han usado el chat: {numberUsersConected}</h1>
    <div className='container-buttons'>
    <button onClick={logOut} className='btn'>Salir</button>
    <button className='btn' onClick={functionViewPeoplesLive}>Conexiones</button>
    <button className='btn' onClick={activarChatFunction}>Chat S.L</button>
    <button className='btn' onClick={activarChatSocket}>Chat Socket</button>
    </div>
  </div>
</div>
<div className='chat-containers'>
{/* <div className='container-chats'> */}
<div className='chat-container' ref={chatContainerRef}>
  <h1>Chat sin libreria</h1>
{activarChat && functionViewChat()}

</div>


<div  className='chat-container-chatSocket'>
<h1 className='h1-chat'>Chat WebSocket</h1>
{visibilityChatSocket && functionViewChatSocket()}
</div>

</div>
{/* </div> */}
 {  visibilityUsersConected &&<div className='users-conected-container'>
  <button onClick={desabilityVisibilityUsersConected}>X</button>
  <h1>Personas Conectadas:</h1>
  <ul>
    {usersConected  && usersConected.map((users, index) => (
      <li key={index}>{users}</li>
    ))}
  </ul>
</div>}
    </div>
  )
}

export default Home





// const fetchData = async () => {
//   try {
//     const response = await fetch(breakPointMessage);

//     if (!response.ok) {
//       throw new Error(`Failed to fetch. Status: ${response.status}`);
//     }

//     const data = await response.json();
//     setDataApi(data); // Actualizar el estado con los datos recibidos
//     console.log(data ? "La API contiene esto: " + JSON.stringify(data) : "Aún no carga");
//     setReloadMessage(true);
//     setReceiveMessage(false);
//   } catch (error) {
//     console.log(error);
//   }
// };

// const changeReceiveMessage = () => {
//   setReceiveMessage((prevReceiveMessage) => !prevReceiveMessage);
// };

// useEffect(() => {
//   const fetchDataInterval = setInterval(() => {
//     fetchData();
//   }, 5000);

//   const changeReceiveMessageInterval = setInterval(() => {
//     changeReceiveMessage();
//   }, 5000);

//   return () => {
//     clearInterval(fetchDataInterval);
//     clearInterval(changeReceiveMessageInterval);
//   };
// }, [receiveMessage]);



// useEffect(() => {
// fetch(breakPointMessage).
// then(res => res.json(). then(data => setDataApi(data))
// .catch(err => console.log(err)))
// console.log(dataApi)}, [])


// useEffect( () => {
  
// if(receiveMessage === true){
  

//    fetch(breakPointMessage)
//     .then((res) => {
//       if (!res.ok) {
//         throw new Error(`Failed to fetch. Status: ${res.status}`);
//       }
//       return res.json();
//     })
//     .then((data) => setDataApi(data))
//     .catch((err) => console.log(err));
//   dataApi ? console.log("la api contiene esto:" + JSON.stringify(dataApi)) : console.log("Aun no carga")
//   setReloadMessage(true)
// setReceiveMessage(false)
// }}, [receiveMessage]);
