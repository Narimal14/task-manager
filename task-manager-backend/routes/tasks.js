const express = require('express');
const router = express.Router();
const Task = require('../models/Task'); // Asegúrate de que el modelo está bien importado

// Ruta para obtener todas las tareas (GET)
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks); // Enviar las tareas al cliente
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las tareas' });
  }
});

// Ruta para crear una nueva tarea (POST)
router.post('/', async (req, res) => {
  const { title, description } = req.body; // Asegúrate de que el cuerpo de la solicitud tenga estos datos
  try {
    const newTask = new Task({ title, description });
    await newTask.save(); // Guardamos la nueva tarea en la base de datos
    res.status(201).json(newTask); // Enviar la tarea creada al cliente
  } catch (error) {
    res.status(400).json({ message: 'Error al crear la tarea' });
  }
});

module.exports = router;