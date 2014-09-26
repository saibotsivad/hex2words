hex2words
==================

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

### `parse(input, cb)`
Parses either a hex input string, or `Buffer`, and returns an
array of PGP words. If `cb` is ommitted `parse` returns
immediately.

#### input
A hex formatted string or a `Buffer`.

```javascript
// these are identical
var words = parse('E582')
var words = parse(new Buffer('E582', 'hex'))
var words = parse(new Buffer([ 229, 130 ]))
```

#### cb
An optional callback of the form `function (err, output) {}`
invoked when the decoding is complete.

## Tests

```sh
$ npm test
```

## License

[Very Open License (VOL)](http://veryopenlicense.com/)

The contributor(s) to this creative work voluntarily grant permission
to any individual(s) or entities of any kind
- to use the creative work in any manner,
- to modify the creative work without restriction,
- to sell the creative work or derivatives thereof for profit, and
- to release modifications of the creative work in part or whole under any license
with no requirement for compensation or recognition of any kind.
