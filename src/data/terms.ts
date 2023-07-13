type Term = {
	id: string;
	term: string;
	expansion?: string;
	paragraphs: string[];
	// eslint-disable-next-line no-warning-comments
	externalLinks?: TermExternalLink[]; // TODO: rename to 'links'
};

type TermExternalLink = {
	href: string;
	// eslint-disable-next-line no-warning-comments
	label: string; // TODO: rename to 'title'
};

export const terms: Term[] = [
	{
		id: 'adc',
		term: 'ADC',
		expansion: 'Analog to Digital Converter',
		paragraphs: [
			'Converts a continuous time signal to a digital signal by sampling.',
		],
	},
	{
		id: 'adsr',
		term: 'ADSR',
		expansion: 'Attack / Decay / Sustain / Release',
		paragraphs: [
			'By default this refers to a volume envelope.',
			'Note that attack/decay/release are times and sustain is a level.',
		],
	},
	{
		id: 'aliasing',
		term: 'Aliasing',
		paragraphs: [
			'A type of distortion that results when reconstructing an analog signal from samples.',
			'A set of samples could technically describe more than one signal. These are referred to as aliases, which is where the name comes from.',
			'The common occurrence of this is trying to represent a signal higher than your nyquist frequency.',
		],
		externalLinks: [
			{
				href: 'http://www.slack.net/~ant/bl-synth/3.nyquist.html',
				label: 'The Nyquist Limit',
			},
		],
	},
	{
		id: 'all-pass',
		term: 'All-pass',
		paragraphs: [
			'Formally a filter, but it doesn\'t change the frequency content, only the phase.',
			'All frequencies pass through unaffected, hence the name "all-pass".',
			'A building block used in reverbs.',
			'It\'s made by adding a feedforward delay and then subtracting a feedback delay — both using the same coefficients.',
			'It was invented specifically to create a digital delay that doesn\'t impact the frequency response of a signal, like a comb filter does.',
		],
	},
	{
		id: 'amplitude',
		term: 'Amplitude',
		paragraphs: [
			'Peak value of a sinusoid.',
			'Can be positive or negative, it\'s just "how far from 0".',
		],
	},
	{
		id: 'dac',
		term: 'DAC',
		expansion: 'Digital to Analog Converter',
		paragraphs: [
			'Converts a digital signal to a continuous time, analog signal.',
			'The opposite of an ADC.',
		],
	},
	{
		id: 'daw',
		term: 'DAW',
		expansion: 'Digital Audio Workstation',
		paragraphs: [
			'An audio or music program that lets you run plugins and arrange multiple audio or MIDI tracks.',
			'Examples: Ableton Live, Logic Pro, etc.',
		],
	},
	{
		id: 'psola',
		term: 'PSOLA',
		expansion: 'Pitch Synchronous Overlap and Add',
		paragraphs: [
			'Speech synthesis technique invented in 1986 that chops audio into overlapping chunks. The distance between chunks can be increased or decreased to change pitch or repeated/deleted to change duration.',
		],
		externalLinks: [
			{
				href: 'https://wiki.aalto.fi/pages/viewpage.action?pageId=155477136',
				label: 'PSOLA - Aalto University Wiki',
			},
		],
	},
	{
		id: 'simd',
		term: 'SIMD',
		expansion: 'Single instruction, multiple data.',
		paragraphs: [
			'A type of optimized CPU instruction that operates on a vector instead of a single piece of data.',
		],
	},
];
