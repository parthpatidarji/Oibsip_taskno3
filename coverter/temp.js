function convertTemperature() {
      var temperature = document.getElementById("temperature").value;
      var conversionType = document.getElementById("conversionType").value;
      var resultElement = document.getElementById("result");

      if (temperature === "") {
        resultElement.innerHTML = "Please enter a temperature.";
        return;
      }

      if (isNaN(temperature)) {
        resultElement.innerHTML = "Please enter a valid temperature.";
        return;
      }

      temperature = parseFloat(temperature);

      if (conversionType === "celsius") {
        var convertedTemperature = (temperature - 32) * (5 / 9);
        resultElement.innerHTML =
          temperature + "°F is equal to " + convertedTemperature.toFixed(2) + "°C.";
      } else {
        var convertedTemperature = (temperature * 9) / 5 + 32;
        resultElement.innerHTML =
          temperature + "°C is equal to " + convertedTemperature.toFixed(2) + "°F.";
      }
    }