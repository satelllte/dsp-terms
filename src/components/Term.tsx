import clsx from 'clsx';
import Link from 'next/link';
import {ExternalLinkIcon} from '@radix-ui/react-icons';
import {LinkToTerm} from '@/components/LinkToTerm';
import type {TermParagraph, Term as TermProps} from '@/data/terms';

export function Term({id, title, expansion, paragraphs, links}: TermProps) {
	return (
		<div>
			<h3 id={id} className={clsx('text-2xl font-semibold md:text-3xl', !expansion && 'pb-3')}>
				{title}
			</h3>
			{expansion && <div className='pb-3 text-sm font-semibold'>{expansion}</div>}
			{paragraphs.map(paragraph => (
				<Paragraph key={getParagraphKey(paragraph)} paragraph={paragraph}/>
			))}
			{links && (
				<div className='flex flex-col pt-2'>
					{links.map(({href, title}) => (
						<span key={href}>
							<Link
								href={href}
								className='inline-flex items-baseline gap-1 pt-1 text-blue-600'
								target='_blank'
								rel='noopener noreferrer'
							>
								<ExternalLinkIcon width={16} height={16} className='min-h-[16px] min-w-[16px]'/>
								<span>{title}</span>
							</Link>
						</span>
					))}
				</div>
			)}
		</div>
	);
}

type ParagraphProps = {
	paragraph: TermParagraph;
};
function Paragraph({paragraph}: ParagraphProps) {
	if (typeof paragraph === 'string') {
		return <p>{paragraph}</p>;
	}

	return (
		<p>
			{paragraph.map(p => {
				if (typeof p === 'string') {
					return p;
				}

				const {id, title} = p;
				return (
					<LinkToTerm key={title} id={id} title={title}/>
				);
			})}
		</p>
	);
}

const getParagraphKey = (paragraph: TermParagraph): string => {
	if (typeof paragraph === 'string') {
		return paragraph;
	}

	return paragraph.reduce<string>((prev, curr) => {
		if (typeof curr === 'string') {
			return `${prev}${curr}`;
		}

		return `${prev}${curr.title}`;
	}, '');
};
