var test = require('tape')
var parse = require('../index.js')
var wordList = require('pgp-word-list')
var noDuplicates = require('dupe')

test('invalid string lengths throws errors', function(t) {
	t.throws(      parse.bind(null, 'A'))
	t.doesNotThrow(parse.bind(null, 'A1'))
	t.throws(      parse.bind(null, 'A1A'))
	t.doesNotThrow(parse.bind(null, 'A1A1'))
	t.throws(      parse.bind(null, 'A1A1A'))
	t.doesNotThrow(parse.bind(null, 'A1A1A1'))
	t.throws(      parse.bind(null, 'A1A1A1A'))
	t.doesNotThrow(parse.bind(null, 'A1A1A1A1'))
	t.end()
})

test('buffer is supported', function (t) {
	t.ok(parse(new Buffer('A1', 'hex')))
	t.ok(parse(new Buffer('A1A1A1A1A1', 'hex')))
	t.ok(parse(new Buffer([ 100 ])))
	t.ok(parse(new Buffer([ 100, 200, 50, 35 ])))
	t.end()
})

function pairIsGood(wordPair) {
	return wordPair.length === 2
}

test('four characters is correct two words', function(t) {
	var words = parse('E582')
	t.equals(words[0], 'topmost')
	t.equals(words[1], 'Istanbul')
	t.end()
})

test('four characters is correct two words', function(t) {
	var correct_words = [ 'topmost', 'Istanbul', 'Pluto', 'vagabond', 'treadmill', 'Pacific', 'brackish', 'dictator' ]
	var words = parse('E58294F2E9A22748')
	t.equals(8, words.length, 'correct number of words')
	for (var i = 0; i < words.length; i++) {
		t.equals(words[i], correct_words[i])
	}
	t.end()
})
