import './wait.css';

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
	const container = document.createElement('div');

	const title = document.createElement('h1');
	title.textContent = 'Wait';
	container.appendChild(title);

	const row = document.createElement('div');
	row.classList.add('row');
	container.appendChild(row);

	const col = document.createElement('div');
	col.classList.add('col');
	row.appendChild(col);

	const answerParagraph = document.createElement('p');
	answerParagraph.classList.add('answer');
	col.appendChild(answerParagraph);

	const button = document.createElement('button');
	button.id = 'answer-trigger';
	button.textContent = 'Give me the Answer';
	button.addEventListener('click', async () => {
		answerParagraph.textContent = 'Calculating...';
		button.classList.add('hidden');
		answerParagraph.textContent = await calculateTheAnswer();
		button.classList.remove('hidden');
	});
	col.appendChild(button);

	return container;
}
