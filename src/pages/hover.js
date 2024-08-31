import './hover.css';
import { getDefaultContainer } from '../utils/utils';

export default function main() {
	const container = getDefaultContainer('Hover');

	const result = document.createElement('p');
	result.id = 'result';
	result.innerHTML = `<span class='clicked'></span>`;
	container.appendChild(result);

	const row = document.createElement('div');
	row.classList.add('dropdown');
	container.appendChild(row);

	const button = document.createElement('button');
	button.textContent = 'Hover me';
	row.classList.add('actionBtn');
	row.appendChild(button);

	const dropdownContent = document.createElement('div');
	dropdownContent.classList.add('dropdown-content');
	row.appendChild(dropdownContent);

	const animals = ['Dog', 'Bird', 'Cat', 'Mouse', 'Horse'];
	let clicked;

	function handleClick(e) {
		clicked = `${e.target.id}`;
		result.innerHTML = `You last clicked the <span class='clicked'>${clicked}</span>`;
	}

	animals.forEach((animal) => {
		const animalDiv = document.createElement('div');
		animalDiv.id = animal;
		animalDiv.textContent = animal;
		animalDiv.addEventListener('click', handleClick);
		dropdownContent.appendChild(animalDiv);
	});

	return container;
}
