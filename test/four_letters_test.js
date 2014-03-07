var test = require('tap').test
var four_letters = require('../four_letters.js')

test('four characters is correct two words', function(t) {
	var words = four_letters('E582')
	t.equals(words[0], 'topmost')
	t.equals(words[1], 'Istanbul')
	t.end()
})

test('invalid bytes throw exceptions', function(t) {
	t.plan(1)
	try {
		four_letters('XXZZ')
	} catch (e) {
		t.ok(true, 'should throw exception')
	}
	t.end()
})
