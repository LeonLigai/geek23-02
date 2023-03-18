const circleCenterX = 200; // координата X центра круга
const circleCenterY = 200; // координата Y центра круга
const circleRadius = 150; // радиус круга

let blockX = 0; // начальная координата X блока
let blockY = 0; // начальная координата Y блока
const blockWidth = 50; // ширина блока
const blockHeight = 50; // высота блока
const angleStep = 5; // шаг изменения угла при каждом шаге анимации

function moveBlock(angle) {
  // вычисляем новые координаты блока на основе текущего угла
  const x = circleCenterX + circleRadius * Math.cos(angle * Math.PI / 180) - blockWidth / 2;
  const y = circleCenterY + circleRadius * Math.sin(angle * Math.PI / 180) - blockHeight / 2;

  // перемещаем блок на новые координаты
  const block = document.getElementById("block");
  block.style.left = x + "px";
  block.style.top = y + "px";

  // если блок достиг границы круга, возвращаем его в исходное положение и начинаем анимацию заново
  if (angle >= 360) {
    blockX = circleCenterX - blockWidth / 2;
    blockY = circleCenterY - blockHeight / 2;
    angle = 0;
  }

  // вызываем эту же функцию снова через заданный интервал времени
  setTimeout(() => moveBlock(angle + angleStep), 50);
}

moveBlock(0); // запускаем анимацию
