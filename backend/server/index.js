
const express = require("express")
const app = express()
const http = require('http')
const server = http.createServer(app);
const io = require('socket.io')(server, {
  path: '/socket',
  cors: {
    origin: 'https://diningexperiencesource.shop',
    credentials: true,
  },
});

const cors = require('cors')
const corsOptions = {
  origin: 'https://diningexperiencesource.shop', // Reemplaza con la URL de tu aplicación frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));


const mysql = require('mysql')


// const io = require('socket.io')(server);

app.use(express.json());


const port =  process.env.PORT || 4000;

const messages = [{username: "cristian", message: "no joda"}]
    
// chat websocket


// let mensajes = [];
io.on('connection', (socket) => {
  console.log('Cliente conectado');

  socket.on('nuevoMensajeDesdeCliente', (data) => {
    console.log('Nuevo mensaje desde el cliente:', data.username, data.message);


    io.emit('mensajeDesdeServidor', data);
  });
});

// manejo de errores

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});


// trayendo mensajes de la base de dato


app.get("/", (req, res) => {
  // Consultar mensajes desde la base de datos
  db.query('SELECT * FROM Messages', (error, results) => {
      if (error) {
          console.error('Error al obtener mensajes desde la base de datos:', error);
          res.status(500).json({ error: 'Error interno del servidor' });
      } else {
          // Enviar los mensajes al frontend
          res.status(200).json(results);
          // io.emit('mensajeDesdeServidor', mensajes);
          // io.emit('mensajeDesdeServidor', mensajes);
      }
  });
});




server.listen(port, () => {
    console.log("servidor montado")
})

// Creando conexion a la base de datos

// enviando mensajes a la base de datos

const DB_HOST =  process.env.DB_HOST || "localhost"
const DB_USER = process.env.DB_USER ||  "u827864012_root"
const DB_PASSWORD = process.env.DB_PASSWORD || "spizamarillo2715"
const DB_NAME = process.env.DB_NAME || "u827864012_ChatEnVivo"
const DB_PORT = process.env.DB_PORT || '3306'
const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT,
})

db.connect(err => {
    if (err) {
      console.error('Error de conexión a la base de datos:', err);
    } else {
      console.log('Conexión a la base de datos exitosa');
    }
  });

  app.post("/sendMessage", (req, res) => {
    const { username, message } = req.body;
  
    if (!username || username.trim() === "") {
      return res.status(400).json({ error: 'El campo "username" no puede estar vacío.' });
    }
  
    const newMessage = { username: username, message: message };
  
    db.query('INSERT INTO Messages SET ?', newMessage, (error, result) => {
      if (error) {
        console.error('Error al insertar el mensaje en la base de datos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
      } else {
        console.log('Mensaje insertado correctamente en la base de datos');
        res.status(200).json({ message: 'Mensaje enviado con éxito' });
      }
    });
  });

// logica usuarios conectados

let connectedUsers = [];

app.get("/userContainer", (req, res) => {
  // Enviar información sobre usuarios conectados
  res.json({
    numberUsersConnected: connectedUsers.length,
    usersConnected: connectedUsers,
  });
});

app.post("/userContainer", (req, res) => {
  // Agregar el nuevo usuario a la lista de usuarios conectados
  const newUser = `User ${connectedUsers.length + 1}`;
  connectedUsers.push(newUser);

  // Enviar información actualizada sobre usuarios conectados
  res.json({
    numberUsersConnected: connectedUsers.length,
    usersConnected: connectedUsers,
  });
});