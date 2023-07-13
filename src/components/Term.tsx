import Link from 'next/link';
import {ExternalLinkIcon} from '@radix-ui/react-icons';
import type {Term as TermProps} from '@/data/terms';

export function Term({id, title, expansion, paragraphs, links}: TermProps) {
	return (
		<div>
			<h3 id={id} className='pb-3 text-3xl font-semibold md:text-4xl'>{title}</h3>
			{expansion && <div className='pb-2 text-sm italic'>{expansion}</div>}
			{paragraphs.map(paragraph => (<p key={paragraph}>{paragraph}</p>))}
			{links?.map(({href, title}) => (
				<Link
					key={href}
					href={href}
					className='flex items-baseline gap-1 pt-1'
					target='_blank'
					rel='noopener noreferrer'
				>
					<ExternalLinkIcon/>
					{title}
				</Link>
			))}
		</div>
	);
}
