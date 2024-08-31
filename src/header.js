import './style.css';
import icons from './icons';
import { getBaseUrl } from './utils/utils';

export function getHeader(routes) {
  const header = document.createElement('header');

  const link = document.createElement('a');
  link.href = getBaseUrl();

  const img = document.createElement('img');
  img.src = icons['puzzle.svg'];
  img.alt = 'puzzle';
  img.classList.add('logo');

  link.appendChild(img);
  header.appendChild(link);
  header.appendChild(getNav(routes));
  return header;
}

function getNav(routes) {
	const navFragment = document.createElement('div');
	navFragment.classList.add('nav-bar');
	Object.keys(routes).forEach((route) => {
		const { linkLabel } = routes[route];

		if (!linkLabel) {
			return;
		}

		route = route === '/' ? '/' : `?page=${route}`;
		const linkElement = document.createElement('a');
		linkElement.href = route;
		linkElement.textContent = linkLabel;
		linkElement.classList.add('nav-link');
		navFragment.appendChild(linkElement);
	});

	return navFragment;
}
