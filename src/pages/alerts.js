const buttons = [
	{
		id: 'alert-trigger',
		onclick: showAlert,
		text: 'Open alert'
	},
	{
		id: 'confirm-trigger',
		onclick: showConfirm,
		text: 'Open confirmation dialog'
	},
	{
		id: 'prompt-trigger',
		onclick: showPrompt,
		text: 'Open prompt dialog'
	}
];

function showAlert() {
	window.alert(
		'Hello! I am an Javascript alert!\nYou cannot interact with the page unless you dismiss me'
	);
}

function showConfirm() {
	window.confirm(
		'Hello! I am an Javascript confirmation dialog!\nYou cannot interact with the page unless you dismiss me'
	);
}

function showPrompt() {
	window.prompt(
		'Hello! I am an Javascript prompt dialog!\nYou cannot interact with the page unless you dismiss me'
	);
}

export default function alerts() {
	const container = document.createElement('div');
	const title = document.createElement('h1');
	title.textContent = 'Alerts';
	container.appendChild(title);
	for (const button of buttons) {
		const buttonElement = document.createElement('button');
		buttonElement.id = button.id;
		buttonElement.textContent = button.text;
		buttonElement.addEventListener('click', button.onclick);
		container.appendChild(buttonElement);
	}
	return container;
}
