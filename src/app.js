const routes = {
  '/': {
    linkLabel: 'Home',
    content: `Home page`
  },
  '/alerts': {
    linkLabel: 'Alerts',
    content: `Alerts page`
  },
  '/cookie': {
    linkLabel: 'Cookie',
    content: `Cookie page`
  },
  '/hover': {
    linkLabel: 'Hover',
    content: `Hover page`,
  },
  '/interceptor': {
    linkLabel: 'Click intercepted',
    content: `Click intercepted page`,
  },
  '/modal': {
    linkLabel: 'Modal',
    content: `Modal page`,
  },
  '/wait': {
    linkLabel: 'Wait',
    content: `Wait page`,
  },
};


const app = document.querySelector('#app');
const nav = document.querySelector('#nav');

const renderNavLinks = () => {
  const navFragment = document.createDocumentFragment();
  Object.keys(routes).forEach(route => {
    const { linkLabel } = routes[route];

    const linkElement = document.createElement('a')
    linkElement.href = route;
    linkElement.textContent = linkLabel;
    navFragment.appendChild(linkElement);
  });

  nav.prepend(navFragment);
};

const registerNavLinks = () => {
  nav.addEventListener('click', (e) => {
    e.preventDefault();
    const { href } = e.target;
    history.pushState({}, "", href);
    navigate(e); // pending implementation
  });
};

const renderContent = route => app.innerHTML = routes[route].content;

const navigate = e => {
    const route = e.target.pathname;
    // this is responsible for adding the new path name to the history stack
    history.pushState({}, "", route);
    renderContent(route);
};

const registerBrowserBackAndForth = () => {
  window.onpopstate = function (e) {
    const route = location.pathname;
    renderContent(route);
  };
};

const renderInitialPage = () => {
  const route = location.pathname;
  renderContent(route);
};

(function () {
  renderNavLinks();
  registerNavLinks();
  registerBrowserBackAndForth();
  renderInitialPage();
})();