import Link from 'next/link';
import {Term} from '@/components/Term';
import {terms} from '@/data/terms';

export default function IndexPage() {
	return (
		<div className='px-8 py-16 md:px-12 md:py-20 lg:px-20'>
			<h1 className='relative -left-0.5 pb-2 text-5xl font-bold md:-left-1 md:text-7xl'>DSP Terms</h1>
			<p className='text-base md:text-xl'>Digital signal processing terminology.</p>
			<div className='flex flex-col gap-16 pt-12 md:pt-20 lg:grid lg:grid-flow-col'>
				<div className='flex flex-col gap-9 md:gap-12'>
					{terms.map(term => (<Term key={term.id} {...term}/>))}
				</div>
				<div className='lg:w-60'>
					<h2 className='pb-2 text-lg font-semibold'>Navigation</h2>
					<div className='flex flex-col gap-1'>
						{terms.map(({id, title}) => (
							<div key={id}>
								<Link href={`/#${id}`} className='text-blue-600'>{title}</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
