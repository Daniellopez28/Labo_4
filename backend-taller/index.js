const express = require('express');
const cors = require('cors');
const app = express();

// Habilitar CORS para que el frontend pueda consumir la API
app.use(cors());
app.use(express.json());

const PORT = 3000;

// 4. Endpoint de Health
app.get('/api/health', (req, res) => {
  res.json({ mensaje: "¡El API está funcionando correctamente!" });
});

// 5. Endpoint de Info (Datos quemados)
app.get('/api/info', (req, res) => {
  res.json({
    integrantes: [
      {
        nombre: "Rodrigo Campos",
        edad: 20,
        carrera: "Ingeniería Informática",
        materiasAprobadas: 15
      },
      {
        nombre: "Daniel Lopez",
        edad: 23,
        carrera: "Ingeniería de Software",
        materiasAprobadas: 12
      }
    ]
  });
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});