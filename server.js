const express = require('express');
const path = require('path');

const app = express();
const port = 5500;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

app.get('/api/patient-data', (req, res) => {
    const data = [12, 19]; // Data contoh, ganti dengan data aktual
    res.json(data);
});