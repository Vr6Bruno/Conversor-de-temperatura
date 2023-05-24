function convertTemperature() {
    var temperatureInput = document.getElementById('temperature-input').value;
    var resultElement = document.getElementById('result');
    var convertedTemperature;

    
    convertedTemperature = (temperatureInput * 9/5) + 32;

    resultElement.textContent = 'A temperatura em Fahrenheit é: ' + convertedTemperature + '°F';

    
    if (convertedTemperature >= 90) {
      document.body.style.backgroundColor = 'red';
    } else if (convertedTemperature <= 32) {
      document.body.style.backgroundColor = 'blue';
    } else {
      document.body.style.backgroundColor = 'green';
    }
  }