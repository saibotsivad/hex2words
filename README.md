# hex2words [![Build Status](https://travis-ci.org/tobiaslabs/hex2words.svg?branch=master)](https://travis-ci.org/tobiaslabs/hex2words)

[![NPM](https://nodei.co/npm/hex2words.png)](https://nodei.co/npm/hex2words/)

Given a string of hex values, a PGP thumbprint or SHA
hash for example, return an array of PGP words.

```javascript
var words = parse('E582')
```

Will return:

```javascript
  [
    'topmost',
    'Istanbul'
  ]
```

## API

### `words = parse(input)`
Parses either a hex input string, or `Buffer`, and returns an
array of PGP words.

#### input
A hex formatted string or a `Buffer`.

```javascript
// these are identical
var words = parse('E582')
var words = parse(new Buffer('E582', 'hex'))
var words = parse(new Buffer([ 229, 130 ]))
```

## Tests

```sh
$ npm test
```

## License

[Very Open License (VOL)](http://veryopenlicense.com/)

> The contributor(s) to this creative work voluntarily grant permission
> to any individual(s) or entities of any kind
> - to use the creative work in any manner,
> - to modify the creative work without restriction,
> - to sell the creative work or derivatives thereof for profit, and
> - to release modifications of the creative work in part or whole under any license
> with no requirement for compensation or recognition of any kind.
