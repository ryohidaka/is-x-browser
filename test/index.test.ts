import { afterEach, beforeEach, describe, expect, it, mock } from 'bun:test'
import isXBrowser from '../src'

describe('isXBrowser', () => {
	const originalNavigator = global.navigator
	const originalDocument = global.document
	const consoleErrorMock = mock()

	beforeEach(() => {
		global.console.error = consoleErrorMock
		consoleErrorMock.mockClear()
	})

	afterEach(() => {
		Object.defineProperty(global, 'navigator', {
			value: originalNavigator,
			writable: true,
		})
		Object.defineProperty(global, 'document', {
			value: originalDocument,
			writable: true,
		})
	})

	it('should return true for X iPhone user agent', () => {
		Object.defineProperty(global, 'navigator', {
			value: { userAgent: 'Twitter for iPhone' },
			writable: true,
		})
		Object.defineProperty(global, 'document', {
			value: { referrer: '' },
			writable: true,
		})
		expect(isXBrowser()).toBe(true)
	})

	it('should return true for referrer from t.co', () => {
		Object.defineProperty(global, 'navigator', {
			value: { userAgent: 'Mozilla/5.0' },
			writable: true,
		})
		Object.defineProperty(global, 'document', {
			value: { referrer: 'https://t.co/abc' },
			writable: true,
		})
		expect(isXBrowser()).toBe(true)
	})

	it('should return false for normal browser', () => {
		Object.defineProperty(global, 'navigator', {
			value: { userAgent: 'Mozilla/5.0 Chrome' },
			writable: true,
		})
		Object.defineProperty(global, 'document', {
			value: { referrer: 'https://example.com' },
			writable: true,
		})
		expect(isXBrowser()).toBe(false)
	})

	it('should handle missing navigator or document', () => {
		Object.defineProperty(globalThis, 'navigator', {
			value: undefined,
			writable: true,
		})
		Object.defineProperty(globalThis, 'document', {
			value: { referrer: '' },
			writable: true,
		})
		expect(isXBrowser()).toBe(false)
		expect(consoleErrorMock).toHaveBeenCalled()
	})

	it('should return false and log error on thrown exception', () => {
		Object.defineProperty(global, 'navigator', {
			get() {
				throw new Error('Unexpected error')
			},
		})
		Object.defineProperty(global, 'document', {
			value: { referrer: '' },
			writable: true,
		})
		expect(isXBrowser()).toBe(false)
		expect(consoleErrorMock).toHaveBeenCalled()
	})
})
