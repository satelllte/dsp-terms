import {type Metadata} from 'next';
import {Montserrat} from 'next/font/google';
import clsx from 'clsx';
import './style.css';

// eslint-disable-next-line new-cap
const font = Montserrat({subsets: ['latin']});

export const metadata: Metadata = {
	title: 'DSP Terms',
	description: 'Digital signal processing terminology',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={clsx(font.className, 'bg-gray-200 text-stone-950 selection:bg-blue-500 selection:text-white')}>
				<div className='mx-auto max-w-screen-2xl bg-stone-50'>
					{children}
				</div>
			</body>
		</html>
	);
}
