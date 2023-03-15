// Задание 1

const emailInput = document.querySelector(".emailInput");
const emailCheck = document.querySelector(".emailCheck");
const emailResult = document.querySelector(".emailResult");


const regExp = /^[\w][\w-.]*@[\w-]+\.[a-z]{2,4}$/i;
emailCheck.addEventListener("click", () => {
  if (regExp.test(emailInput.value)) {
    emailResult.innerText = "Адрес введен верно!";
    emailResult.style.color = "green";
  } else {
      emailResult.innerText = "Адрес введен не верно!";
    emailResult.style.color = "red";
  }
});


//Задание 2

let position = 0;
function recursionBox (){
    position ++;
    if (position > 400) return;
    document.querySelector(".box").style.left = position + "px";
    animation();
}
function animation (){
    setTimeout(recursionBox, 100);
}

animation();


