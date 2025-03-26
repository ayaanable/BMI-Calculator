function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    if (weight === "" || height === "") {
        alert("Please enter both weight and height");
        return;
    }

    weight = parseFloat(weight);
    height = parseFloat(height) / 100;

    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);

    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal weight";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    document.getElementById("result").innerHTML = "Your BMI: " + bmi + "<br>Category: " + category;
}
