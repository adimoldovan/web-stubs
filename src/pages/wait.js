import './wait.css';
import { getDefaultContainer } from '../utils/utils';

function calculateTheAnswer() {
	return new Promise((resolve) => {
		let aWhile = Math.floor(Math.random() * 9000) + 3000;
		console.log(`Waiting for ${aWhile}ms`);
		setTimeout(() => {
			resolve('42');
		}, aWhile);
	});
}

export default function wait() {
	const container = getDefaultContainer('Wait');

	const answerParagraph = document.createElement('p');
	answerParagraph.classList.add('answer');
	container.appendChild(answerParagraph);

	const button = document.createElement('button');
	button.id = 'answer-trigger';
	button.textContent = 'Give me the Answer';
	button.addEventListener('click', async () => {
		answerParagraph.textContent = 'Calculating...';
		button.classList.add('hidden');
		answerParagraph.textContent = await calculateTheAnswer();
		button.classList.remove('hidden');
	});
	container.appendChild(button);

	return container;
}
