# is-x-browser

[![CI](https://github.com/ryohidaka/is-x-browser/actions/workflows/ci.yml/badge.svg)](https://github.com/ryohidaka/is-x-browser/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

JavaScript library to detect if it's an X In-app browser

## Installation

```bash
npm i is-x-browser
```

## Usage

```typescript
import isXBrowser from 'is-x-browser';

if (isXBrowser()) {
	console.log('Inside X browser');
} else {
	console.log('Regular browser');
}
```

## Demo

* [Demo](https://ryohidaka.github.io/is-x-browser/)

| iOS App                                      | Android App                                      | Browser                                     |
| -------------------------------------------- | ------------------------------------------------ | ------------------------------------------- |
| <img src="./images/ios-app.jpg" width=500 /> | <img src="./images/android-app.png" width=500 /> | <img src="./images/normal.png" width=500 /> |

## Contributing

Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.

## License

MIT
