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

const RootLayout = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<html lang='en'>
			<body className={clsx(font.className, 'bg-stone-950 text-stone-50')}>
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
