var word_list = require('pgp-word-list')

module.exports = function fourLetters(four_letters) {
	if (!/^[\dA-F]+$/.test(four_letters)) {
		throw new Error('non hex characters')
	}

	var first_so_called_byte = parseInt(four_letters.substr(0, 2), 16)
	if (isNaN(first_so_called_byte)) {
		throw new Error('first byte invalid')
	}

	var second_so_called_byte = parseInt(four_letters.substr(2, 2), 16)
	if (isNaN(second_so_called_byte)) {
		throw new Error('second byte invalid')
	}

	var first_word = word_list[first_so_called_byte][0]
	var second_word = word_list[second_so_called_byte][1]
	return [first_word, second_word]
}
