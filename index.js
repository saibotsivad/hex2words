var four_letters = require('./four_letters.js')

var string_to_array = function(input) {
	var output = []
	for (var i = 0; i < input.length; i += 4) {
		output.push(input.substr(i, 4))
	}
	return output
}

module.exports = function parse(input) {
	if (input.length % 4 !== 0) {
		throw new Error('invalid string length')
	}
	return string_to_array(input).map(four_letters).reduce(function(memo, word_pair) {
		return memo.concat(word_pair)
	})
}
