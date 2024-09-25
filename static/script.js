document.getElementById('upload-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    
    const formData = new FormData();
    const pdfFile = document.getElementById('pdf-upload').files[0];
    formData.append('pdf', pdfFile);
    
    const response = await fetch('/upload', {
        method: 'POST',
        body: formData
    });
    
    const result = await response.json();
    document.getElementById('ocr-output').textContent = result.text;
});
