document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('imageInput');
    const resultDiv = document.getElementById('result');

    function processImage() {
        const file = imageInput.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = async function() {
                const imageDataUrl = reader.result;
                const { data: { text } } = await Tesseract.recognize(
                    imageDataUrl,
                    'eng',
                    { logger: e => console.log(e) }
                );

                resultDiv.textContent = text;
            };

            reader.readAsDataURL(file);
        } else {
            alert('Selecciona una imagen antes de procesar.');
        }
    }

    document.querySelector('button').addEventListener('click', processImage);
});
