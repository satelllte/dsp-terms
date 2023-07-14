import {describe, expect, it} from 'vitest';
import {terms, type Term, type TermParagraph, type TermExternalLink} from './terms';

const ids = terms.map(({id}) => id);

describe('terms', () => {
	const they = it;

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

	describe('terms[i]', () => {
		terms.forEach(term => {
			testTerm(term);
		});
	});
});

const testTerm = (term: Term) => {
	testTermId(term.id);
	testTermTitle(term.title);
	testTermExpansion(term.expansion);
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

const testTermExpansion = (expansion?: string) => {
	describe('term.expansion', () => {
		it('is not empty (if defined)', () => {
			if (expansion === undefined) {
				return;
			}

			expect(expansion.length > 0).toEqual(true);
		});
	});
};

const testTermParagraphs = (paragraphs: TermParagraph[]) => {
	const they = it;
	describe('term.paragraphs', () => {
		they('are not empty', () => {
			expect(paragraphs.length > 0).toEqual(true);
		});
		describe('paragraphs[i]', () => {
			paragraphs.forEach(paragraph => {
				testTermParagraph(paragraph);
			});
		});
	});
};

const testTermParagraph = (paragraph: TermParagraph) => {
	describe('term.paragraph', () => {
		it('is not empty (when string)', () => {
			if (typeof paragraph !== 'string') {
				return;
			}

			expect(paragraph.length > 0).toEqual(true);
		});

		it('is valid (when complex paragraph)', () => {
			if (typeof paragraph === 'string') {
				return;
			}

			paragraph.forEach(paragraphPart => {
				if (typeof paragraphPart === 'string') {
					expect(paragraphPart.length > 0).toEqual(true);
					return;
				}

				expect(ids.includes(paragraphPart.id)).toEqual(true); // Internal link id exists
				expect(paragraphPart.title.length > 0).toEqual(true); // Internal link title is not empty
			});
		});
	});
};

const testTermLinks = (links?: TermExternalLink[]) => {
	const they = it;
	describe('term.links', () => {
		they('are not empty (if defined)', () => {
			if (links === undefined) {
				return;
			}

			expect(links.length > 0).toEqual(true);
		});

		describe.skipIf(!links)('term.links[i]', () => {
			links?.forEach(link => {
				testTermLink(link);
			});
		});
	});
};

const testTermLink = (link: TermExternalLink) => {
	describe('term.link', () => {
		it('contains non-empty title', () => {
			expect(link.title.length > 0).toEqual(true);
		});
		it('constains valid absolute href', () => {
			expect(isAbsoluteUrl(link.href)).toEqual(true);
		});
	});
};

const isAbsoluteUrl = (url: string): boolean => {
	try {
		const _url = new URL(url);
		const isValidProtocol = _url.protocol === 'http:' || _url.protocol === 'https:';
		return isValidProtocol;
	} catch {
		return false;
	}
};
