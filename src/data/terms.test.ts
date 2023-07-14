import {describe, expect, it} from 'vitest';
import {terms, type Term, type TermParagraph, type TermExternalLink} from './terms';

describe('terms', () => {
	const they = it;

	const ids = terms.map(({id}) => id);
	const titles = terms.map(({title}) => title.toLowerCase());

	they('have all ids sorted', () => {
		for (let i = 1; i < ids.length; i++) {
			expect(ids[i - 1] < ids[i]).toEqual(true);
		}
	});

	they('have all titles sorted', () => {
		for (let i = 1; i < titles.length; i++) {
			expect(titles[i - 1] < titles[i]).toEqual(true);
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

	describe('term[i]', () => {
		terms.forEach(term => {
			testTerm(term);
		});
	});
});

const testTerm = (term: Term) => {
	testTermId(term.id);
	testTermTitle(term.title);
	testTermParagraphs(term.paragraphs);
	testTermLinks(term.links);
};

const testTermId = (id: string) => {
	describe('term.id', () => {
		it('is not empty', () => {
			expect(id.length > 0).toEqual(true);
		});
		it('is lowercased', () => {
			expect(id.toLowerCase() === id).toEqual(true);
		});
		it('contains only a-z letters and dash "-" sign', () => {
			expect(/^([a-z]|-)+$/.test(id)).toEqual(true);
		});
		it('does not contain two dashes "-" in a row', () => {
			expect(id.includes('--')).toEqual(false);
		});
		it('starts and ends with a-z letter', () => {
			expect(/^[a-z]/.test(id)).toEqual(true);
			expect(/[a-z]$/.test(id)).toEqual(true);
		});
	});
};

const testTermTitle = (title: string) => {
	describe('term.title', () => {
		it('is not empty', () => {
			expect(title.length > 0).toEqual(true);
		});
	});
};

const testTermParagraphs = (paragraphs: TermParagraph[]) => {
	const they = it;
	describe('term.paragraphs', () => {
		they('are not empty', () => {
			expect(paragraphs.length > 0).toEqual(true);
		});
	});
};

const testTermLinks = (links?: TermExternalLink[]) => {
	const they = it;
	describe('term.links', () => {
		they.skipIf(!links)('are not empty (if defined)', () => {
			expect(links && links.length > 0).toEqual(true);
		});
	});
};
