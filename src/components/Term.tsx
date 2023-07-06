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
			<TermTitle id={id} term={term} expansion={expansion}/>
			<dd>
				{expansion && <div className='pb-1 text-sm italic'>{expansion}</div>}
				<div>{children}</div>
			</dd>
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

type TermTitleProps = {
	id: string;
	term: string;
	expansion?: string;
};
const TermTitle = ({id, term, expansion}: TermTitleProps) => {
	if (expansion) {
		return (
			<Dt id={id}><abbr className='no-underline' title={expansion}>{term}</abbr></Dt>
		);
	}

	return (
		<Dt id={id}>{term}</Dt>
	);
};

type DtProps = {
	id: string;
	children: React.ReactNode;
};
const Dt = ({id, children}: DtProps) => {
	return (
		<dt id={id} className='pb-1 text-lg font-semibold'>{children}</dt>
	);
};
