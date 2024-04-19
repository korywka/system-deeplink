import { tryDeepLink } from '../index.js';

const links = Array.from(document.querySelectorAll('#existing-app, #not-existing-app'));

links.forEach((link) => {
	link.addEventListener('click', async (event) => {
		event.preventDefault();
		try {
			await tryDeepLink(event.target.href);
			alert('installed');
		} catch (error) {
			alert('not installed');
		}
	});
});
