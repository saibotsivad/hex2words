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
	t.notOk(throws_error('A1'))
	t.ok(throws_error('A1A'))
	t.notOk(throws_error('A1A1'))
	t.ok(throws_error('A1A1A'))
	t.notOk(throws_error('A1A1A1'))
	t.ok(throws_error('A1A1A1A'))
	t.notOk(throws_error('A1A1A1A1'))
	t.end()
})

test('buffer is supported', function (t) {
	t.ok(parse(new Buffer('A1', 'hex')));
	t.ok(parse(new Buffer('A1A1A1A1A1', 'hex')));
	t.ok(parse(new Buffer([ 100 ])));
	t.ok(parse(new Buffer([ 100, 200, 50, 35 ])));
	t.end();
})

test('async is supported', function (t) {
	parse(new Buffer('A1A1', 'hex'), function (err, output) {
		t.equals(2, output.length, 'correct number of words');
		t.end();
	});
})

test('async does not throw', function (t) {
	parse('A1A', function (err, output) {
		t.ok(err);
		t.end();
	});
})

test('dep pgp-word-list is complete', function (t) {
	for (var i = 0; i < 256; ++i) {
		var words = parse(new Buffer([i, i]));
		t.equals(2, words.length);
		t.notEquals(words[0], words[1]);
	}
	t.end();
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
