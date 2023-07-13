import {describe, expect, it as they} from 'vitest';
import {terms} from './terms';

describe('terms', () => {
	they('are sorted', () => {
		for (let i = 1; i < terms.length; i++) {
			expect(terms[i - 1].id.toLowerCase() < terms[i].id.toLowerCase()).toEqual(true);
			expect(terms[i - 1].title.toLowerCase() < terms[i].title.toLowerCase()).toEqual(true);
		}
	});

	they('have no duplicates', () => {
		const ids = terms.map(({id}) => id.toLowerCase());
		const titles = terms.map(({title}) => title.toLowerCase());
		expect((new Set(ids)).size).toEqual(ids.length);
		expect((new Set(titles)).size).toEqual(titles.length);
	});
});
