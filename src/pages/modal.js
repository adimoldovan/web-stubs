import './modal.css';
import { getDefaultContainer } from '../utils/utils';

export default function modal() {
	const container = getDefaultContainer('Modal');

	const modalContainer = document.createElement('div');
	container.appendChild(modalContainer);

	const openButton = document.createElement('button');
	openButton.textContent = 'Open Modal';
	modalContainer.appendChild(openButton);

	const modalDiv = document.createElement('div');
	modalDiv.classList.add('modal');
	modalContainer.appendChild(modalDiv);

	const modalContent = document.createElement('div');
	modalContent.classList.add('modal-content');
	modalDiv.appendChild(modalContent);

	const modalHeader = document.createElement('div');
	modalHeader.classList.add('modal-header');
	modalHeader.textContent = 'Click interceptor';
	modalContent.appendChild(modalHeader);

	const closeButton = document.createElement('span');
	closeButton.classList.add('close');
	closeButton.textContent = '×';
	modalHeader.appendChild(closeButton);

	const modalBody = document.createElement('div');
	modalBody.classList.add('modal-body');
	modalBody.textContent = "I'm stealing the click action for any element rendered behind me";
	modalContent.appendChild(modalBody);

	const modalFooter = document.createElement('div');
	modalFooter.classList.add('modal-footer');
	modalContent.appendChild(modalFooter);

	const cancelButton = document.createElement('button');
	cancelButton.classList.add('neutral');
	cancelButton.textContent = 'Cancel';
	modalFooter.appendChild(cancelButton);

	openButton.addEventListener('click', () => {
		modalDiv.style.display = 'block';
	});

	closeButton.addEventListener('click', () => {
		modalDiv.style.display = 'none';
	});

	cancelButton.addEventListener('click', () => {
		modalDiv.style.display = 'none';
	});

	window.addEventListener('click', (event) => {
		if (event.target === modalDiv) {
			modalDiv.style.display = 'none';
		}
	});

	return container;
}
