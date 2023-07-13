import {Term, TermRow, TermExternalLink} from '@/components/Term';

const IndexPage = () => {
	return (
		<div className='px-8 py-16 md:px-12 md:py-20 lg:px-20'>
			<h1 className='pb-2 text-5xl font-bold md:relative md:-left-1 md:text-7xl'>DSP Terms</h1>
			<p className='text-xl'>Digital signal processing terminology.</p>
			<div className='flex flex-col gap-10 pt-20 md:grid md:grid-cols-2 md:pt-28 lg:grid-cols-3'>
				<Term id='adc' term='ADC' expansion='Analog to Digital Converter'>
					<TermRow>Converts a continuous time signal to a digital signal by sampling.</TermRow>
				</Term>
				<Term id='adsr' term='ADSR' expansion='Attack / Decay / Sustain / Release'>
					<TermRow>By default this refers to a volume envelope.</TermRow>
					<TermRow>Note that attack/decay/release are times and sustain is a level.</TermRow>
				</Term>
				<Term id='aliasing' term='Aliasing'>
					<TermRow>A type of distortion that results when reconstructing an analog signal from samples.</TermRow>
					<TermRow>A set of samples could technically describe more than one signal. These are referred to as aliases, which is where the name comes from.</TermRow>
					<TermRow>The common occurrence of this is trying to represent a signal higher than your nyquist frequency.</TermRow>
					<TermExternalLink href='http://www.slack.net/~ant/bl-synth/3.nyquist.html'>The Nyquist Limit</TermExternalLink>
				</Term>
				<Term id='all-pass' term='All-pass'>
					<TermRow>Formally a filter, but it doesn&apos;t change the frequency content, only the phase.</TermRow>
					<TermRow>All frequencies pass through unaffected, hence the name &quot;all pass.&quot;</TermRow>
					<TermRow>A building block used in reverbs.</TermRow>
					<TermRow>It&apos;s made by adding a feedforward delay and then subtracting a feedback delay — both using the same coefficients.</TermRow>
					<TermRow>It was invented specifically to create a digital delay that doesn&apos;t impact the frequency response of a signal, like a comb filter does.</TermRow>
				</Term>
				<Term id='dac' term='DAC' expansion='Digital to Analog Converter'>
					<TermRow>Converts a digital signal to a continuous time, analog signal.</TermRow>
					<TermRow>The opposite of an ADC.</TermRow>
				</Term>
				<Term id='daw' term='DAW' expansion='Digital Audio Workstation'>
					<TermRow>An audio or music program that lets you run plugins and arrange multiple audio or MIDI tracks.</TermRow>
					<TermRow>Ableton Live or Logic Pro.</TermRow>
				</Term>
				<Term id='psola' term='PSOLA' expansion='Pitch Synchronous Overlap and Add'>
					<TermRow>Speech synthesis technique invented in 1986 that chops audio into overlapping chunks. The distance between chunks can be increased or decreased to change pitch or repeated/deleted to change duration.</TermRow>
					<TermExternalLink href='https://wiki.aalto.fi/pages/viewpage.action?pageId=155477136'>PSOLA - Aalto University Wiki</TermExternalLink>
				</Term>
				<Term id='simd' term='SIMD' expansion='Single instruction, multiple data.'>
					<TermRow>A type of optimized CPU instruction that operates on a vector instead of a single piece of data.</TermRow>
				</Term>
			</div>
		</div>
	);
};

export default IndexPage;
