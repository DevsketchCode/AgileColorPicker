function convertColor() {
  // create color objects
  const rgbColors = {red: 0, green: 0, blue: 0};

  // Get user values and convert to floats;
  rgbColors.red = parseFloat(document.querySelector("#colorValue1").value);
  rgbColors.green = parseFloat(document.querySelector("#colorValue2").value);
  rgbColors.blue = parseFloat(document.querySelector("#colorValue3").value);

  // Convert and Round to 2 decimal places;
  var rho = roundFloatTo2Decimal(RGBToBarycentricMaxwellHue(rgbColors.red, rgbColors));
  var gamma = roundFloatTo2Decimal(RGBToBarycentricMaxwellHue(rgbColors.green, rgbColors));
  var beta = roundFloatTo2Decimal(RGBToBarycentricMaxwellHue(rgbColors.blue, rgbColors));
  var luminance = roundFloatTo2Decimal(getLuminance(rgbColors));

  // Display the results
  document.querySelector("#convertedColorValue1").innerHTML = "&rho; (rho): " + rho;
  document.querySelector("#convertedColorValue2").innerHTML = "&gamma; (gamma): " + gamma;
  document.querySelector("#convertedColorValue3").innerHTML = "&beta; (beta): " + beta;
  luminanceText = document.querySelector("#convertedLuminance");
  luminanceText.style.display = "block";
  luminanceText.innerHTML = "L: " + luminance;
}

function RGBToBarycentricMaxwellHue(convertingColor, rgbColors) {
  var sumOfColors = 0;
  // loop through and add the color values together for the conversion equation
  for(var rgbKey in rgbColors) {
    sumOfColors += rgbColors[rgbKey];
  }
  // convert the rgb color to Barycentric Maxwell values and return
  return (1/(sumOfColors)) * convertingColor;
}

function roundFloatTo2Decimal (number) {
  return Math.round(number * 100) / 100;
}

function getLuminance(rgbColors) {
  // get the values from the rgbColors object
  var colors = Object.values(rgbColors);
  // return the Luminance (the max of R,G,B)
  return Math.max(...colors);
}
