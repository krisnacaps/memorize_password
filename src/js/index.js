// Input elements
const inputPass = document.getElementById('inputText');
const testPass = document.getElementById('checkPass');
const checkBox = document.getElementById('checkBox');

// Button elements
const setAct = document.getElementById('setPass');
const rstAct = document.getElementById('resetPass');

// Log elements
const logInfo = document.getElementById('log');
const popup = document.querySelector('#popup');
const textBox = document.querySelector('.box__body');

let savedPass = "";

// Function to show popup notification
function showPopup() {
  popup.classList.toggle('pop');

  if (popup.classList.contains('pop')) {
    setTimeout(() => popup.classList.remove('pop'), 2000);
  }
}

// Function to add a new log element
function addLogElement(message) {
    const logElement = document.querySelector('.feature')
    const p = document.createElement('p');
    p.textContent = message;
    const log = logInfo.appendChild(p);
    logElement.prepend(log);
  }

 // Function to show popup notification and add log element
function showPopupWithLog(message) {
    addLogElement(message);
    // showPopup();
  }

// Function to display a message in the text box
function displayMessage(message) {
  textBox.innerHTML = message;
}

// Function to check if the user has set a password
function isUserSetPassword() {
  return savedPass !== "";
}

// Function for user to set a password
function userSetPass() {
  if (savedPass !== "" || inputPass.value !== "") {
    savedPass = inputPass.value;
    displayMessage("Password saved");
    inputPass.value = "";
    testPass.focus();
    // showPopupWithLog("Password saved");
  } else if (inputPass.value === "") {
    displayMessage("Input password empty");
  } else {
    displayMessage("Password already set");
  }
  showPopup();
}

// Function to reset the password
function resetPassword() {
  showPopup();
  if (savedPass === "") {
      displayMessage("Password isn't set");
    } else {
        savedPass = "";
    inputPass.value = "";
    testPass.value = "";
    displayMessage("Password reset");
    showPopupWithLog("Password reseted ");
  }
}

// Function to test the typed password
function testType() {
    const v = testPass.value;
    if (v === savedPass && v !== "") {
    // displayMessage("Correct Password");
    showPopupWithLog("Correct Password entered");
    testPass.value = "";
  } else if (v === "" || savedPass == "") {
      showPopup();
      displayMessage("Password isn't set");
    } else {
        // displayMessage("Wrong Password");
        showPopupWithLog("Wrong Password entered");
    }
}

// Function to toggle password visibility
function togglePasswordVisibility() {
  if (testPass.type === "password") {
    testPass.type = "text";
  } else {
    testPass.type = "password";
  }
}

// Event listeners
testPass.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    testType();
  }
});

setAct.addEventListener('click', userSetPass);
rstAct.addEventListener('click', resetPassword);
checkBox.addEventListener('click', togglePasswordVisibility);
