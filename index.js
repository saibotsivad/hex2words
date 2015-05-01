var wordList = require('pgp-word-list')

function accessWordList(byteStr, index) {
	var byte = parseInt(byteStr, 16)
	return wordList[byte][index % 2]
}

/** Parse a hex input string into PGP code words.
 * @param input A {string} or {Buffer} containing bytes to decode.
 * @returns an array of code words.
 */
module.exports = function parse(input) {
	var str = input.toString('hex')
	if (str.length % 2) {
		throw new Error('Expected input to be an even length.')
	}
	return str
		.match(/[0-9a-z]{2}/gi)
		.map(accessWordList)
}
