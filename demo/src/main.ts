import isXBrowser from '../../src'

window.addEventListener('DOMContentLoaded', () => {
	const resultEl = document.querySelector<HTMLDivElement>('#app')
	if (!resultEl) return

	const result = isXBrowser()

	resultEl.textContent = result
		? '✅ You are using the X (Twitter) in-app browser.'
		: '❌ You are NOT using the X browser.'

	resultEl.classList.add(result ? 'true' : 'false')

	console.log('navigator.userAgent:', navigator.userAgent)
	console.log('document.referrer:', document.referrer)
})
