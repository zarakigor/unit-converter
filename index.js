const number = document.body.querySelectorAll(".number");
const meterFeet = document.getElementById("meter-feet");
const feetMeter = document.getElementById("feet-meter");
const literGallon = document.getElementById("liter-gallon");
const gallonLiter = document.getElementById("gallon-liter");
const kiloPound = document.getElementById("kilo-pound");
const poundKilo = document.getElementById("pound-kilo");

function calculate(input) {
    // if value of input is zero put zero before measurements
    if (input.value.length == 0 || input.value < 0) {
        input.value = "0";
    } // delete "0" if it is the first digit of input
    else if (input.value.length > 1 && input.value[0] == "0") {
        input.value = input.value.slice(1);
    } else {
        for (let i = 0; i < number.length; i++) {
            // update all span with value of input
            number[i].textContent = `${parseInt(input.value)}`;
        }
        // update length
        meterFeet.textContent = (input.value * 3.28083).toFixed(3);
        feetMeter.textContent = (input.value * 0.3048).toFixed(3);

        // // update volume
        literGallon.textContent = (input.value * 0.264172052).toFixed(3);
        gallonLiter.textContent = (input.value * 3.78541178).toFixed(3);

        // // update mass
        kiloPound.textContent = (input.value * 2.20462262).toFixed(3);
        poundKilo.textContent = (input.value * 0.45359237).toFixed(3);
    }
}
