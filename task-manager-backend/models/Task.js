const mongoose = require('mongoose');

// Definir el esquema para las tareas
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // El título es obligatorio
    trim: true, // Elimina los espacios al principio y final
  },
  description: {
    type: String,
    required: true, // La descripción también es obligatoria
    trim: true, // Elimina los espacios al principio y final
  },
  completed: {
    type: Boolean,
    default: false, // Por defecto, la tarea no está completada
  },
  createdAt: {
    type: Date,
    default: Date.now, // Fecha de creación de la tarea
  },
});

// Crear el modelo a partir del esquema
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;