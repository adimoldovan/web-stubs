import { getHeader } from './header';
import { getFooter } from './footer';
import {
	home,
	alerts,
	cookie,
	hover,
	interceptor,
	modal,
	wait,
	login,
	signup,
	signout
} from './pages';

const routes = {
	'/': {
		content: home
	},
	alerts: {
		linkLabel: 'Alerts',
		content: alerts
	},
	cookie: {
		linkLabel: 'Cookie',
		content: cookie
	},
	hover: {
		linkLabel: 'Hover',
		content: hover
	},
	interceptor: {
		linkLabel: 'Click intercepted',
		content: interceptor
	},
	modal: {
		linkLabel: 'Modal',
		content: modal
	},
	wait: {
		linkLabel: 'Wait',
		content: wait
	},
	login: {
		content: login
	},
	signup: {
		linkLabel: 'Sign up',
		content: signup
	},
	signout: {
		content: signout
	}
};
const main = document.createElement('main');

const parsePageParameter = () => {
	const urlParams = new URLSearchParams(window.location.search);
	const route = urlParams.get('page') || '/';
	console.log(`route: ${route}`);
	return route;
};

const renderMainContent = (route) => {
	const page = route === '/' ? '/' : route.replace('?page=', '');
	console.log(`page: ${page}`);
	if (routes[page]) {
		console.log(`rendering page: ${page}`);
		main.innerHTML = '';
		main.appendChild(routes[page]['content']());
	} else {
		console.log(`page not found: ${page}`);
		main.textContent = 'Page not found';
	}
};

document.body.appendChild(getHeader(routes));
document.body.appendChild(main);
document.body.appendChild(getFooter());

renderMainContent(parsePageParameter());
