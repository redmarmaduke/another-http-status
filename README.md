# http-status

http-status is a module I created to use in all my express/RESTful apps.

## Installation

git has support for submodules.

```bash
git submodule add http://www.github.com/redmarmaduke/http-status
```

## Usage

```javascript
const { OK } = require('http-status');

OK.valueOf(); // returns 200
OK.toString(); // returns "OK"


```

## License
[MIT](https://choosealicense.com/licenses/mit/)