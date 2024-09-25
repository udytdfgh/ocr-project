const express = require('express');
const multer = require('multer');
const path = require('path');
const { PythonShell } = require('python-shell');
const fs = require('fs');
const cors = require('cors');

// Initialize Express app
const app = express();
app.use(cors());

// Serve static files from the "static" folder
app.use('/static', express.static(path.join(__dirname, 'static')));
// Multer configuration for file uploads
const upload = multer({ dest: 'upload/' });

// Route to serve the frontend
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Views', 'index.html'));
});

// Handle PDF uploads
app.post('/upload', upload.single('pdf'), (req, res) => {
    const pdfPath = req.file.path;

});
// Start the server
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
