import io from "socket.io-client";
import { useEffect, useState } from "react";

import { LiMensaje, UlMensajes } from "./ui-components";
const socket = io("http://localhost:3001");

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [mensajes, setMensajes] = useState([]);
  const [newMesaje, setNewMesaje] = useState("");
  

  useEffect(() => {
    socket.on("connect", () => {
      setIsConnected(true);

    });
    socket.on("chat_messageBack",(data)=>{
      console.log(data);
      setMensajes((mensajes)=>[...mensajes,data])
      console.log(mensajes);
    })
    return()=>{
      socket.off("connect")
      socket.off("chat_messageBack")
    }
  }, []);
  const sendMessage = () => {
  socket.emit("chat_message",{
  usuario:socket.id,
  messaje: newMesaje
  })
  };
  return (
    <div className="App">
      {isConnected && <h2>in live</h2>}
      <UlMensajes>
        {mensajes.map((mensaje) => (
          <LiMensaje>
            {mensaje.usuario}: {mensaje.messaje}
          </LiMensaje>
        ))}
      </UlMensajes>
      <input
        type="text"
        onChange={(e) => setNewMesaje(e.target.value)}
        value={newMesaje}
      />
      <button onClick={sendMessage}>Enviar</button>
    </div>
  );
}

export default App;
