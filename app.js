const express = require('express');
const multer = require('multer');
const path = require('path');
const { PythonShell } = require('python-shell');
const fs = require('fs');
const cors = require('cors');

//Express server
const app = express();
app.use(cors());

app.use('/static', express.static(path.join(__dirname, 'static')));

// route to render home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Views', 'index.html'));
});

// Handle PDF uploads
app.post('/upload', upload.single('pdf'), (req, res) => {
    const pdfPath = req.file.path;

});
// Run the server
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
