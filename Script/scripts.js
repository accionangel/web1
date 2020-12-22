// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/cat-253662_1920.jpng') {
    myImage.setAttribute ('src','images/cat-551554_1920.jpng');
  } else {
    myImage.setAttribute ('src','images/cat-253662_1920.jpng');
  }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Por favor escribe tu nombre');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mi gatito es increíble, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mi gatito es increíble, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}