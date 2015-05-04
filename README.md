hex2words demo
==============

This is a demo of the [hex2words][h2w] module. The module simply
takes a hex string, such as that created by hashing a document, and
outputs a list of words from the [PGP word list][wordlist]. In the
demo you can either put in an existing valid hash, or put in a
document and hash it, and get a list of words.

You would use this for something like: Email your public key to
a friend, you both paste in the key here, one of you reads the
word list while the other follows. In this way, you have verified
that the document both of you hold is identical.

Check out a demo page [here][demo].

[h2w]: https://www.npmjs.org/package/hex2words
[wordlist]: https://www.npmjs.org/package/pgp-word-list
[demo]: http://tobiaslabs.com/hex2words
