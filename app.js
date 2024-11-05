const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Imposta la cartella "app" come directory per i file statici
app.use(express.static(path.join(__dirname, 'app')));

// Rotte per servire le pagine statiche
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'app', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'app', 'about.html'));
});

app.get('/sitemap', (req, res) => {
    res.sendFile(path.join(__dirname, 'app', 'sitemap.html'));
});

app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
});
