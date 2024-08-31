import './interceptor.css';
import { getDefaultContainer } from '../utils/utils';

export default function interceptor() {
	const container = getDefaultContainer('Click intercepted');

	const content = document.createElement('div');
	content.classList.add('interceptor-content');
	container.appendChild(content);

	const label = document.createElement('label');
	content.appendChild(label);

	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	checkbox.id = 'the_checkbox';
	label.appendChild(checkbox);

	const span = document.createElement('span');
	span.classList.add('off');
	span.textContent = 'A checkbox waiting to be checked';
	label.appendChild(span);

	return container;
}
