import Link from 'next/link';
import {ExternalLinkIcon} from '@radix-ui/react-icons';
import type {Term as TermProps} from '@/data/terms';

export const Term = ({id, term, expansion, paragraphs, links}: TermProps) => {
	return (
		<div>
			<h3 id={id} className='pb-3 text-3xl font-semibold md:text-4xl'>{term}</h3>
			{expansion && <div className='pb-2 text-sm italic'>{expansion}</div>}
			{paragraphs.map(paragraph => {
				return (
					<p key={paragraph}>{paragraph}</p>
				);
			})}
			{links?.map(({href, title}) => {
				return (
					<Link
						key={href}
						href={href}
						className='inline-flex items-baseline gap-1'
						target='_blank'
						rel='noopener noreferrer'
					>
						<ExternalLinkIcon/>
						{title}
					</Link>
				);
			})}
		</div>
	);
};
