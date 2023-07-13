import {describe, expect, it} from 'vitest';
import {terms} from './terms';

describe('terms', () => {
	const they = it;

	const ids = terms.map(({id}) => id.toLowerCase());
	const titles = terms.map(({title}) => title.toLowerCase());

	they('have all ids sorted', () => {
		for (let i = 1; i < ids.length; i++) {
			expect(ids[i - 1] < ids[i]).toEqual(true);
		}
	});

	they('have all titles sorted', () => {
		for (let i = 1; i < titles.length; i++) {
			expect(titles[i - 1].toLowerCase() < titles[i].toLowerCase()).toEqual(true);
		}
	});

	they('have no duplicates in ids', () => {
		expect((new Set(ids)).size).toEqual(ids.length);
	});

	they('have no duplicates in titles', () => {
		expect((new Set(titles)).size).toEqual(titles.length);
	});

	they('have valid links to other terms', () => {
		terms.forEach(({paragraphs}) => {
			paragraphs.forEach(paragraph => {
				if (typeof paragraph === 'string') {
					return;
				}

				paragraph.forEach(p => { // eslint-disable-line max-nested-callbacks
					if (typeof p === 'string') {
						return;
					}

					const {id} = p;
					expect(ids).toContainEqual(id);
				});
			});
		});
	});
});
