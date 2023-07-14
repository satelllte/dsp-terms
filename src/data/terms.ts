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
		id: 'beat-frequency',
		title: 'Beat frequency',
		paragraphs: [
			'Occurs when two waves with different frequencies overlap, causing a cycle of alternating constructive and destructive interference between waves.',
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
		id: 'block-diagram',
		title: 'Block diagram',
		paragraphs: [
			'High level visual description of how a signal flows through a system.',
			'It\'s a rough sketch to give you a general idea of what\'s going on.',
			'It\'s NOT a detailed schematic diagram which uses standardized symbolic representations of components or a circuit diagram (which shows electrical connections).',
		],
	},
	{
		id: 'bucket-brigade',
		title: 'Bucket brigade',
		paragraphs: [
			'An analog delay where the signal moves one clock cycle at a time through a series of capacitors connected in a cascade.',
			'Named after a way for humans to transport items by lining up in a chain and passing objects person by person down the chain (such as a bucket of water).',
		],
	},
	{
		id: 'buffer',
		title: 'Buffer',
		paragraphs: [
			'A bunch of values stored contiguously in memory.',
			'Instead of expecting programs to handle real time audio one value at a time, values are batched into buffers for more efficient processing.',
			'Delay lines are implemented with buffers',
			['Most of ', {title: 'DAW', id: 'daw'}, '\'s have input and output buffers to help ensure artifact-free and CPU-overload free performance.'],
		],
	},
	{
		id: 'causal-filter',
		title: 'Causal filter',
		paragraphs: [
			'A filter whose output doesn\'t depend on any future inputs.',
			'Basically all real time filters are causal.',
		],
		links: [
			{
				href: 'https://www.dsprelated.com/freebooks/filters/Causal_Recursive_Filters.html',
				title: 'Causal Recursive Filters - DSPRelated',
			},
		],
	},
	{
		id: 'cepstrum',
		title: 'Cepstrum',
		paragraphs: [
			'The result of performing the inverse fourier transform of the logarithm of a spectrum.',
			'Expresses the rate of change of spectrum over time, and is useful for investigating periodicity, presence of harmonics, etc.',
			'The word "Cepstrum" has the first four letters of "Spectrum" reversed.',
		],
	},
	{
		id: 'characteristic-curve',
		title: 'Characteristic Curve',
		paragraphs: [
			'I/O curve.',
			'Amplitude plot of input to output.',
		],
	},
	{
		id: 'circular-buffer',
		title: 'Circular buffer',
		expansion: 'Ring buffer',
		paragraphs: [
			'A fixed-size block of memory that once you get to the end of reading/writing to it, you wrap back around to the start.',
			'An implementation is a delay line',
		],
	},
	{
		id: 'coefficient',
		title: 'Coefficient',
		expansion: 'Multiplicative factor',
		paragraphs: [
			'A number that\'s used for scaling things, such as the magnitude of a signal.',
		],
	},
	{
		id: 'comb-filter',
		title: 'Comb Filter',
		paragraphs: [
			'What happens when you add a delayed copy of a signal to itself, whether it be feedforward or feedback.',
			'Named because the resulting frequency response visually resembles a comb.',
		],
		links: [
			{
				href: 'https://ccrma.stanford.edu/~jos/pasp/Feedback_Comb_Filters.html',
				title: 'Feedback Comb Filters - Center for Computer Research in Music and Acoustics',
			},
		],
	},
	{
		id: 'complex-number',
		title: 'Complex Number',
		paragraphs: [
			'A complex number is a way to store and use two numbers (a vector) as if they were one.',
			'It\'s a number that consists of a real part and an an imaginary part bundled together in one package such as `5 + 4i`. The imaginary part is the part with the imaginary unit `i`.',
			'In dsp and electrical engineering, `j` is  used as the imaginary unit instead of `i` (which often denotes current).',
			'Complex numbers are graphed on the complex plane.',
		],
		links: [],
	},
	{
		id: 'complex-sinusoid',
		title: 'Complex Sinusoid',
		paragraphs: [
			'A signal\'s magnitude and phase stored together as one complex number.',
			'Can be thought of as two sinusoids, a cosine and sine of the same frequency, offset by 90 degrees in phase.',
			'Storing these two values in a complex number makes calculations and manipulation simpler in the frequency domain.',
		],
		links: [
			{
				href: 'https://ccrma.stanford.edu/~jos/filters/Plotting_Complex_Sinusoids_Circular.html',
				title: 'Complex Sinusoids as Circular Motion - Center for Computer Research in Music and Acoustics',
			},
		],
	},
	{
		id: 'conjugation',
		title: 'Conjugation',
		paragraphs: [
			'Change the sign of the imaginary part of a complex number.',
		],
	},
	{
		id: 'constructive-interference',
		title: 'Constructive interference',
		paragraphs: [
			'When one wave is added to another and they contain similar frequencies, then their magnitudes add up when the waves crest together.',
		],
		links: [
			{
				href: 'https://byjus.com/physics/constructive-interference/',
				title: 'Constructive Interference - Waves - Byju\'s',
			},
			{
				href: 'https://astronomy.swin.edu.au/cosmos/c/Constructive+Interference',
				title: 'Constructive Interference | COSMOS',
			},
			{
				href: 'https://www.physicsclassroom.com/class/waves/Lesson-3/Interference-of-Waves',
				title: 'Interference of Waves - Physics Tutorial',
			},
			{
				href: 'https://study.com/academy/lesson/constructive-and-destructive-interference.html',
				title: 'Constructive vs Destructive Interference | Definition & Overview',
			},
			{
				href: 'https://www.phys.uconn.edu/~gibson/Notes/Section5_2/Sec5_2.htm',
				title: '5.2 Constructive and Destructive Interference - UConn Physics',
			},
		],
	},
	{
		id: 'continuous-time',
		title: 'Continuous time',
		paragraphs: [
			'Analog signal',
		],
	},
	{
		id: 'convolution',
		title: 'Convolution',
		paragraphs: [
			'Operation where a signal gets combined with an another signal, usually an impulse response, to form a third signal.',
			'Mathematically, the operator used is a star ∗ which can be confusing since the star * is used to represent multiplication in most programming languages.',
			'Algorithmically, you slide a reversed version of the impulse response over the signal.',
			'Convolution in the time domain is equal to multiplication in the frequency domain.',
		],
		links: [
			{
				href: 'https://www.dspguide.com/ch6/2.htm',
				title: 'Convolution',
			},
			{
				href: 'https://docs.juce.com/master/classdsp_1_1Convolution.html#details',
				title: 'JUCE: Convolution Class Reference',
			},
		],
	},
	{
		id: 'correlation',
		title: 'Correlation',
		paragraphs: [
			'How similar 2 signals are to each other.',
			'It is determined with the dot product.',
			'See: autocorrelation and cross correlation.',
		],
		links: [
			{
				href: 'https://jackschaedler.github.io/circles-sines-signals/dotproduct2.html',
				title: 'Dot Products and Correlation - Circles, Sines, and Signals - jackSchaedler',
			},
		],
	},
	{
		id: 'cosine',
		title: 'Cosine',
		paragraphs: [
			'Given an angle in a triangle, cosine is equal to ratio of the length of the side adjacent to the length of the hypotenuse.',
			'On the unit circle (where the radius of 1 is the hypotenuse), it\'s the value of the x coordinate.',
			'One of the three main trigonometric functions.',
			'A cosine wave starts 1/4 cycle (90 degrees) earlier than a sine wave.',
		],
	},
	{
		id: 'cross-correlation',
		title: 'Cross correlation',
		expansion: 'Sliding Dot Product',
		paragraphs: [
			'A way to measure the similarity of 2 signals.',
			'Multiply the 2 signals together sample by sample while sliding one of them along the other (increasing lag).',
			'Mathematically very similar to convolution, which uses the same sliding dot product method but with one signal reversed in time.',
		],
	},
	{
		id: 'cutoff',
		title: 'Cutoff frequency',
		expansion: 'Corner frequency, Break frequency',
		paragraphs: [
			'Generic term for a chosen frequency where the signal above or below this will be changed.',
			'Low-pass, High-pass and Band-pass filters all rely on and typically offer the ability to change this frequency.',
		],
	},
	{
		id: 'cycle',
		title: 'Cycle',
		paragraphs: [
			'One complete iteration of a waveform.',
			'One cycle often has its period expressed as 360 degrees or 2π radians.',
		],
	},
	{
		id: 'dac',
		title: 'DAC',
		expansion: 'Digital to Analog Converter',
		paragraphs: [
			'Converts a digital signal to a continuous time, analog signal.',
			['The opposite of an ', {title: 'ADC', id: 'adc'}, '.'],
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
		id: 'signal',
		title: 'Signal',
		paragraphs: [
			'"A way to convey information"',
			'Amplitude as a function of time.',
			'On a computer, signals are discrete.',
		],
	},
	{
		id: 'simd',
		title: 'SIMD',
		expansion: 'Single instruction, multiple data',
		paragraphs: [
			'A type of optimized CPU instruction that operates on a vector instead of a single piece of data.',
		],
	},
];

export type Term = {
	id: string;
	title: string;
	expansion?: string;
	paragraphs: TermParagraph[];
	links?: TermExternalLink[];
};

export type TermExternalLink = {
	href: string;
	title: string;
};

export type TermInternalLink = {
	id: string;
	title: string;
};

export type TermParagraph = string | Array<string | TermInternalLink>;
