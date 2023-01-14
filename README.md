# another-http-status

another-http-status is a module I created to simplify handling STATUS codes.

## Installation

```
npm install another-http-status
```

## Usage

CommonJS:
```javascript
const { OK } = require('http-status');

console.log(String(OK), typeof String(OK), Number(OK), typeof Number(OK));
// OK string 200 number
```

ES6 Module:
```javascript
import { OK } from 'http-status';

console.log(String(OK), typeof String(OK), Number(OK), typeof Number(OK));
// OK string 200 number
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
