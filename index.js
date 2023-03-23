// Deklarasi Seluruh Variabel
var gauge = document.getElementById("gauge");
var genderInput = document.getElementById("gender-input");
var ageInput = document.getElementById("age-input");
var weightInput = document.getElementById("weight-input");
var heightInput = document.getElementById("height-input");

// membuat instance dari JustGage
var g = new JustGage({
    id: "gauge",
    value: 0, // nilai awal gauge 1 0
    min: 0,
    max: 50,
    title: "BMI", // judul gauge
    label: "",
    gaugeWidthScale: 0.6,
    levelColorsGradient: true
});

function validateForm(event) {
    event.preventDefault(); // mencegah form melakukan submit secara default


    // mendapatkan input gender, umur, berat dan tinggi

    // validasi input form
    if (genderInput == "") {
        alert("Please provide positive gender value.");
        return false; // mencegah form melakukan submit jika ada input yang kosong
    }

    if (ageInput == "") {
        alert("Please provide positive age value.");
        return false; // mencegah form melakukan submit jika ada input yang kosong
    }

    if (weightInput == "") {
        alert("Please provide positive weight value");
        return false; // mencegah form melakukan submit jika ada input yang kosong
    }

    if (heightInput == "") {
        alert("Please provide positive height value.");
        return false; // mencegah form melakukan submit jika ada input yang kosong
    }
};

// menambahkan event listener pada button
var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
    // mendapatkan nilai berat dan tinggi dari input
    var weight = weightInput.value;
    var height = heightInput.value;
    var age = ageInput.value;
    var gender = genderInput.value;

    // menghitung BMI
    var bmi = weight / ((height / 100) * (height / 100));

    // menghitung kategori BMI berdasarkan usia dan gender
    if (age < 18) {
        if (gender === "male") {
            if (bmi < 16) {
                document.getElementById("bmiCategory").innerHTML = "Your BMI category is : Underweight";
            } else if (bmi >= 16 && bmi < 18) {
                document.getElementById("bmiCategory").innerHTML = "Your BMI category is : Normal Range, Healthy & weight";
            } else if (bmi >= 18 && bmi < 21) {
                document.getElementById("bmiCategory").innerHTML = "Your BMI category is : Overweight";
            } else {
                document.getElementById("bmiCategory").innerHTML = "Your BMI category is : Obese";
            }
        } else {
            if (bmi < 15) {
                document.getElementById("bmiCategory").innerHTML = "Your BMI category is : Underweight";
            } else if (bmi >= 15 && bmi < 17) {
                document.getElementById("bmiCategory").innerHTML = "Your BMI category is : Normal Range, Healthy & weight";
            } else if (bmi >= 17 && bmi < 19) {
                document.getElementById("bmiCategory").innerHTML = "Your BMI category is : Overweight";
            } else {
                document.getElementById("bmiCategory").innerHTML = "Your BMI category is : Obese";
            }
        }
    } else {
        if (gender === "male") {
            if (bmi < 18.5) {
                document.getElementById("bmiCategory").innerHTML = "Your BMI category is : Underweight";
            } else if (bmi >= 18.5 && bmi < 25) {
                document.getElementById("bmiCategory").innerHTML = "Your BMI category is : Normal Range, Healthy & weight";
            } else if (bmi >= 25 && bmi < 30) {
                document.getElementById("bmiCategory").innerHTML = "Your BMI category is : Overweight";
            } else {
                document.getElementById("bmiCategory").innerHTML = "Your BMI category is : Obese";
            }
        } else {
            if (bmi < 18) {
                document.getElementById("bmiCategory").innerHTML = "Your BMI category is : Underweight";
            } else if (bmi >= 18 && bmi < 24) {
                document.getElementById("bmiCategory").innerHTML = "Your BMI category is : Normal Range, Healthy & weight";
            } else if (bmi >= 24 && bmi < 29) {
                document.getElementById("bmiCategory").innerHTML = "Your BMI category is : Overweight";
            } else {
                document.getElementById("bmiCategory").innerHTML = "Your BMI category is : Obese";
            }
        }
    }

    // memperbarui nilai gauge dengan nilai BMI yang dihitung
    g.refresh(bmi.toFixed(1));

});

// Untuk fokus pada hasil BMI ketika User menekan tombol  "Calculate"
function scrollDown() {
    window.scrollTo(0, document.body.scrollHeight);
}