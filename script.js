function predict() {
    const fileInput = document.getElementById("imageInput");
    const file = fileInput.files[0];

    if (!file) {
        alert("Please select an image first!");
        return;
    }

    const formData = new FormData();
    formData.append("file", file);

    // CHANGE this URL to your backend API URL
    fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("result").innerText =
            "Prediction: " + data.prediction;
    })
    .catch(error => {
        console.error(error);
        alert("Error connecting to server");
    });
}