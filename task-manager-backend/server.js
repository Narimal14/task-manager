const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const taskRoutes = require('./routes/tasks'); // Ruta que has creado

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); // Middleware para parsear JSON

// Usamos la ruta '/api/tasks' para manejar las tareas
app.use('/api/tasks', taskRoutes);  // Asegúrate de que esta ruta está bien configurada

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Conectado a MongoDB");
    app.listen(process.env.PORT || 5000, () => {
      console.log(`🚀 Servidor corriendo en el puerto ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => {
    console.error("❌ Error al conectar a MongoDB:", err);
  });