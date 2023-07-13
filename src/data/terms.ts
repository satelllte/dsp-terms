export const terms: Term[] = [
	{
		id: 'adc',
		title: 'ADC',
		expansion: 'Analog to Digital Converter',
		paragraphs: [
			'Converts a continuous time signal to a digital signal by sampling.',
		],
	},
	{
		id: 'adsr',
		title: 'ADSR',
		expansion: 'Attack / Decay / Sustain / Release',
		paragraphs: [
			'By default this refers to a volume envelope.',
			'Note that attack/decay/release are times and sustain is a level.',
		],
	},
	{
		id: 'aliasing',
		title: 'Aliasing',
		paragraphs: [
			'A type of distortion that results when reconstructing an analog signal from samples.',
			'A set of samples could technically describe more than one signal. These are referred to as aliases, which is where the name comes from.',
			'The common occurrence of this is trying to represent a signal higher than your nyquist frequency.',
		],
		links: [
			{
				href: 'http://www.slack.net/~ant/bl-synth/3.nyquist.html',
				title: 'The Nyquist Limit',
			},
		],
	},
	{
		id: 'all-pass',
		title: 'All-pass',
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
		title: 'Amplitude',
		paragraphs: [
			'Peak value of a sinusoid.',
			'Can be positive or negative, it\'s just "how far from 0".',
		],
	},
	{
		id: 'analog-modelling',
		title: 'Analog modelling',
		paragraphs: [
			'Digital algorithms that simulate the behavior of electronic circuits (resistors, capacitors, op amps).',
			'There are various flavors of white box (literal model of each component and their interactions) and black box (modelling the response).',
		],
	},
	{
		id: 'angular-frequency',
		title: 'Angular frequency',
		paragraphs: [
			'omega (ω)',
			'ω is used to represent radians per time unit, either per second or per sample depending on context.',
			'When dealing with seconds, it\'s a factor of 2π larger than Hertz (1Hz = 2πω).',
		],
	},
	{
		id: 'asdf',
		title: 'ASDF',
		expansion: 'Average Square Difference Function',
		paragraphs: [
			'A math function that measures the average absolute difference between overlapping sections of a signal.',
		],
	},
	{
		id: 'attenuation',
		title: 'Attenuation',
		paragraphs: [
			'Reduction in the magnitude of a signal.',
			'The opposite of amplification.',
		],
	},
	{
		id: 'autocorrelation',
		title: 'Autocorrelation',
		paragraphs: [
			'Also known as Autocorrelation Function (ACF).',
			'Similarity of a signal to a copy of itself with a variable amount of lag.',
			'Cross correlation of a signal with itself, to provide analytical insight into its periodicity and tempo.',
			'Autocorrelation is symmetric, which means that you only need to take the first half of values when calculating it.',
		],
	},
	{
		id: 'band-pass-filter',
		title: 'Band-pass filter',
		paragraphs: [
			'A filter that lets through all frequencies within a certain range.',
		],
	},
	{
		id: 'bilinear-transform',
		title: 'Bilinear transform',
		paragraphs: [
			'A way to convert an analog (continuous time) filter into a discrete digital filter.',
			'The transformation is achieved by mapping the s-plane (continuous-time domain) to the z-plane (discrete-time domain).',
		],
	},
	{
		id: 'biquad',
		title: 'Biquad',
		expansion: 'Bi-quadratic Filter',
		paragraphs: [
			'The name comes from the fact that it\'s transfer function is a ratio of two quadratic functions.',
			'A two-pole, two-zero filter.',
		],
		links: [
			{
				href: 'https://www.earlevel.com/main/2012/11/26/biquad-c-source-code/',
				title: 'Biquad C++ source Code - EarLevel Engineering',
			},
			{
				href: 'https://www.earlevel.com/main/2010/12/20/biquad-calculator/',
				title: 'Biquad calculator - EarLevel Engineering',
			},
			{
				href: 'https://ccrma.stanford.edu/~jos/filters/Biquad_Software_Implementations.html',
				title: 'Biquad in C - Center for Computer Research in Music and Acoustics',
			},
		],
	},
	{
		id: 'dac',
		title: 'DAC',
		expansion: 'Digital to Analog Converter',
		paragraphs: [
			'Converts a digital signal to a continuous time, analog signal.',
			'The opposite of an ADC.',
		],
	},
	{
		id: 'daw',
		title: 'DAW',
		expansion: 'Digital Audio Workstation',
		paragraphs: [
			'An audio or music program that lets you run plugins and arrange multiple audio or MIDI tracks.',
			'Examples: Ableton Live, Logic Pro, etc.',
		],
	},
	{
		id: 'psola',
		title: 'PSOLA',
		expansion: 'Pitch Synchronous Overlap and Add',
		paragraphs: [
			'Speech synthesis technique invented in 1986 that chops audio into overlapping chunks. The distance between chunks can be increased or decreased to change pitch or repeated/deleted to change duration.',
		],
		links: [
			{
				href: 'https://wiki.aalto.fi/pages/viewpage.action?pageId=155477136',
				title: 'PSOLA - Aalto University Wiki',
			},
		],
	},
	{
		id: 'simd',
		title: 'SIMD',
		expansion: 'Single instruction, multiple data.',
		paragraphs: [
			'A type of optimized CPU instruction that operates on a vector instead of a single piece of data.',
		],
	},
];

export type Term = {
	id: string;
	title: string;
	expansion?: string;
	paragraphs: string[];
	links?: TermExternalLink[];
};

type TermExternalLink = {
	href: string;
	title: string;
};
