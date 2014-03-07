var test = require('tap').test
var parse = require('../index.js')

var throws_error = function(input) {
	try {
		parse(input)
	} catch (e) {
		return true
	}
	return false
}

test('invalid string lengths throws errors', function(t) {
	t.ok(throws_error('A'))
	t.ok(throws_error('A1'))
	t.ok(throws_error('A1A'))
	t.notOk(throws_error('A1A1'))
	t.ok(throws_error('A1A1A'))
	t.ok(throws_error('A1A1A1'))
	t.ok(throws_error('A1A1A1A'))
	t.notOk(throws_error('A1A1A1A1'))
	t.end()
})

test('four characters is correct two words', function(t) {
	var words = parse('E582')
	t.equals(words[0], 'topmost')
	t.equals(words[1], 'Istanbul')
	t.end()
})

test('four characters is correct two words', function(t) {
	var correct_words = ['topmost','Istanbul','Pluto','vagabond','treadmill','Pacific','brackish','dictator','goldfish','Medusa','afflict','bravado','chatter','revolver','Dupont','midsummer','stopwatch','whimsical','cowbell','bottomless']
	var words = parse('E58294F2E9A227486E8B061B31CC528FD7FA3F19')
	t.equals(20, words.length, 'correct number of words')
	for (var i = 0; i < words.length; i++) {
		t.equals(words[i], correct_words[i])
	}
	t.end()
})
