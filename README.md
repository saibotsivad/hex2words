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

## api

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

## license

Everything in this repository is released under the [VOL](http://veryopenlicense.com/).

<3
