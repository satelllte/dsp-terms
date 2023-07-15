import Link from 'next/link';
import {GitHubLogoIcon} from '@radix-ui/react-icons';
import {Term} from '@/components/Term';
import {LinkToTerm} from '@/components/LinkToTerm';
import {terms} from '@/data/terms';

export default function IndexPage() {
	return (
		<>
			<Container>
				<header className='pb-12 pt-16 md:py-20'>
					<h1 className='relative -left-0.5 pb-2 text-5xl font-bold md:-left-1 md:text-7xl'>DSP Terms</h1>
					<p className='text-base md:text-xl'>Digital signal processing terminology.</p>
				</header>
			</Container>
			<Container>
				<div className=''>
					<div className='flex flex-col gap-16 lg:grid lg:grid-flow-col'>
						<main className='flex flex-col gap-9 md:gap-12'>
							{terms.map(term => (<Term key={term.id} {...term}/>))}
						</main>
						<div className='lg:w-60'>
							<h2 className='pb-2 text-lg font-semibold'>Navigation</h2>
							<nav className='flex flex-col gap-1'>
								{terms.map(({id, title}) => (
									<div key={id}>
										<LinkToTerm id={id} title={title}/>
									</div>
								))}
							</nav>
						</div>
					</div>
				</div>
			</Container>
			<Container>
				<footer className='pb-8 pt-16 md:pt-24'>
					<div className='flex items-center justify-between'>
						<div className='text-lg'>Designed by @satelllte</div>
						<Link href='https://github.com/satelllte/dsp-terms' target='_blank' rel='noopener noreferrer'>
							<GitHubLogoIcon width={32} height={32}/>
						</Link>
					</div>
				</footer>
			</Container>
		</>
	);
}

type ContainerProps = {
	children: React.ReactNode;
};
function Container({children}: ContainerProps) {
	return (
		<div className='px-8 md:px-12 lg:px-20'>
			{children}
		</div>
	);
}
