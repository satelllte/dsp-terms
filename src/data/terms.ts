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
		id: 'dc',
		title: 'DC',
		expansion: 'Direct current',
		paragraphs: [
			'In the DSP domain, DC refers to whether the signal adds up to 0.',
			'If the mean amplitude of a signal is 0, there\'s no DC bias, and it\'s DC balanced.',
		],
	},
	{
		id: 'decibel',
		title: 'Decibel',
		expansion: 'dB',
		paragraphs: [
			'A generic unit to measure relative sound volume logarithmically.',
			'The unit is relative to the quietest measurable sound for humans.',
			'An increase in +3dB doubles the amount of sound energy.',
			'Human hearing is able to perceive around 120dB worth of dynamic range.',
			'There are many other related units such as dBV, dBu, dB SPL.',
		],
		links: [
			{
				href: 'https://www.bhphotovideo.com/explora/pro-audio/tips-and-solutions/a-fun-and-good-humored-attempt-at-demystifying-10-dbv-and-4-dbu',
				title: 'Demystifying dBV and dBu - B&H Explora',
			},
			{
				href: 'https://stason.org/TULARC/entertainment/audio/pro/3-3-What-is-the-difference-between-dBv-dBu-dBV-dBm-dB.html',
				title: 'What is the difference between dBV, dBu, dBV, dBm, dB? - TULARC',
			},
			{
				href: 'https://en.wikipedia.org/wiki/Absolute_threshold_of_hearing',
				title: 'Absolute threshold of hearing - Wikipedia',
			},
		],
	},
	{
		id: 'decomposition',
		title: 'Decomposition',
		paragraphs: [
			'Breaking apart a signal into components, for example, into sine waves.',
			'This is what the DFT does.',
		],
	},
	{
		id: 'delay-line',
		title: 'Delay Line',
		expansion: 'Delay',
		paragraphs: [
			'A delay.',
			'The name used to refer to a line of electrical components that introduced a phase change between input and output signal. A bucket brigade is a classic analog example.',
			'Digitally, delay lines are implemented with a circular buffer.',
			'A building block used in comb filters and waveguide synthesis.',
		],
		links: [
			{
				href: 'https://en.wikipedia.org/wiki/Analog_delay_line',
				title: 'Analog delay line - Wikipedia',
			},
		],
	},
	{
		id: 'delay-tap',
		title: 'Delay Tap',
		paragraphs: [
			'The name for an output somewhere in a delay line.',
			'Multiple taps are used to get multiple echoes out of one delay line.',
		],
	},
	{
		id: 'destructive-interference',
		title: 'Destructive Interference',
		paragraphs: [
			'When two waves are superimposed and have similar frequency components, cancellation happens when the crest of one wave aligns with the trough of another.',
		],
	},
	{
		id: 'difference-equation',
		title: 'Difference Equation',
		paragraphs: [
			'The actual equation used to implement a filter, one sample at a time.',
			'y[n] = 1.5y[n-1] + 0.5x[n-2] + 0.5x[n]',
			'Discrete version of a differential equation.',
		],
	},
	{
		id: 'discontinuity',
		title: 'Discontinuity',
		paragraphs: [
			'A jump in a signal from one sample to another.',
			'Often will be reproduced as a click sound when played back.',
		],
	},
	{
		id: 'discrete',
		title: 'Discrete',
		expansion: 'Discrete Time, Digital Signal',
		paragraphs: [
			'A signal is discrete when it is broken down into a time series and represented by specific separate numbers called samples.',
			'A signal must be discrete to be stored in a computer.',
			'There are discrete forms of many signal processing functions, such as the discrete Fourier transform.',
			'In a math context, it\'s convention to refer to discrete units of time with square brackets like so x[n].',
		],
	},
	{
		id: 'discrete-fourier-transform',
		title: 'Discrete Fourier Transform',
		paragraphs: [
			'A practical implementation of the Discrete Time Fourier Transform that computers can perform.',
			'Converting a discrete signal from the time domain to the frequency domain.',
			'This is how we get the z-transform.',
			'There are a million things named Something Something Fourier Transform. This category just means it\'s in the digital domain.',
			'It\'s called a transform because it takes a function of one variable (time) and transforms it to a function of another (frequency).',
			'It results in complex numbers.',
			'Its implementation performs the inner product of the signal with sine waves of different frequencies to check which sine waves are present.',
		],
		links: [
			{
				href: 'https://www.youtube.com/watch?v=GW6654dYTD8',
				title: 'Discrete Fourier Transform - Julius Smith',
			},
			{
				href: 'https://ccrma.stanford.edu/~jos/mdft/mdft.html',
				title: 'The Mathematics of the Discrete Fourier Transform (DFT) - Julius Smith',
			},
		],
	},
	{
		id: 'discrete-time-fourier-transform',
		title: 'Discrete Time Fourier Transform',
		paragraphs: [
			'The mathematical (theoretical) form of Fourier transform used to analyze a function that is being sampled regularly over time.',
			'DFT is a practical implementation for computers.',
		],
	},
	{
		id: 'dot-product',
		title: 'Dot Product',
		expansion: 'Inner Product',
		paragraphs: [
			'A way to multiply two vectors.',
			'Walking through each element n of a vector/array and multiplying it by the same numbered element n of another vector and then summing those together.',
			'One of the two types of vector multiplication, the other being cross product.',
		],
		links: [
			{
				href: 'https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/dot-cross-products/v/vector-dot-product-and-vector-length',
				title: 'Vector dot product and vector length - Khan Academy',
			},
			{
				href: 'https://jackschaedler.github.io/circles-sines-signals/sine_wave_properties.html',
				title: 'Sine Wave Properties - Jack Schaedler',
			},
		],
	},
	{
		id: 'double',
		title: 'Double',
		paragraphs: [
			'A variable type similar to a float that uses 64 bits to store the value.',
			'A double has "double precision," which means it uses twice as many bits to store a value than a float does. A double uses 52 bits for the significand (significant digits), 11 bits for the exponent, and 1 for the sign.',
		],
	},
	{
		id: 'downsample',
		title: 'Downsample',
		paragraphs: [
			'To decrease the sampling rate of a signal.',
			'To prevent aliasing, it\'s common to low pass filter the signal before downsampling. These 2 operations together are called "decimation".',
			'Opposite of upsample.',
		],
	},
	{
		id: 'energy',
		title: 'Energy',
		paragraphs: [
			'For a discrete signal, energy is the sum of the squared magnitudes of a signal.',
		],
	},
	{
		id: 'fast-fourier-transform',
		title: 'Fast Fourier Transform',
		expansion: 'FFT',
		paragraphs: [
			'Algorithm invented in 1965 making it efficient to compute the discrete Fourier transform.',
			'The FFT is built to treat input as if it loops, so except for the case where the input signal is an integer number of cycles, you\'ll need to use a window function to improve accuracy.',
		],
		links: [
			{
				href: 'https://www.ams.org/journals/mcom/1965-19-090/S0025-5718-1965-0178586-1/S0025-5718-1965-0178586-1.pdf',
				title: 'An Algorithm for Machine Calculation of Complex Fourier Series',
			},
			{
				href: 'https://www.earlevel.com/main/2002/08/31/a-gentle-introduction-to-the-fft/',
				title: 'A Gentle Introduction to the FFT',
			},
			{
				href: 'https://betterexplained.com/articles/an-interactive-guide-to-the-fourier-transform/',
				title: 'An Interactive Guide To The Fourier Transform',
			},
		],
	},
	{
		id: 'feedback-delay',
		title: 'Feedback Delay',
		expansion: 'Feedback Comb Filter, Recirculating Delay',
		paragraphs: [
			'A copy of the output is added back to the input signal after a certain time.',
			'Considered an IIR filter because given an input signal, it theoretically keeps producing output forever.',
			'The comb filter peaks produced by the feedback delay are tighter and more narrow and spiky than the feedforward delay.',
		],
	},
	{
		id: 'feedforward-delay',
		title: 'Feedforward',
		expansion: 'Feedforward Comb Filter, Non-recirculating',
		paragraphs: [
			'The simplest form of delay.',
			'A copy of the input is added back to the input signal after a certain time.',
			'Technically considered an FIR filter because when the input stops, the output stops.',
		],
	},
	{
		id: 'filter',
		title: 'Filter',
		paragraphs: [
			'A formula or function for going from one signal to another.',
		],
		links: [
			{
				href: 'https://www.dsprelated.com/freebooks/filters/What_Filter.html',
				title: 'What is a Filter? - DSPRelated.com',
			},
		],
	},
	{
		id: 'finite-impulse-response',
		title: 'Finite Impulse Response (FIR) Filter',
		expansion: 'Feed Forward Filter',
		paragraphs: [
			'A type of filter where some frequencies go to zero.',
			'These filters only exist digitally, analog filters are all IIR.',
			'Named because the impulse response is finite and the filter is stable, no feedback is possible.',
			'Example: A normal, non-feedbacking delay. When the input stops, the output stops (after the delay line empties out).',
		],
		links: [
			{
				href: 'https://dspguru.com/dsp/faqs/fir/basics/',
				title: 'FIR Basics - DSPGuru',
			},
		],
	},
	{
		id: 'float',
		title: 'Float',
		expansion: 'Floating point number',
		paragraphs: [
			'The default variable type in most DSP libraries.',
			'A 32 bit floating point uses 23 bits to represent the significand (significant digits), 8 bits for the exponent, and 1 sign bit.',
			'The name refers to the fact that the decimal in the number "floats" — it can be placed anywhere in the significant digits via specifying the exponent value.',
			'They are also called single precision, as the double uses twice the number of significant digits.',
			'CPU speed is often measured in FLOPS, or floating points operations per second.',
		],
		links: [
			{
				href: 'https://web.stanford.edu/class/cs101/bits-bytes.html',
				title: 'Bits and Bytes - Stanford CS101',
			},
		],
	},
	{
		id: 'fourier-transform',
		title: 'Fourier transform',
		paragraphs: [
			'A mathematical transform that converts a function of amplitude over time (a signal) into complex numbers containing magnitude and phase.',
			'It\'s used as a noun for a signal\'s representation in the frequency domain.',
			'The transform is reversible. See inverse Fourier transform.',
		],
	},
	{
		id: 'fractional-delay-line',
		title: 'Fractional delay line',
		paragraphs: [
			'A simple digital delay line implementation might support delay times that are integer number of samples long, such as 10 samples.',
			'A fractional delay line uses linear interpolation to support delay times that fall between an integer number of samples, such as 10.687 samples long.',
		],
	},
	{
		id: 'frame',
		title: 'Frame',
		paragraphs: [
			'A series of samples, batched together for processing.',
			'Think of the buffer size on your favorite DAW.',
		],
	},
	{
		id: 'frequency',
		title: 'Frequency',
		paragraphs: [
			'Number of cycles per time period, usually per second. See: Hertz.',
		],
	},
	{
		id: 'frequency-domain',
		title: 'Frequency Domain',
		expansion: 'Z domain',
		paragraphs: [
			'The spectrum of a signal.',
			'Representing a signal by specifying magnitude of each frequency for specific buckets of time.',
			'What the Discrete Fourier Transform or other Fourier flavors result in.',
			'The \'opposite\' of time domain.',
		],
	},
	{
		id: 'frequency-modulation-synthesis',
		title: 'Frequency Modulation Synthesis',
		expansion: 'FM synthesis, FM, Phase Modulation',
		paragraphs: [
			'One signal called the \'modulator\' changes the pitch of another signal called the \'carrier\' to create rich harmonic and inharmonic sounds.',
			'Technically it\'s the phase of a carrier signal that\'s modulated by the modulator, so FM synthesis is actually phase modulation (not frequency modulation).',
		],
	},
	{
		id: 'frequency-response',
		title: 'Frequency Response',
		paragraphs: [
			'How a filter responds in the frequency domain to an impulse.',
			'The impulse response characterizes a system in the time domain.',
		],
	},
	{
		id: 'gibbs-phenomenon',
		title: 'Gibbs Phenomenon',
		paragraphs: [
			'The Fourier series sucks for square, saw, and other waves that aren\'t smoothly interpolating between values.',
			'Trying to model these types of waves with results in overshoot and rippling, causing ringing.',
		],
	},
	{
		id: 'group-delay',
		title: 'Group Delay',
		expansion: 'Envelope Delay',
		paragraphs: [
			'Delay in amplitude, as a function of frequency.',
			'The derivative (rate of change) of the phase of a filter.',
		],
	},
	{
		id: 'haas-effect',
		title: 'Haas Effect',
		paragraphs: [
			'When two identical signals are mixed together with a delay of under 30ms, it appears as a tone. When it\'s >= 30ms, it appears as two distinct signals.',
		],
	},
	{
		id: 'hard-sync',
		title: 'Hard Sync',
		paragraphs: [
			'One oscillator causes second oscillator to reset its cycle on the first\'s schedule, forcing their frequencies to be the same.',
			'Assuming the original frequency of the second oscillator isn\'t the exact same as the first, the result is more complex waveforms with desirable harmonics.',
		],
	},
	{
		id: 'hertz',
		title: 'Hertz',
		expansion: 'Hz',
		paragraphs: [
			'Cycles per second. A 440Hz waveform has 440 periods happening per second.',
		],
	},
	{
		id: 'high-pass-filter',
		title: 'High-pass filter',
		paragraphs: [
			'A filter that lets through all frequencies higher than a certain cutoff frequency.',
		],
	},
	{
		id: 'impulse',
		title: 'Impulse',
		paragraphs: [
			'A signal that is 0 everywhere except at one sample, where it is 1.',
			'When fed through a filter, it produces an impulse response.',
		],
	},
	{
		id: 'impulse-response',
		title: 'Impulse Response',
		paragraphs: [
			'How something (like a filter) responds when you send an impulse through it.',
			'Characterizes a system in the time domain whereas a transfer function characterizes it in the frequency domain.',
		],
		links: [
			{
				href: 'https://www.recordingblogs.com/wiki/impulse-response',
				title: 'Recording Blogs - Impulse Response',
			},
		],
	},
	{
		id: 'infinite-impulse-response-filter',
		title: 'Infinite Impulse Response (IIR) Filter',
		paragraphs: [
			'A recursive filter that relies on previous inputs and outputs, making some frequencies go to infinity.',
			'This is what 99.9% of analog filters are, including all the fancy names like Butterworth, Chebyshev, Moog Ladder Filter.',
			'Named because the output could theoretically keep going on forever, even after the input stops, so the impulse response is technically infinite.',
			'Example: A feedback delay theoretically will always output some smaller and smaller signal, even after the input signal stops.',
		],
		links: [
			{
				href: 'https://ccrma.stanford.edu/~jos/pasp/Feedback_Comb_Filters.html',
				title: 'Feedback Comb Filters - Stanford CCRMA',
			},
		],
	},
	{
		id: 'inner-product',
		title: 'Inner product',
		paragraphs: [
			'The main thing that the discrete Fourier transform does.',
			'Take two signals, walk through each element, multiply them together, then sum up the products to get a single value.',
			'It measures the similarity, or amount of correlation, two signals have.',
		],
		links: [
			{
				href: 'https://jackschaedler.github.io/circles-sines-signals/dotproduct2.html',
				title: 'Circle, Sines, and Signals - Inner Product',
			},
			{
				href: 'https://ccrma.stanford.edu/~jos/mdft/Inner_Product.html',
				title: 'Stanford CCRMA - Inner Product',
			},
			{
				href: 'https://en.wikipedia.org/wiki/Dot_product#Complex_vectors',
				title: 'Wikipedia - Dot Product',
			},
		],
	},
	{
		id: 'interference',
		title: 'Interference',
		paragraphs: [
			'An complicated way to say that an signal has combined with another signal, producing a third signal.',
			'When that third resultant signal has less amplitude than the original, we call it \'destructive\'. When the third signal has more amplitude, we call it \'constructive.\'',
		],
	},
	{
		id: 'interpolation',
		title: 'Interpolation',
		paragraphs: [
			'Creating in-between samples from existing samples via an algorithm.',
			'This can be seen as upsampling.',
			'Linear Interpolation is a computationally cheap and popular method.',
		],
	},
	{
		id: 'inverse-fourier-transform',
		title: 'Inverse Fourier Transform',
		paragraphs: [
			'Mathematical process that converts complex values representing a signal in the frequency domain to a time domain.',
			'The opposite of the Fourier Transform.',
		],
	},
	{
		id: 'lag',
		title: 'Lag',
		paragraphs: [
			'A quantity of time in samples used in functions such as autocorrelation.',
		],
	},
	{
		id: 'laplace-transform',
		title: 'Laplace transform',
		paragraphs: [
			'Going from analog to digital domain to produce a difference equation.',
		],
	},
	{
		id: 'latency',
		title: 'Latency',
		paragraphs: [
			'A delay by a certain amount of time.',
			'In a DAW context, this is the amount of time the DAW is taking to process playback, often specified in powers of 2, such as 64, 128, 512, etc.',
		],
	},
	{
		id: 'linear',
		title: 'Linear',
		paragraphs: [
			'A filter or system that obeys the superposition principle.',
			'Opposite of non-linear.',
		],
	},
	{
		id: 'linear-feedback-shift-register',
		title: 'Linear Feedback Shift Register',
		expansion: 'LFSR',
		paragraphs: [
			'An efficient way of generating deterministic, pseudo-random numbers.',
			'A set of individual bits that shift to the right on each iteration (shift register), where the leftmost \'input\' bit is created by combining other bits, often via XOR.',
		],
		links: [
			{
				href: 'https://www.youtube.com/watch?v=Ks1pw1X22y4',
				title: 'Video: Linear Feedback Shift Register',
			},
		],
	},
	{
		id: 'linear-interpolation',
		title: 'Linear Interpolation',
		expansion: 'Lerp',
		paragraphs: [
			'Finding a value somewhere between two points.',
			'When you have a discrete signal, you sometimes want to find an arbitrary value between two samples. You can do this by drawing a line between them.',
		],
	},
	{
		id: 'linear-phase',
		title: 'Linear Phase',
		paragraphs: [
			'A type of filter (usually FIR) where all frequency components are delayed in time by a constant amount.',
			'It avoids phase distortion.',
		],
		links: [
			{
				href: 'https://www.dspguide.com/ch19/4.htm',
				title: 'Linear Phase - DSP Guide',
			},
		],
	},
	{
		id: 'linear-time-invariant-filter',
		title: 'Linear Time Invariant (LTI) Filter',
		paragraphs: [
			'This is a category of filters that are:',
			'1. Linear, which means the sum of two signals going through a filter results in the same output as when they go through the filter individually and get summed afterwards.',
			'2. Time Invariant, which means a sample going through the filter is always going to have the same output no matter WHEN it goes through.',
		],
	},
	{
		id: 'logarithm',
		title: 'Logarithm',
		expansion: 'log',
		paragraphs: [
			'Inverse mathematical function to taking the exponent of a number.',
			'Almost all human perception, including hearing occurs on a logarithmic scale.',
		],
		links: [
			{
				href: 'https://en.wikipedia.org/wiki/Weber–Fechner_law',
				title: 'Weber-Fechner Law - Wikipedia',
			},
		],
	},
	{
		id: 'low-pass-filter',
		title: 'Low-pass Filter',
		expansion: 'LPF',
		paragraphs: [
			'A filter that lets through all frequencies lower than a certain (cutoff) frequency.',
		],
	},
	{
		id: 'magnitude',
		title: 'Magnitude',
		paragraphs: [
			'Absolute value of some measured amount.',
			'For example, a DFT bin has a magnitude.',
			'Unlike amplitude, it\'s always a positive value.',
		],
	},
	{
		id: 'mantissa',
		title: 'Mantissa',
		paragraphs: [
			'Historically, the digits after the decimal point in a logarithm.',
			'Also used as a synonym to significand.',
		],
	},
	{
		id: 'non-linear',
		title: 'Non-linear',
		paragraphs: [
			'Describes a filter or a system where the',
			'Distortion. Compression.',
			'Harmonics are created.',
			'Characteristic curve is no longer just a line.',
		],
	},
	{
		id: 'nyquist',
		title: 'Nyquist',
		paragraphs: [
			'Half of the sampling rate.',
			'The highest frequency that a digital signal can store at a given sample rate.',
			'Generated frequencies that are higher than the nyquist will \'fold\' over and alias.',
		],
	},
	{
		id: 'operator',
		title: 'Operator',
		paragraphs: [
			'A building block of FM synthesis, comprised of an input, an oscillator, an amplifier and an output.',
		],
	},
	{
		id: 'order',
		title: 'Order',
		expansion: 'Transfer Function Order',
		paragraphs: [
			'Max of numerator or denominator orders.',
			'Filter order = number of poles or zeros, whichever is greater.',
		],
	},
	{
		id: 'orthogonal',
		title: 'Orthogonal',
		paragraphs: [
			'Perpendicular.',
			['Dot product', {id: 'dot-product', title: ' is zero.'}],
			'Sine and Cosine are orthogonal.',
		],
		links: [
			{
				href: 'https://www.dsprelated.com/freebooks/mdft/Orthogonality.html',
				title: 'https://www.dsprelated.com/freebooks/mdft/Orthogonality.html',
			},
			{
				href: 'https://jackschaedler.github.io/circles-sines-signals/sine_wave_properties.html',
				title: 'https://jackschaedler.github.io/circles-sines-signals/sine_wave_properties.html',
			},
		],
	},
	{
		id: 'passband',
		title: 'Passband',
		paragraphs: [
			'A range of frequencies that will pass through untouched by a filter.',
			'The other frequencies will either be in the stopband or in the rolloff',
		],
	},
	{
		id: 'period',
		title: 'Period',
		expansion: 'Periodic Time',
		paragraphs: [
			'How long a cycle of a waveform takes, in time or samples.',
			'Sometimes used interchangeably with cycle but technically the period of is the duration in time of 1 cycle.',
			'Reciprocal of frequency. One cycle often has its period expressed as 360 degrees or 2π radians.',
			'Real signals aren\'t usually periodic.',
		],
	},
	{
		id: 'periodic-signal',
		title: 'Periodic signal',
		paragraphs: [
			'A signal that repeats itself regularly and therefore has pitch.',
			'Generated sine, saw, square waves are good examples.',
			'Wavetable synthesis stores one cycle of a waveform and uses it to generate periodic waveforms.',
		],
	},
	{
		id: 'phase-angle',
		title: 'Phase Angle',
		expansion: 'theta, θ, phase, angle',
		paragraphs: [
			'Phase is the position in the cycle of a waveform. The phase angle is a fraction of a full cycle of 360 degrees or 2π radians.',
			'One of the two components of a signal in the frequency domain, the other being magnitude.',
			'θ (lowercase theta) is used as the variable to represent the angle in math.',
		],
	},
	{
		id: 'phase-distortion',
		title: 'Phase Distortion',
		paragraphs: [
			'A filter that\'s not linear phase introduces different delays for different frequency components.',
			'The shape of the waveform changes.',
		],
	},
	{
		id: 'phase-shift',
		title: 'Phase Shift',
		paragraphs: [
			'The offset or difference in phase of two waveforms.',
			'A cosine wave is a sine wave shifted π/2 radians "left" earlier',
		],
	},
	{
		id: 'phasor',
		title: 'Phasor',
		expansion: 'Sinor, Complexor',
		paragraphs: [
			'A complex number storing amplitude, frequency, and phase.',
		],
	},
	{
		id: 'polar-form',
		title: 'Polar Form',
		paragraphs: [
			'A notation for complex numbers that uses sine and cosine instead of real and imaginary numbers.',
		],
	},
	{
		id: 'poles',
		title: 'Poles',
		paragraphs: [
			'The name comes from plotting the magnitude of the transfer function as a function of z.',
			'Something something denominator approaching infinity.',
			'A point, or a value of z for which the equation is equal to infinity is called a pole. A point, or a value z for which the equation is equal to zero is called a zero. The location of poles and zeros can tell you a lot about the frequency response of a filter.',
		],
	},
	{
		id: 'power',
		title: 'Power',
		paragraphs: [
			'Power is the rate of energy per time unit.',
			'In a signal, power is proportional to amplitude squared.',
			'Unlike the analog world, which measures power in Watts, in dsp, power doesn\'t have a physical unit.',
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
		id: 'quadrature-oscillator',
		title: 'Quadrature Oscillator',
		paragraphs: [
			'An oscillator that produces values for both sine and cosine.',
		],
	},
	{
		id: 'radian',
		title: 'Radian',
		paragraphs: [
			'A unit of measure, like degrees but expressed with π.',
			'1 radian is the angle made at the center of a circle by an arc whose length is equal to the radius of the circle.',
			'A full circle has 2π radians.',
			'Rad for short. So rad.',
		],
	},
	{
		id: 'rectification',
		title: 'Rectification',
		paragraphs: [
			'Absolute value.',
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
