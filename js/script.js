
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
const firstField = document.getElementsByTagName('fieldset')[0];
const activitiesField = document.querySelector('.activities');
const creditDiv = document.querySelector('#credit-card');
const payPalDiv = creditDiv.nextElementSibling;
const bitcoinDiv = payPalDiv.nextElementSibling;
const form = document.querySelector('form');
const colorDiv = document.querySelector('#colors-js-puns');
const newEl = document.createElement('div');
const ref = firstField.getElementsByTagName('input')[1];
const yesnoDiv = firstField.appendChild(document.createElement('input'));
const totalDiv = activitiesField.appendChild(document.createElement('div'));

// hiding & creating default objects
const basicSetup = () => {
  form.setAttribute("name","myForm");
  creditDiv.classList.add('active');
  nameInput.focus();
  colorDiv.style.display = 'none';
  yesnoDiv.style.display = 'none';
}

// add email validation after the input field
const insertAfter = (el,referenceNode) => {
  referenceNode.parentNode.insertBefore(el,referenceNode.nextSibling);
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

// setup other job field
const yesnoSetup = () => {
  yesnoDiv.setAttribute("id","other-title");
  yesnoDiv.setAttribute("placeholder","Your Job Role");
  yesnoDiv.style.display = 'block';
}

// run & display other job field
function yesnoCheck() {
  if (this.value == "other") {
    yesnoSetup()
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
  if ( this.value == "credit card" || this.value == "select_method" ) {
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

// check form fields are filled out on submit
form.onsubmit = function validateForm() {
  const userName = document.forms["myForm"]["user_name"].value;
  const cvv = document.querySelector('#cvv');
  const cvvTest = /^\d{3}$/;
  const zip = document.querySelector('#zip');
  const zipTest = /^\d{5}$/;
  const ccNum = document.querySelector('#cc-num');
  const ccNumTest = /^\d{13,16}$/;

  if (userName == "") {
      alert('Name must be filled out');
      nameInput.style.border = "1px solid red";
      return false;
  }
  if (allInput.checked==false && frameworksInput.checked==false &&
      libsInput.checked==false && expressInput.checked==false &&
      nodeInput.checked==false && buildInput.checked==false &&
      npmInput.checked==false) {
  		alert('Please register for at least one activity');
      nameInput.style.border = "none";
      activitiesField.style.background = "rgba(255,0,0,0.1)";
  		return false;
	}
  if (creditDiv.classList.contains('active')) {
    if (ccNum.value.match(ccNumTest)) {} else {
      alert('Card number must contain between 13-16 digits');
      zip.style.border = "none";
      ccNum.style.border = "1px solid red";
      return false;
    }
    if (zip.value.match(zipTest)) {} else {
      alert('Zip must contain 5 digits');
      cvv.style.border = "none";
      zip.style.border = "1px solid red";
      return false;
    }
    if (cvv.value.match(cvvTest)) {} else {
      alert('CVV must contain 3 digits');
      activitiesField.style.background = "transparent";
      cvv.style.border = "1px solid red";
      return false;
    }
    return true;
  }
}

// dynamically check email field is filled out correctly
function validateEmail() {
  const userEmail = document.forms["myForm"]["user_email"].value;
  const atpos = userEmail.indexOf("@");
  const dotpos = userEmail.lastIndexOf(".");

  if (userEmail == "") {
      mailInput.style.border = "1px solid red";
      mailInput.style.marginBottom = "0";
      insertAfter(newEl,ref);
      newEl.style.display = "block";
      newEl.innerHTML = '<p>Please add text</p>';
      return false;
  }
  if (atpos<1 || dotpos<atpos+2 || dotpos+2>=userEmail.length) {
      mailInput.style.border = "1px solid red";
      mailInput.style.marginBottom = "0";
      insertAfter(newEl,ref);
      newEl.style.display = "block";
      newEl.innerHTML = '<p>Please format text</p>';
      return false;
  }
  mailInput.style.border = "none";
  mailInput.style.marginBottom = "1.125em";
  newEl.style.display = "none";
  return true;
  }

basicSetup();
totalSetup();
payReset();

// add listeners to interactive page areas
titleSelect.addEventListener("change", yesnoCheck);
designSelect.addEventListener("change", themeCheck);
activitiesField.addEventListener("change", totalCheck);
paySelect.addEventListener("change", payCheck);
ref.addEventListener("keyup", validateEmail);
