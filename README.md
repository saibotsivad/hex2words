Given a string of hex values, a PGP thumbprint or SHA
hash for example, return an array of PGP words.

	var words = parse('E582')

Will return

	[
		'topmost',
		'Istanbul'
	]
