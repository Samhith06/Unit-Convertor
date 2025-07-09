
document.getElementById("Convertoform").addEventListener("submit",function(event){
    event.preventDefault(); 
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    
    if(isNaN(inputValue)) {
        alert("Please enter a valid number.");
        return;
    }
    const conversionRates ={
        meter: 1,   
        kilometer: 0.001,
        centimeter: 100,   
        millimeter: 1000,
        mile: 0.000621371,
        yard: 1.09361,
        foot: 3.28084,
        inch: 39.3701,
    }
    var basevalue = inputValue * conversionRates[fromUnit];
    var convertedValue = basevalue / conversionRates[toUnit];

    document.getElementById("resultValue").textContent = convertedValue.toFixed(2) + " " + toUnit;

});