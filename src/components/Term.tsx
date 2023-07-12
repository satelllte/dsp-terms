import Link from 'next/link';
import {ExternalLinkIcon} from '@radix-ui/react-icons';

type TermProps = {
	id: string;
	term: string;
	expansion?: string;
	children: React.ReactNode;
};
export const Term = ({id, term, expansion, children}: TermProps) => {
	return (
		<div>
			<Title id={id} term={term} expansion={expansion}/>
			{expansion && <div className='pb-2 text-sm italic'>{expansion}</div>}
			<div>{children}</div>
		</div>
	);
};

type TermRowProps = {
	children: React.ReactNode;
};
export const TermRow = ({children}: TermRowProps) => {
	return (
		<p>{children}</p>
	);
};

type TermExternalLinkProps = {
	href: string;
	children: React.ReactNode;
};
export const TermExternalLink = ({href, children}: TermExternalLinkProps) => {
	return (
		<Link className='inline-flex items-baseline gap-1' target='_blank' rel='noopener noreferrer' href={href}>
			<ExternalLinkIcon/>
			{children}
		</Link>
	);
};

type TitleProps = {
	id: string;
	term: string;
	expansion?: string;
};
const Title = ({id, term, expansion}: TitleProps) => {
	if (expansion) {
		return (
			<TitleH3 id={id}><abbr className='no-underline' title={expansion}>{term}</abbr></TitleH3>
		);
	}

	return (
		<TitleH3 id={id}>{term}</TitleH3>
	);
};

type TitleH3Props = {
	id: string;
	children: React.ReactNode;
};
const TitleH3 = ({id, children}: TitleH3Props) => {
	return (
		<h3 id={id} className='pb-3 text-3xl font-semibold md:text-4xl'>{children}</h3>
	);
};
