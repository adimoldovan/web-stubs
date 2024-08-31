import { logout } from '../utils/utils';

export default function signout() {
	logout();
	return document.createElement('div');
}
