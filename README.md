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

This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to [http://unlicense.org/](http://unlicense.org/)
