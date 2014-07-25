'use strict'

var Ractive = require('ractive')
var md5 = require('MD5')
var hex2words = require('hex2words')

var generate = function(input) {
	var wordlist
	var stringType
	try {
		wordlist = hex2words(input)
		stringType = 'hex'
	} catch (e) {
		wordlist = hex2words(md5(input))
		stringType = 'text'
	}
	var out
	if (wordlist.length > 0) {
		var words = []
		for (var i = 0; i < wordlist.length; i += 2) {
			words.push({
				wordone: wordlist[i],
				wordtwo: wordlist[i + 1]
			})
		}
		out = {
			words: words,
			stringType: stringType
		}
	}
	return out
}

var theform = new Ractive({
	el: 'main',
	template: '#the-form',
	data: {}
})

theform.observe('input', function(newValue, oldValue) {
	if (newValue === null || newValue === '') {
		theform.set({ words: null })
	} else if (newValue !== oldValue) {
		var words = generate(newValue)
		if (words.words) {
			theform.set(words)
		}
	}
})
