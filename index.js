let button = document.querySelector('.random-btn');
let span = document.querySelector('.random-span');
let firstInput = document.querySelector('.first-value');
let secondInput = document.querySelector('.second-value');
let number;

function randomNumber() {
  button.addEventListener('click', () => {
    const first = parseInt(firstInput.value);
    const second = parseInt(secondInput.value);

    if (isNaN(first) || isNaN(second)) {
      span.innerHTML = 'Заполните поля!';
    } else if (first >= second) {
      span.innerHTML = 'Первое число должно быть меньше второго числа!';
    } else {
      number = Math.floor(Math.random() * (second - first + 1) + first);
      console.log(number);
      span.innerHTML = `${number}`;
    }
  });
}

randomNumber();

