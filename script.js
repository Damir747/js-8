import { keks } from './keks.js';
console.log(keks);


const getSome = (nickname) => () => {
	console.log(`Здравствуй, ${nickname}`);

}

const getSomething = (nickname) => () => {
	console.log(`Привет, ${nickname}`);

}

const buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', getSome("Дамир"));

for (var i = 0; i <= 10; i++) {
	setTimeout(function (innerI) {
		return function () {
			console.log(innerI);
		}
	}(i), 1000);

}


