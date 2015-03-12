var test = require('tap').test
var parse = require('../index.js')
var wordList = require('pgp-word-list')
var noDuplicates = require('dupe')

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

test('dep pgp-word-list is complete', function (t) {
	var flattened = [].concat.apply([], wordList)

	t.equal(wordList.length, 256)
	t.equal(flattened.length, 512)

	t.ok(wordList.every(pairIsGood), 'word pairs are the corrent length')
	t.ok(flattened.every(noDuplicates), 'no duplicate words')

	t.end()
})

test('four characters is correct two words', function(t) {
	var words = parse('E582')
	t.equals(words[0], 'topmost')
	t.equals(words[1], 'Istanbul')
	t.end()
})

test('four characters is correct two words', function(t) {
	var correct_words = [
		'topmost', 'Istanbul', 'Pluto', 'vagabond', 'treadmill',
		'Pacific', 'brackish', 'dictator', 'goldfish', 'Medusa',
		'afflict', 'bravado', 'chatter', 'revolver', 'Dupont',
		'midsummer', 'stopwatch', 'whimsical', 'cowbell', 'bottomless'
	]
	var words = parse('E58294F2E9A227486E8B061B31CC528FD7FA3F19')
	t.equals(20, words.length, 'correct number of words')
	for (var i = 0; i < words.length; i++) {
		t.equals(words[i], correct_words[i])
	}
	t.end()
})
