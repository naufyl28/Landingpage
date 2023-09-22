
function handleGetFormData() {
 
  var name = document.getElementById("name").value;
  var city = document.getElementById("city").value;
  var email = document.getElementById("email").value;
  var zipCode = document.getElementById("zip-code").value;
  var status = document.getElementById("status").checked;


  var formData = {
    name: name,
    city: city,
    email: email,
    zipCode: zipCode,
    status: status
  };

  return formData;
}

function handleSubmitForm(event) {
  event.preventDefault(); 

  
  var formData = handleGetFormData();

 
  console.log("Data Form:");
  console.log(formData);
}
var submitButton = document.getElementById("submit-form");
submitButton.addEventListener("click", handleSubmitForm);


function isNumber(str) {
  return !isNaN(str);
}

function handleSubmitForm(event) {
  event.preventDefault(); 

  var zipCodeValue = document.getElementById("zip-code").value;

  if (isNumber(zipCodeValue)) {
    console.log("Zip-code adalah angka:", zipCodeValue);

  } else {
    console.log("Zip-code bukan angka:", zipCodeValue);

    var warningElement = document.getElementById("warning");
    warningElement.textContent = "Zip-code harus berupa angka.";
  }
}

var submitButton = document.getElementById("submit-form");

submitButton.addEventListener("click", handleSubmitForm);


function checkboxIsChecked() {
  var checkbox = document.getElementById("status");

  return checkbox.checked;
}

function handleSubmitForm(event) {
  event.preventDefault(); 
  var isCheckboxChecked = checkboxIsChecked();

  if (isCheckboxChecked) {
    console.log("Checkbox telah dicentang.");

  } else {
    console.log("Checkbox belum dicentang.");

    var warningElement = document.getElementById("warning");
    warningElement.textContent = "Anda harus mencentang checkbox sebelum melanjutkan ini.";
  }
}


var submitButton = document.getElementById("submit-form");


submitButton.addEventListener("click", handleSubmitForm);


function validateFormData(formData) {
    if (formData.name.trim() === "" || 
        formData.email.trim() === "" || 
        formData.city.trim() === "" || 
        !isNumber(formData.zipCode) || 
        !checkboxIsChecked()) {
        return false;
    }
    return true;
}

function submit() {
    const formData = handleGetFormData();
    const warningElement = document.getElementById("warning");

    if (validateFormData(formData)) {
        warningElement.textContent = "";
        
    } else {
        warningElement.textContent = "Periksa form anda sekali lagi";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const submitForm = document.getElementById("submit-form");
    submitForm.addEventListener("click", handleSubmit);

    function handleSubmit(event) {
        event.preventDefault(); 
        submit(); 
    }

    function submit() {

    }
});