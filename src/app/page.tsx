import {Term, TermRow, TermExternalLink} from '@/components/Term';
import {terms} from '@/data/terms';

const IndexPage = () => {
	return (
		<div className='px-8 py-16 md:px-12 md:py-20 lg:px-20'>
			<h1 className='pb-2 text-5xl font-bold md:relative md:-left-1 md:text-7xl'>DSP Terms</h1>
			<p className='text-xl'>Digital signal processing terminology.</p>
			<div className='flex flex-col gap-10 pt-20 md:grid md:grid-cols-2 md:pt-28 lg:grid-cols-3'>
				{terms.map(({id, term, expansion, paragraphs, links}) => {
					return (
						<Term key={id} id={id} term={term} expansion={expansion}>
							{paragraphs.map(paragraph => {
								return (
									<TermRow key={paragraph}>{paragraph}</TermRow>
								);
							})}
							{links?.map(({href, title}) => {
								return (
									<TermExternalLink key={href} href={href}>{title}</TermExternalLink>
								);
							})}
						</Term>
					);
				})}
			</div>
		</div>
	);
};

export default IndexPage;
