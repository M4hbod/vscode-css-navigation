import * as assert from 'assert'
import {prepare, searchReferences as sr} from './helper'


describe('Test Reference', () => {
	before(prepare)

	it('Should not find reference for tag selectors', async () => {
		assert.ok((await sr('html'))!.length === 0)
		assert.ok((await sr('body'))!.length === 0)
	})

	it('Should find references for id selectors', async () => {
		assert.deepEqual(await sr('#id1'), ['<div id="id1">'])
	})

	it('Should find references for class selectors even within nesting', async () => {
		assert.deepEqual(await sr('.class1'), ['<div class="class1">'])
		assert.deepEqual(await sr('&-sub'), ['<div class="class1-sub">'])
		assert.deepEqual(await sr('&-tail'), ['<div class="class1-sub-tail">'])
	})

	it('Should find reference in current HTML document, be aware this is not available by default', async () => {
		assert.ok(
			(await sr('.css-class-in-style', true))!.includes('<div class="css-class-in-style">')
		)
		assert.ok(
			(await sr('&-in-style', true))!.includes('<div class="scss-class-in-style">')
		)
	})
})

