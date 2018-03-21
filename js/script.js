
const nameInput = document.querySelector('#name');
const mailInput = document.querySelector('#mail');
const allInput = document.querySelector('input[name="all"]');
const frameworksInput = document.querySelector('input[name="js-frameworks"]');
const libsInput = document.querySelector('input[name="js-libs"]');
const expressInput = document.querySelector('input[name="express"]');
const nodeInput = document.querySelector('input[name="node"]');
const buildInput = document.querySelector('input[name="build-tools"]');
const npmInput = document.querySelector('input[name="npm"]');
const titleSelect = document.querySelector('#title');
const designSelect = document.querySelector('#design');
const colorSelect = document.querySelector('#color');
const paySelect = document.querySelector('#payment');
const expSelect = document.querySelector('#exp-year');
const firstField = document.getElementsByTagName('fieldset')[0];
const activField = document.querySelector('.activities');
const creditDiv = document.querySelector('#credit-card');
const payPalDiv = creditDiv.nextElementSibling;
const bitcoinDiv = payPalDiv.nextElementSibling;
const form = document.querySelector('form');
const colorDiv = document.querySelector('#colors-js-puns');
const yesnoDiv = document.querySelector('#other-title');
const totalDiv = activField.appendChild(document.createElement('div'));

const cvv = document.querySelector('#cvv');
const cvvTest = /^\d{3}$/;
const zip = document.querySelector('#zip');
const zipTest = /^\d{5}$/;
const ccNum = document.querySelector('#cc-num');
const ccNumTest = /^\d{13,16}$/;

const userError = document.createElement('div');
const mailError = document.createElement('div');
const activError = document.createElement('div');
const ccNumError = document.createElement('div');
const zipError = document.createElement('div');
const cvvError = document.createElement('div');

let userEroMsg = "";
let mailEroMsg = "";
let activEroMsg = "";
let ccNumEroMsg = "";
let zipEroMsg = "";
let cvvEroMsg = "";

// hiding & creating default objects
const basicSetup = () => {
  form.setAttribute("name","myForm");
  creditDiv.classList.add('active');
  nameInput.focus();
  colorDiv.style.display = 'none';
  yesnoDiv.style.display = 'none';
  insertAfter(userError,nameInput);
  insertAfter(mailError,mailInput);
  insertAfter(activError,activField);
  insertAfter(cvvError,expSelect);
  insertAfter(zipError,expSelect);
  insertAfter(ccNumError,expSelect);
}

// add email validation after the input field
const insertAfter = (el,refNode) => {
  refNode.parentNode.insertBefore(el,refNode.nextSibling);
}

// display 'pun' options
const punFilter = () => {
  colorSelect.options.length = 0;
  colorSelect.options[colorSelect.options.length] = new Option('Cornflower Blue (JS Puns shirt only)', 'cornflowerblue');
  colorSelect.options[colorSelect.options.length] = new Option('Dark Slate Grey (JS Puns shirt only)', 'darkslategrey');
  colorSelect.options[colorSelect.options.length] = new Option('Gold (JS Puns shirt only)', 'gold');
}

// display 'I heart js' options
const shirtFilter = () => {
  colorSelect.options.length = 0;
  colorSelect.options[colorSelect.options.length] = new Option(`Tomato (I \u2665 JS shirt only)`, 'tomato');
  colorSelect.options[colorSelect.options.length] = new Option('Steel Blue (I \u2665 JS shirt only)', 'steelblue');
  colorSelect.options[colorSelect.options.length] = new Option('Dim Grey (I \u2665 JS shirt only)', 'dimgrey');
}

// display all tshirt options
const resetFilter = () => {
  colorSelect.options.length = 0;
  colorSelect.options[colorSelect.options.length] = new Option('Cornflower Blue (JS Puns shirt only)', 'cornflowerblue');
  colorSelect.options[colorSelect.options.length] = new Option('Dark Slate Grey (JS Puns shirt only)', 'darkslategrey');
  colorSelect.options[colorSelect.options.length] = new Option('Gold (JS Puns shirt only)', 'gold');
  colorSelect.options[colorSelect.options.length] = new Option('Tomato (I \u2665 JS shirt only)', 'tomato');
  colorSelect.options[colorSelect.options.length] = new Option('Steel Blue (I \u2665 JS shirt only)', 'steelblue');
  colorSelect.options[colorSelect.options.length] = new Option('Dim Grey (I \u2665 JS shirt only)', 'dimgrey');
}

// setup total field
const totalSetup = () => {
  totalDiv.setAttribute("id","total");
  totalDiv.innerHTML = `Total price = $0`;
}

// calculate total dynamically
const totalCalc = sum => {
  totalDiv.innerHTML = `Total price = $${sum}`;
}

// run & display other job field
function yesnoCheck() {
  if (this.value == "other") {
    yesnoDiv.style.display = 'block';
  } else {
    yesnoDiv.style.display = 'none';
  }
}

// switch visibility on tshirt sub visibility
function themeCheck() {
  if (this.value == "js puns") {
    punFilter()
    colorDiv.style.display = 'block';
  } else if (this.value == "heart js") {
    shirtFilter()
    colorDiv.style.display = 'block';
  } else {
    resetFilter()
    colorDiv.style.display = 'none';
  }
}

// switch off classes on payment subs
const payReset = () => {
  creditDiv.style.display = "none";
  creditDiv.classList.remove('active');
  payPalDiv.style.display = "none";
  payPalDiv.classList.remove('active');
  bitcoinDiv.style.display = "none";
  bitcoinDiv.classList.remove('active');
}

// reset & add classes on payment sub selection
function payCheck() {
  payReset();
  if ( this.value == "credit card" ) {
    creditDiv.style.display = "block";
    creditDiv.classList.add('active');
  } else if ( this.value == "paypal" ) {
    payPalDiv.style.display = "block";
    payPalDiv.classList.add('active');
  } else if ( this.value == "bitcoin" ) {
    bitcoinDiv.style.display = "block";
    bitcoinDiv.classList.add('active');
  }
}

// setup activity checkbox reset
const inputReset = () => {
  frameworksInput.disabled = false;
  frameworksInput.parentNode.style.color = "black";
  libsInput.disabled = false;
  libsInput.parentNode.style.color = "black";
  expressInput.disabled = false;
  expressInput.parentNode.style.color = "black";
  nodeInput.disabled = false;
  nodeInput.parentNode.style.color = "black";
  buildInput.disabled = false;
  npmInput.disabled = false;
}

// reset, display & calculate available activities
const totalCheck = () => {
  inputReset();
  let total = 0;

  if ( allInput.checked ) {
    total += 200
  }
  if ( frameworksInput.checked ) {
    total += 100
    expressInput.disabled = true;
    expressInput.parentNode.style.color = "#679cb3";
  }
  if ( libsInput.checked ) {
    total += 100
    nodeInput.disabled = true;
    nodeInput.parentNode.style.color = "#679cb3";
  }
  if ( expressInput.checked ) {
    total += 100
    frameworksInput.disabled = true;
    frameworksInput.parentNode.style.color = "#679cb3";
  }
  if ( nodeInput.checked ) {
    total += 100
    libsInput.disabled = true;
    libsInput.parentNode.style.color = "#679cb3";
  }
  if ( buildInput.checked ) {
    total += 100
  }
  if ( npmInput.checked ) {
    total += 100
  }
  totalCalc(total);
}

// check form fields are filled out on submit, reject form if any error messages are logged
form.onsubmit = function validateForm() {
  const userName = document.forms["myForm"]["user_name"];
  const userEmail = document.forms["myForm"]["user_email"];

  if (userName.value == ""){
      userEroMsg = `Please enter your name`;
      userError.innerHTML = `${userEroMsg}`;
      userError.style.marginBottom = '20px';
      userError.style.color = 'darkRed';
  }
  if (userEmail.value == "") {
      mailEroMsg = `Please enter your email`;
      mailError.innerHTML = `${mailEroMsg}`;
      mailError.style.marginBottom = '20px';
      mailError.style.color = 'darkred';
  }
  if (allInput.checked==false && frameworksInput.checked==false &&
      libsInput.checked==false && expressInput.checked==false &&
      nodeInput.checked==false && buildInput.checked==false &&
      npmInput.checked==false) {
      activEroMsg = `Please register for at least one activity`;
      activError.innerHTML = `${activEroMsg}`;
      activError.style.marginTop = '20px';
      activError.style.marginLeft = '2px';
      activError.style.color = 'darkRed';
  }
  if (creditDiv.classList.contains('active')) {
    if (ccNum.value.match(ccNumTest)) {} else {
      ccNumEroMsg = `Card number must contain between 13-16 digits`;
      ccNumError.innerHTML = `${ccNumEroMsg}`;
      ccNumError.style.marginTop = '10px';
      ccNumError.style.color = 'darkRed';
    }
    if (zip.value.match(zipTest)) {} else {
      zipEroMsg = `Zip must contain 5 digits`;
      zipError.innerHTML = `${zipEroMsg}`;
      zipError.style.marginTop = '10px';
      zipError.style.color = 'darkRed';
    }
    if (cvv.value.match(cvvTest)) {} else {
      cvvEroMsg = `CVV must contain 3 digits`;
      cvvError.innerHTML = `${cvvEroMsg}`;
      cvvError.style.marginTop = '10px';
      cvvError.style.color = 'darkRed';
    }
  }
  if (userEroMsg != "" || mailEroMsg != "" || activEroMsg != "" || ccNumEroMsg != "" || zipEroMsg != "" || cvvEroMsg != ""){
    return false;
  }
return true;
}

// dynamically check email field is filled out correctly
function validateEmail() {
  const userEmail = document.forms["myForm"]["user_email"].value;
  const atpos = userEmail.indexOf("@");
  const dotpos = userEmail.lastIndexOf(".");

  if (userEmail == "") {
      mailError.style.marginBottom = '20px';
      mailError.style.color = 'darkred';
      mailError.innerHTML = `Please enter your email`;
      return false;
  }
  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
      mailError.style.marginBottom = '20px';
      mailError.style.color = 'darkred';
      mailError.innerHTML = `Please format your email`;
      return false;
  }
return true;
}

basicSetup();
totalSetup();
payReset();

// add listeners to interactive page areas
titleSelect.addEventListener("change",yesnoCheck);
designSelect.addEventListener("change",themeCheck);
activField.addEventListener("change",totalCheck);
paySelect.addEventListener("change",payCheck);
mailInput.addEventListener("keyup",validateEmail);
