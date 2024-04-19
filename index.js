/**
 * @param {string} src
 */
function inject(src) {
	const iframe = document.createElement('iframe');

	iframe.src = src;
	document.body.appendChild(iframe);
	iframe.style.width = '1px';
	iframe.style.height = '1px';
	iframe.style.position = 'fixed';
	iframe.style.left = '-1px';

	return iframe;
}

/**
 * @param {HTMLIFrameElement} iframe
 */
function eject(iframe) {
	document.body.removeChild(iframe);
}

/**
 * @param {string} link
 * @param {number=} timeout
 */
export function tryDeepLink(link, timeout = 200) {
	return new Promise(((resolve, reject) => {
		const iframe = inject(link);
		const wait = setTimeout(() => {
			window.removeEventListener('blur', onBlur);
			eject(iframe);
			reject(Error(`Can't open ${link}`));
		}, timeout);

		function onBlur() {
			window.removeEventListener('blur', onBlur);
			clearTimeout(wait);
			eject(iframe);
			resolve();
		}

		window.addEventListener('blur', onBlur);
	}));
}
