import {describe, expect, it as they} from 'vitest';
import {terms} from './terms';

describe('terms', () => {
	they('are sorted', () => {
		for (let i = 1; i < terms.length; i++) {
			expect(terms[i - 1].id < terms[i].id).toEqual(true);
			expect(terms[i - 1].title < terms[i].title).toEqual(true);
		}
	});

	they('have no duplicates', () => {
		const ids = terms.map(({id}) => id);
		const titles = terms.map(({title}) => title);
		expect((new Set(ids)).size).toEqual(ids.length);
		expect((new Set(titles)).size).toEqual(titles.length);
	});
});
