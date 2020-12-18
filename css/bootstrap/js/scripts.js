var akanMaleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame", ];
var akanFemaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama", ];

function akanName() {
  var gender = document.getElementById("gender").value;
  var ydate = document.getElementById("ydate").value;

  var CC = parseInt(ydate.substr(0, 2));
  var YY = parseInt(ydate.substr(1, 3));
  var MM = parseInt(ydate.substr(5, 6));
  var DD = parseInt(ydate.substr(8, 9));
  var myYear = parseInt(ydate.substr(0, 5));
  var d = parseInt((CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7)

  var date = new Date(myYear, MM - 1, DD);
  if (date > new Date()) {
    alert("invalid date; you have entered a future date")
  } else {
    if (gender === "male") {
      alert("your ghanian akan name is " + akanMaleNames[d])
    } else if (gender === "female") {
      alert("your ghanian akan name is " + akanFemaleNames[d])
    } else
      alert("invalid gender. please choose your gender")
  }

}