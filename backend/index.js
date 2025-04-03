const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Endpoint para recibir datos del registro
app.post('/register', (req, res) => {
    const { nombre, apellido, genero, email, password } = req.body;

    if (!nombre || !apellido || !genero || !email || !password) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    console.log('Datos recibidos:', req.body);
    res.status(200).json({ message: 'Datos recibidos correctamente', data: req.body });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
