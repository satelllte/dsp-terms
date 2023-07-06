import {Term, TermRow, TermExternalLink} from '@/components/Term';
import Link from 'next/link';

const IndexPage = () => {
	return (
		<div className='flex flex-col gap-6 p-8'>
			<Term id='adc' term='ADC' expansion='Analog to Digital Converter'>
				{/* eslint-disable-next-line no-warning-comments */}
				{/* TODO: link to "continuous time" */}
				{/* eslint-disable-next-line no-warning-comments */}
				{/* TODO: link to "sampling" */}
				<TermRow>Converts a continuous time signal to a digital signal by sampling.</TermRow>
			</Term>
			<Term id='adsr' term='ADSR' expansion='Attack Decay Sustain Release'>
				{/* eslint-disable-next-line no-warning-comments */}
				{/* TODO: link to "envelope" */}
				<TermRow>By default this refers to a volume envelope.</TermRow>
				<TermRow>Note that attack/decay/release are times and sustain is a level.</TermRow>
				<TermRow>Mucho confusing for n00bs, especially when laid out such as on the Juno 60 where they are identical looking sliders.</TermRow>
			</Term>
			<Term id='aliasing' term='Aliasing'>
				{/* eslint-disable-next-line no-warning-comments */}
				{/* TODO: link to "nyquist" */}
				<TermRow>A type of distortion that results when reconstructing an analog signal from samples.</TermRow>
				<TermRow>A set of samples could technically describe more than one signal. These are referred to as aliases, which is where the name comes from.</TermRow>
				<TermRow>The common occurrence of this is trying to represent a signal higher than your nyquist frequency.</TermRow>
				<TermExternalLink href='http://www.slack.net/~ant/bl-synth/3.nyquist.html'>The Nyquist Limit</TermExternalLink>
			</Term>
			<Term id='hash-test' term='<Hash Test>'>
				<TermRow>
					Click <Link className='text-red-500' href='#lorem-a'>here</Link>.
				</TermRow>
			</Term>
			<TermLorem id='lorem-a'/>
			<TermLorem id='lorem-b'/>
			<TermLorem id='lorem-c'/>
			<TermLorem id='lorem-d'/>
			<TermLorem id='lorem-e'/>
			<TermLorem id='lorem-f'/>
			<TermLorem id='lorem-g'/>
		</div>
	);
};

type TermLoremProps = {
	id: string;
};
const TermLorem = ({id}: TermLoremProps) => {
	return (
		<Term id={id} term={id}>
			<TermRow>Lorem ipsum dolor sit amet consectetur adipisicing elit.</TermRow>
			<TermRow>Assumenda cum velit eligendi libero reiciendis! Ad adipisci tempore dolores harum a hic necessitatibus quaerat perferendis asperiores?</TermRow>
			<TermRow>Veritatis nobis deleniti voluptate dolores!</TermRow>
		</Term>
	);
};

export default IndexPage;
