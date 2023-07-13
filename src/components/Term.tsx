import Link from 'next/link';
import {ExternalLinkIcon} from '@radix-ui/react-icons';
import type {Term as TermProps} from '@/data/terms';
import clsx from 'clsx';

export function Term({id, title, expansion, paragraphs, links}: TermProps) {
	return (
		<div>
			<h3 id={id} className={clsx('text-2xl font-semibold md:text-3xl', !expansion && 'pb-3')}>
				{title}
			</h3>
			{expansion && <div className='pb-3 text-sm font-semibold'>{expansion}</div>}
			{paragraphs.map(paragraph => (<p key={paragraph}>{paragraph}</p>))}
			{links?.map(({href, title}) => (
				<Link
					key={href}
					href={href}
					className='flex items-baseline gap-1 pt-1 text-blue-600'
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
