let button = document.querySelector('.random-btn');
let span = document.querySelector('.random-span');
let firstInput = document.querySelector('.first-value');
let secondInput = document.querySelector('.second-value');
let paragraph = document.querySelector('.random-num');
let number;

function randomNumber() {
	button.addEventListener('click', () => {
		const first = parseInt(firstInput.value);
		const second = parseInt(secondInput.value);

		if (isNaN(first) || isNaN(second)) {
			span.innerHTML = 'Заполните поля!';
		} else if (first >= second) {
			span.innerHTML = 'Первое число должно быть меньше второго числа!';
		} else if (second == first) {
			span.innerHTML = 'Второе число должно быть больше первого!';
		} else if (second < 0 || first < 0) {
			span.innerHTML = 'Числа не могут быть отрицательными!';
		} else if (first == '') {
     span.innerHTML = 'В полях должны быть только цифры';
} else {
			number = Math.floor(Math.random() * (second - first + 1) + first);
			console.log(number);
			paragraph.innerHTML = 'Ваше число:';
			span.innerHTML = `${number}`;
		}

	});
}

randomNumber();

