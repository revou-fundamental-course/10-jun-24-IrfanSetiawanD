function convertTemperature() {
  const inputTemperature = document.getElementById("inputTemperature").value;
  const inputLabel = document.getElementById("inputLabel").textContent;
  const outputTemperature = document.getElementById("outputTemperature");
  const calculation = document.getElementById("calculation");
  let convertedTemperature;
  let calculationText;

  if (inputLabel.includes("Celsius")) {
    convertedTemperature = (inputTemperature * 9) / 5 + 32;
    calculationText = `${inputTemperature}°C * (9/5) + 32 = ${convertedTemperature}°F`;
    document.getElementById("outputLabel").textContent = "Fahrenheit (°F):";
  } else {
    convertedTemperature = ((inputTemperature - 32) * 5) / 9;
    calculationText = `(${inputTemperature}°F - 32) * 5/9 = ${convertedTemperature}°C`;
    document.getElementById("outputLabel").textContent = "Celsius (°C):";
  }

  outputTemperature.value = convertedTemperature.toFixed(2);
  calculation.value = calculationText;
}

function resetForm() {
  document.getElementById("inputTemperature").value = "";
  document.getElementById("outputTemperature").value = "";
  document.getElementById("calculation").value = "";
}

function reverseConversion() {
  const inputLabel = document.getElementById("inputLabel");
  const outputLabel = document.getElementById("outputLabel");

  if (inputLabel.textContent.includes("Celsius")) {
    inputLabel.textContent = "Fahrenheit (°F):";
    outputLabel.textContent = "Celsius (°C):";
  } else {
    inputLabel.textContent = "Celsius (°C):";
    outputLabel.textContent = "Fahrenheit (°F):";
  }

  resetForm();
}
