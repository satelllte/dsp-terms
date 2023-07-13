import {Term} from '@/components/Term';
import {terms} from '@/data/terms';

export default function IndexPage() {
	return (
		<div className='px-8 py-16 md:px-12 md:py-20 lg:px-20'>
			<h1 className='pb-2 text-5xl font-bold md:relative md:-left-1 md:text-7xl'>DSP Terms</h1>
			<p className='text-xl'>Digital signal processing terminology.</p>
			<div className='flex flex-col gap-9 pt-12 md:gap-12 md:pt-20'>
				{terms.map(term => (<Term key={term.id} {...term}/>))}
			</div>
		</div>
	);
}
