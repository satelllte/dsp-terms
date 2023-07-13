import Link from 'next/link';
import type {TermInternalLink as LinkToTermProps} from '@/data/terms';

export function LinkToTerm({id, title}: LinkToTermProps) {
	return (
		<Link href={`/#${id}`} className='text-blue-600'>{title}</Link>
	);
}
