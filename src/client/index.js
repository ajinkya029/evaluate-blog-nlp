import { capitalize } from "./js/capitalize";
import { formatPolarity } from "./js/formatPolarity";
import { isValidUrl } from "./js/validateURL";
import "./styles/resets.scss";
import "./styles/base.scss";
import "./styles/utilities.scss";
import "./styles/header.scss";
import "./styles/form.scss";
import "./styles/results.scss";
import "./styles/footer.scss";

// Select the elements
const form = document.getElementById("urlForm");
const errorElement = document.getElementById("error");
const resultContainer = document.getElementById("resultContainer");

// Handle form submission
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  // Get the input URL value
  const urlInput = document.getElementById("urlInput");
  const url = urlInput.value;

  // empty url
  if (url == "") {
    clearResults();
    showError("Enter URL");
    return;
  }

  // Validate URL
  if (!isValidUrl(url)) {
    clearResults();
    showError("Invalid URL");
    return;
  }

  hideError();
  clearResults();

  // Send a POST request to the server with the input URL
  sendRequest(url)
    .then(handleResponse)
    .catch((error) => {
      console.error("Error:", error);
      showError("An error occurred while processing the request");
    });
}

function sendRequest(url) {
  return fetch("/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ url }),
  });
}

function handleResponse(response) {
  if (!response.ok) {
    throw new Error("Request failed");
  }
  return response.json().then((data) => {
    updateUI(data.sentences, data.subjectivity);
  });
}

function updateUI(sentences, subjectivity) {
  clearResults();
  for (const sentence of sentences) {
    const card = document.createElement("div");
    card.classList.add("card");

    const textElement = document.createElement("p");
    textElement.classList.add("text");
    textElement.innerText = `Text: ${sentence.text}`;
    card.appendChild(textElement);

    const polarityElement = document.createElement("p");
    polarityElement.classList.add("polarity");
    polarityElement.innerText = `Polarity: ${formatPolarity(
      sentence.polarity
    )}`;
    card.appendChild(polarityElement);

    const confidenceElement = document.createElement("p");
    confidenceElement.classList.add("confidence");
    confidenceElement.innerText = `Confidence: ${sentence.confidence}`;
    card.appendChild(confidenceElement);

    const subjectivityElement = document.createElement("p");
    subjectivityElement.classList.add("subjectivity");
    subjectivityElement.innerText = `Subjectivity: ${capitalize(subjectivity)}`;
    card.appendChild(subjectivityElement);

    resultContainer.appendChild(card);
  }
  showResults();
}

function showResults() {
  resultContainer.style.display = "block";
}

function clearResults() {
  resultContainer.style.display = "none";
}

function showError(errorMessage) {
  errorElement.innerText = errorMessage;
  errorElement.style.display = "block";
  errorElement.style.color = "red";
}

function hideError() {
  errorElement.style.display = "none";
}
