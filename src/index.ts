/**
 * Detect X (Twitter) in-app browser.
 *
 * Checks `navigator.userAgent` and `document.referrer`.
 *
 * @returns {boolean} Return `true` if inside X WebView, otherwise `false`.
 *
 * @example
 * ```ts
 * import isXBrowser from 'is-x-browser'
 *
 * if (isXBrowser()) {
 *   console.log('Inside X browser')
 * } else {
 *   console.log('Regular browser')
 * }
 * ```
 */
export default function isXBrowser(): boolean {
	try {
		if (typeof navigator === 'undefined' || typeof document === 'undefined') {
			console.error('navigator or document is not defined.')
			return false
		}

		const ua = navigator.userAgent
		const referer = document.referrer.toLowerCase()

		const isUAWithX = /Twitter for i(Phone|Pad)|TwitterAndroid/i.test(ua)
		const isRefererFromX = referer.includes('t.co')

		return isUAWithX || isRefererFromX
	} catch (err) {
		console.error('Error occurred while detecting X browser.', err)
		return false
	}
}
