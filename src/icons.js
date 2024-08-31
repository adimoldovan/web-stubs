const r = require.context('./assets/icons', false, /\.(png|jpe?g|svg)$/);
const icons = {};
// eslint-disable-next-line array-callback-return
r.keys().map((item) => {
	icons[item.replace('./', '')] = r(item);
});

export default icons;
