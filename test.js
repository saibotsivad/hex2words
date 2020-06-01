const { test } = require('zora')
const parse = require('./index.js')
const wordList = require('pgp-word-list')

test('invalid string lengths throws errors', t => {
	t.throws(      parse.bind(null, 'A'))
	t.doesNotThrow(parse.bind(null, 'A1'))
	t.throws(      parse.bind(null, 'A1A'))
	t.doesNotThrow(parse.bind(null, 'A1A1'))
	t.throws(      parse.bind(null, 'A1A1A'))
	t.doesNotThrow(parse.bind(null, 'A1A1A1'))
	t.throws(      parse.bind(null, 'A1A1A1A'))
	t.doesNotThrow(parse.bind(null, 'A1A1A1A1'))
})

test('buffer is supported', t => {
	t.ok(parse(new Buffer('A1', 'hex')))
	t.ok(parse(new Buffer('A1A1A1A1A1', 'hex')))
	t.ok(parse(new Buffer([ 100 ])))
	t.ok(parse(new Buffer([ 100, 200, 50, 35 ])))
})

test('four characters is correct two words', t => {
	const words = parse('E582')
	t.equal(words.length, 2)
	t.equal(words[0], 'topmost')
	t.equal(words[1], 'Istanbul')
})

test('four characters is correct two words', t => {
	const correctWords = [
		'topmost',
		'Istanbul',
		'Pluto',
		'vagabond',
		'treadmill',
		'Pacific',
		'brackish',
		'dictator'
	]
	const words = parse('E58294F2E9A22748')
	t.equal(8, words.length, 'correct number of words')
	words.forEach((word, index) => {
		t.equal(word, correctWords[index])
	})
})
