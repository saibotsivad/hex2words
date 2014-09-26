var word_list = require('pgp-word-list')

/** Parse a hex input string into PGP code words.
 * @param input A {string} or {Buffer} containing bytes to decode.
 * @param cb An optional callback {Function}
 * @returns If cb is undefined, returns the array of code words.
 */
module.exports = function parse(input, cb) {
	var output = []

	// avoid thrown exceptions in async code
	try {
		input = Buffer.isBuffer(input) ? input : new Buffer(input, 'hex')
	} catch (e) {
		if (!cb) {
			throw e
		}
    
		return process.nextTick(function() {
			return cb(e)
		})
	}
  
	for (var index = 0; index < input.length; ++index) {
		output.push(word_list[input[index]][index % 2])
	}

	if (!cb) {
		return output
	} else {
		return process.nextTick(function() {
			return cb(null, output)
		})
	}
}
