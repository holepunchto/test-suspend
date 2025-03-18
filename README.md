# test-suspend

Utilities for testing process suspension.

```
npm i test-suspend
```

## Usage

```js
const suspend = require('test-suspend')

const s = await suspend()
console.log('suspended')

await s.idle()
console.log('became idle')

await s.resume()
console.log('resumed')
```

## License

Apache-2.0
