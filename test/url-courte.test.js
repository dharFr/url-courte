'use strict';
import assert from 'assert'

import { test } from './lib/index.js'
import { shorten, expand } from '../lib/url-courte.js'

test("shorten(): basic use-case with months and days < 10", () => {
	const date = new Date('2023-02-03')
	const category = 'articles'
	const ordinal = 1

	const shortenedFragment = shorten(category, date, ordinal)
	assert(shortenedFragment === 'a202302031')
})

test("shorten(): basic use-case with months and days > 10", () => {
	const date = new Date('2023-10-23')
	const category = 'notes'
	const ordinal = 2

	const shortenedFragment = shorten(category, date, ordinal)
	assert(shortenedFragment === 'n202310232')
})

test("shorten(): basic use-case with ordinal > 10", () => {
	const date = new Date('2023-10-23')
	const category = 'pictures'
	const ordinal = 12

	const shortenedFragment = shorten(category, date, ordinal)
	assert(shortenedFragment === 'p2023102312')
})

test("expand(): basic use-case with months and days < 10", () => {
	const fragment = 'a202302031'

	const expandedFragment = expand(fragment)
	assert(expandedFragment === 'a/2023/02/03/1')
})

test("expand(): with custom categoryMapping", () => {
	const fragment = 'a202302031'

	const expandedFragment = expand(fragment, {
		'a': 'articles', 
		'n':'notes',
	})
	assert(expandedFragment === 'articles/2023/02/03/1')
})

test("expand(): basic use-case, with ordinal > 10", () => {
	const fragment = 'n2023102314'

	const expandedFragment = expand(fragment)
	assert(expandedFragment === 'n/2023/10/23/14')
})

test("expand() with custom categoryMapping and with months and days > 10", () => {
	const fragment = 'n202310232'

	const expandedFragment = expand(fragment, {
		'a': 'articles', 
		'n':'notes',
	})
	assert(expandedFragment === 'notes/2023/10/23/2')
})

test("expand() with custom missing key in categoryMapping", () => {
	const fragment = 'p202310232'

	const expandedFragment = expand(fragment, {
		'a': 'articles', 
		'n':'notes',
	})
	assert(expandedFragment === 'p/2023/10/23/2')
})

