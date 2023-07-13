# Terms raw

The file contains a copy of definitions from https://github.com/sudara/dspjargon/tree/master/definitions, which aren't in the landing page yet.

## ~[Beats](#beats)~ Beat frequency

~When two signals have slightly different frequencies~

Occurs when two waves with different frequencies overlap, causing a cycle of alternating constructive and destructive interference between waves.

## [Buffer](#buffer)

A bunch of values stored contiguously in memory.

Instead of expecting programs to handle real time audio one value at a time, values are batched into buffers for more efficient processing.

[Delay lines](#delay-line) are implemented with buffers.

Your [DAW](#daw) has input and output buffers to help insure artifact-free and CPU-overload free performance.


## [Causal-filter](#causal-filter)

A filter whose output doesn't depend on any future inputs.

Basically all real time filters are causal.

---
1. https://www.dsprelated.com/freebooks/filters/Causal_Recursive_Filters.html


## [Cepstrum](#cepstrum)

The result of performing the [inverse fourier transform](#inverse-fourier-transform) of the [logarithm](#logarithm) of a [spectrum](#spectrum).

Expresses the rate of change of [spectrum](#spectrum) over time, and is useful for investigating periodicity, presence of harmonics, etc.

The word "Cepstrum" has the first four letters of "Spectrum" reversed. How fun. Don't get me started on Quefrency...


## [Characteristic Curve](#characteristic-curve)
*i/o curve*

Amplitude plot of input to output.


## [Circular Buffer](#circular-buffer)
*Ring Buffer*

A fixed-size block of memory that once you get to the end of reading/writing to it, you wrap back around to the start.

An implementation is a [delay line](#delay-line).


## [Coefficient](#coefficient)
*Multiplicative Factor*

A number.

A number that's used for scaling things, such as the [magnitude](#magnitude) of a signal.

In the case of a [feedforward delay](#feedforward-delay) like the following, the 1.5 and 0.5 are both coefficients.

$$y[n] = 1.5x[n-1] + 0.5x[n]$$

In Fourier Analysis, the magnitude and phase of a particular frequency bin are referred to as "the coefficients".


## [Comb Filter](#comb-filter)

What happens when you add a delayed copy of a signal to itself, whether it be [feedforward](#feedforward-delay) or [feedback](#feedback-delay).

Named because the resulting [frequency response](#frequency-response) visually resembles a comb.

---

1. https://ccrma.stanford.edu/~jos/pasp/Feedback_Comb_Filters.html


##[Combination Tone](#combination-tone)



## [Complex Number](#complex-number)

A complex number is a way to store and use two numbers (a [vector](#vector)) as if they were one.

It's a number that consists of a real part and an an imaginary part bundled together in one package such as `5 + 4i`. The imaginary part is the part with the imaginary unit `i`.

In dsp and electrical engineering, `j` is  used as the imaginary unit instead of `i` (which often denotes current).

Complex numbers are graphed on the [complex plane](#complex-plane).


## [Complex Sinusoid](#complex-sinusoid)

A signal's magnitude and phase stored together as one complex number.

Can be thought of as two sinusoids, a cosine and sine of the same frequency, offset by 90 degrees in phase.

Storing these two values in a complex number makes calculations and manipulation simpler in the frequency domain.

---

1. https://ccrma.stanford.edu/~jos/filters/Plotting_Complex_Sinusoids_Circular.html


## [Conjugation](#conjugation)

Change the sign of the imaginary part of a [complex number](#complex-number).


## [Constructive Interference](#constructive-interference)

When one wave is added to another and they contain similar frequencies, then their magnitudes add up when the waves crest together.


## [Continuous time](#continuous-time)
*Analog Signal*



## [Convolution](#convolution)

Operation where a signal gets combined with an another signal, usually an [impulse response](#impulse-response), to form a third signal.

Mathematically, the operator used is a star ∗ which can be confusing since the star * is used to represent multiplication in most programming languages.

Algorithmically, you slide a reversed version of the impulse response over the signal.

Convolution in the [time domain](#time-domain) is equal to multiplication in the [frequency domain](#frequency-domain)

---

1. https://www.dspguide.com/ch6/2.htm
2. https://docs.juce.com/master/classdsp_1_1Convolution.html#details


## [Correlation](#correlation)

How similar 2 signals are to each other.

It is determined with the [dot product](#dot-product).

See: [autocorrelation](#autocorrelation) and [cross correlation](#cross-correlation).

---

1. https://jackschaedler.github.io/circles-sines-signals/dotproduct2.html


## [Cosine](#cosine)

Given an angle in a triangle, cosine is equal to ratio of the length of the side adjacent to the length of the hypotenuse. 

On the unit circle (where the radius of 1 is the hypotenuse), it's the value of the x coordinate. 

One of the three main trigonometric functions.

A cosine wave starts 1/4 cycle (90 degrees) earlier than a sine wave. 


## [Cross Correlation](#cross-correlation)
*Sliding Dot Product*

A way to measure the similarity of 2 signals.

Multiply the 2 signals together sample by sample while sliding one of them along the other (increasing [lag](#lag)).

Mathematically very similar to [convolution](#convolution), which uses the same sliding dot product method but with one signal reversed in time.


## [Cutoff Frequency](#cutoff)
*Corner Frequency*
*Break Frequency*

Generic term for a chosen frequency where the signal above or below this will be changed.

[Low-pass](#lowpass), [High-pass](#highpass) and [Band-pass](#bandpass) filters all rely on and typically offer the ability to change this frequency.


## [Cycle](#cycle)

One complete iteration of a waveform.

One cycle often has its [period](#period) expressed as 360 [degrees](#degree) or 2π [radians](#radian).


## [DC](#dc)

Direct Current.

in DSP domain, it's really just "does the signal add up to 0".

If the mean amplitude of a signal is 0, there's no DC bias, and it's DC balanced.


## [Decibel](#decibel)
*dB*

A generic unit to measure relative sound volume logarithmically.

The unit is relative to the quietest measurable sound for humans.

As increase in +3db doubles the amount of sound energy.

Human hearing is able to perceive around 120db worth of dynamic range.

There are many other related units such as dBV, dBu, dB SPL.

---

1. [Demystifying dBV and dBu](https://www.bhphotovideo.com/explora/pro-audio/tips-and-solutions/a-fun-and-good-humored-attempt-at-demystifying-10-dbv-and-4-dbu)
2. https://stason.org/TULARC/entertainment/audio/pro/3-3-What-is-the-difference-between-dBv-dBu-dBV-dBm-dB.html
3. https://en.wikipedia.org/wiki/Absolute_threshold_of_hearing


## [Decomposition](#decomposition)

Breaking apart a signal into components, for example, into sine waves.

This is what the [DFT](#dft) does.


## [Delay Line](#delay-line)
*Delay*

"A delay."

The name used to refer to a line of electrical components that introduced a phase change between input and output signal. A [bucket brigade](#bucket-brigade) is a classic analog example.

Digitally, delay lines are implemented with a [circular buffer](#circular-buffer).

A building block used in [comb filters](#comb-filter) and [waveguide](#waveguide) synthesis.

---

1. https://en.wikipedia.org/wiki/Analog_delay_line


## [Delay Tap](#delay-tap)

The name for an output somewhere in a [delay line](#delay-line).

Multiple taps are used to get multiple echos out of one [delay line](#delay-line).


## [Destructive Interference](#destructive-interference)

When two waves are super-imposed and have similar frequency components, cancellation happens when the crest of one wave aligns with the trough of another.


## [Difference Equation](#difference-equation)

The actual equation used to implement a filter, one sample at a time.

$$y[n] = 1.5y[n-1] + 0.5x[n-2] + 0.5x[n]$$

[Discrete](#discrete) version of a [differential equation](#differential-equation).


## [Differential Equation](#differential-equation)



## [Discontinuity](#discontinuity)

A jump in a signal from one [sample](#sample) to another. 

Often will be reproduced as a click sound when played back. 


## [Discrete](#discrete)
*Discrete Time*
*Digital Signal*

A signal is discrete when it is broken down into a [time series](#time-series) and represented by specific separate numbers called [samples](#sample).

A signal must be discrete to be stored in a computer.

There are discrete forms of many signal processing functions, such as the [discrete fourier transform](#discrete-fourier-transform).

In a math context, it's convention to refer to discrete units of time with square brackets like so `x[n]`.


## [Discrete Fourier Transform](#DFT)

A practical implementation of the [Discrete Time Fourier Transform](#DTFT) that computers can perform.

Converting a [discrete](#discrete) signal from the [time domain](#time_domain) to the [frequency domain](#frequency-domain).

This is how we get the [z-transform](#z-transform)

There are a million things named Something Something Fourier Transform. This is a category just means it's  digital domain.

It's called a transform because it takes a function of one variable (time) and transforms it to a function of another (frequency).

It results in [complex numbers](#complex_numbers).

Its implementation performs the [inner product](#inner_product) of the signal with sine waves of different frequencies to check which sine waves are present.

---

1. Julius Smith walks his CCRMA 320A course through it in 2013: https://www.youtube.com/watch?v=GW6654dYTD8
2. https://ccrma.stanford.edu/~jos/mdft/mdft.html


## [Discrete Time Fourier Transform](#DTFT)

The mathematical (theoretical) form of [Fourier transform](#fourier-transform) used to analyze a function that is being [sample](#sampled) regularly over time.

[DFT](#DFT) is a practical implementation for computers.


## [Dot Product](#dot-product)
*Inner Product*

A way to multiply two [vectors](#vector).

Walking through each element `n` of a [vector](#vector)/array and multiplying it by the same numbered element `n` of another vector and then summing those together.

One of the two types of [vector](#vector) multiplication, the other being [cross product](#cross-product).

---

1. https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/dot-cross-products/v/vector-dot-product-and-vector-length
2. https://jackschaedler.github.io/circles-sines-signals/sine_wave_properties.html


## [Double](#double)

A variable type similar to a [float](#float) that uses 64 bits to store the value.

A double has "double precision," which means it uses twice as many bits to store a value than a float does. A double uses 52 bits for the significand (significant digits), 11 bits for the exponent, and 1 for the sign.


## [Downsample](#downsample)

To decrease the [sampling rate](#sample_rate) of a signal.

To prevent [aliasing](#alias), it's common to [low pass](#low_pass) filter the signal before downsampling. These 2 operations together is called "decimation". 

Opposite of [upsample](#upsample).


## [Energy](#energy)

For a [discrete](#discrete) signal, energy is the sum of the squared [magnitudes](#magnitude) of a signal.


$$\sum_{n=-\infty}^{\infty}{|x(n)|^2}$$


## [Envelope](#envelope)



## [Fast Fourier Transform](#fast_fourier_transform)
*FFT*

Algorithm invented in 1965 making it efficient to compute the [discrete Fourier transform](#discrete_fourier_transform).

The FFT is built to treat input as if it loops, so except for the case where the input signal is an integer number of cycles, you'll need to use a [window function](#window-function) to improve accuracy.

---
1. [An Algorithm for Machine Calculation of Complex Fourier Series](https://www.ams.org/journals/mcom/1965-19-090/S0025-5718-1965-0178586-1/S0025-5718-1965-0178586-1.pdf)
2. https://www.earlevel.com/main/2002/08/31/a-gentle-introduction-to-the-fft/
3. https://betterexplained.com/articles/an-interactive-guide-to-the-fourier-transform/


## [Feedback Delay](#feedback-delay)
*Feedback Comb Filter*
*Recirculating Delay*

A copy of the output is added back to the input signal after a certain time.

Considered an [IIR](#IIR) filter because given an input signal, it theoretically keeps producing output forever.

The comb filter peaks produced by the feedback delay are tighter and more narrow and spiky than the [feedforward delay](#feedforward-delay).


## [Feedforward](#feedforward-delay)
*Feedforward Comb Filter*
*Non-recirculating*

The simplest form of delay.

A copy of the input is added back to the input signal after a certain time.

Technically considered an [FIR](#FIR) filter because when the input stops, the output stops.


## [Filter](#filter)

A formula or function for going from one signal to another.

---

1. https://www.dsprelated.com/freebooks/filters/What_Filter.html


## [Finite Impulse Response (FIR) Filter](#FIR)
*Feed Forward Filter*

A type of [filter](#filter) where some frequencies go to zero.

These filters only exist digitally, analog filters are all [IIR](#IIR).

Named because the [impulse response](#impluse_response) is finite and the filter is stable, no feedback is possible.

Example: A normal, non-feedbacking delay. When the input stops, the output stops (after the delay line empties out).

---

1. https://dspguru.com/dsp/faqs/fir/basics/


## [Float](#float)
*Floating point number*

The default variable type in most DSP libraries.

A 32 bit floating point uses 23 bits to represent the significand (significant digits), 8 bits for the exponent, and 1 sign bit.

The name refers to the fact that the decimal in the number "floats" — it can be placed anywhere in the significant digits via specifying the exponent value.

They are also called single precision, as the [double](#double) uses twice the number of significant digits.

CPU speed is often measured in FLOPS, or floating points operations per second.

---
1. https://web.stanford.edu/class/cs101/bits-bytes.html


## [Floating Point](#floating-point)



## [Frequency Modulation](#fm)


---
1. https://ccrma.stanford.edu/software/snd/snd/fm.html


## [Fourier Transform](#fourier-transform)

A mathematical transform that converts a function of [amplitude](#amplitude) over time (a [signal](#signal)) into [complex](#complex-numbers) numbers containing [magnitude](#magnitude) and [phase](#phase).

It's used as a noun for a signal's representation in the [frequency domain](#frequency-domain).

The transform is reversible. See [inverse Fourier transform](#inverse-fourier-transform).


## [Fractional Delay Line](#fractional-delay-line)

A a simple digital [delay line](#delay-line) implementation might support delay times that are integer number of samples long, such as 10 samples.

A fractional delay line uses [linear interpolation](#linear-interpolation) to support delay times that fall between an integer number of samples, such as 10.687 samples long.


## [Frame](#frame)

A series of [samples](#sample), batched together for processing.

Think of the buffer size on your favorite DAW.


## [Frequency](#frequency)

Number of cycles per time period, usually per second. See: [Hertz](#hertz).


## [Frequency Domain](#frequency-domain)
*Z domain*

The spectrum of a signal.

Representing a signal by specifying magnitude of each frequency for specific buckets of time.

What the [Discrete Fourier Transform](#DFT) or other Fourier flavors result in.

The "opposite" of [time domain](#time-domain).


## [Frequency Modulation Synthesis](#frequency-modulation-synthesis)
*FM synthesis*
*FM*
*Phase Modulation*

One signal called the "modulator" changes the pitch of another signal called the "carrier" to create rich harmonic and inharmonic sounds.

Technically it's the phase of a carrier signal that's modulated by the modulator, so FM synthesis is actually  phase modulation (not frequency modulation).


## [Frequency Response](#frequency-response)

How a [filter](#filter) responds in the [frequency domain](#frequency_domain) to an [impulse](#impulse).

The [impulse response](#impulse_response) characterizes a system in the [time domain](#timesdomain).


##[Gibbs Phenomenon](#gibbs)

The Fourier series sucks for square, saw, and other waves that aren't smoothly interpolating between values.

Trying to model these types of waves with results in overshoot and rippling, causing ringing.


## [Glitch](#glitch)
*Discontinuity*


## [Group Delay](#group-delay)
*Envelope Delay*

Delay in amplitude, as a function of frequency.

The derivative (rate of change) of the phase of a [filter](#filter).

---

1. https://dsp.stackexchange.com/questions/206/what-is-the-difference-between-phase-delay-and-group-delay


## [Haas Effect](#haas-effect)

When two identical signals are mixed together with a delay of under 30ms, it appears as a tone. When it's >= 30ms, it appears as two distinct signals.



## [Hard Sync](#hard-sync)

One [oscillator](#oscillator) causes second oscillator to reset its [cycle](#cycle) on the first's schedule, forcing their frequencies to be the same. 

Assuming the original frequency of the second oscillator isn't the exact same as the first, the result is more complex waveforms with desirable harmonics.  


## [Hertz](#hertz)
*cps*

Cycles per second. A 440Hz waveform has 440 [periods](#periods) happening per second.


## [Heterodyne](#heterodyne)

Related to [beats](#beats).


# [High-pass filter](#high_pass_filter)
*HPF*

A [filter](filter) that lets through all frequencies higher than a certain ([cutoff](#cutoff)) frequency.

See also: [Low-pass filter](#lowpass).


## [Hilbert Transform](#hilbert-transform)



## [Impulse](#impulse)
*Unit Impulse*
*Unit Impulse function*
*Delta function*

A signal that is 0 everywhere except at one sample, where it is 1.

When fed through a [filter](#filter), it produces an [impulse response](#impulse-response).


## [Impulse Response](#impulse_response)

How something (like a [filter](#filter)) responds when you send an [impulse](#impulse) through it.

Characterizes a system in the [time domain](#time_domain) whereas a [transfer function](#transfer_function) characterizes it in the [frequency domain](#frequency_domain).

---

1. https://www.recordingblogs.com/wiki/impulse-response


## [Infinite Impulse Response (IIR) Filter](#IIR)

A recursive [filter](#filter) that relies on previous inputs and outputs, making some frequencies go to infinity.

This is what 99.9% of analog [filters](#filter) are, including all the fancy names like Butterworth, Chebyshev, Moog Ladder Filter.

Named because the output could theoretically keep going on forever, even after the input stops, so the [impulse response](#impulse-response) is technically infinite.

Example:

A [feedback delay](#feedback_delay) theoretically will always output some smaller and smaller signal, even after the input signal stops.



## [Inner Product](#inner_product)
*Dot Product*
*Scalar Product*

The main thing that the [discrete fourier transform](#DFT) does.

Take two signals, walk through each element, multiply them together, then sum up the products to get a single value.

It measures the similarity, or amount of correlation, two signals have.

---
1. https://jackschaedler.github.io/circles-sines-signals/dotproduct2.html
2. https://ccrma.stanford.edu/~jos/mdft/Inner_Product.html
3. https://en.wikipedia.org/wiki/Dot_product#Complex_vectors


## [Interference](#interference)
*constructive interference*
*destructive interference*

An complicated way to say that an signal has combined with another signal, producing a third signal.

When that third resultant signal has less [amplitude](#amplitude) than the original, we call it "destructive". When the third signal has more amplitude, we call it "constructive."


## [Interpolation](#interpolation)

Creating in-between samples from existing samples via an algorithm.

This can be seen as [upsampling].

[Linear Interpolation](#linear interpolation) is a computationally cheap and popular method. 


## [Inverse Fourier Transform](#inverse-fourier-transform)

Mathematical process that converts [complex](#complex-number) values representing a signal in the [frequency domain](#frequency-domain) to a [time domain](#time-domain).

The opposite of the [Fourier Transform](#fourier-transform).


## [Lag](#lag)

A quantity of time in [samples](#samples) used in functions such as [autocorrelation](#autocorrelation).


## [Laplace transform]

Going from analog to digital domain to produce a [difference equation](#difference-equation).


## [Latency](#latency)

A delay by a certain amount of time.

In a [DAW](#DAW) context, this is the amount of time the DAW is taking to process playback, often specified in powers of 2, such as 64, 128, 512, etc.


## [Linear](#linear)

A [filter](#filter) or system that obeys the [superposition](#superposition) principle.

Opposite of [non-linear](#non-linear).


## [Linear Feedback Shift Register](#linear-feedback-shift-register)
*LFSR*

An efficient way of generating deterministic, psuedo-random numbers.

A set of individual bits that shift to the right on each iteration (shift register), where the leftmost "input" bit is created by combining other bits, often via [XOR](#xor). 

--- 
https://www.youtube.com/watch?v=Ks1pw1X22y4


## [Linear Interpolation](#linear-interpolation)
*Lerp*

Finding a value somewhere between two points.

When you have a [discrete](#discrete) signal, you sometimes want to find an arbitrary value between two [samples](#sample). You can do this by drawing a line between them.



## [Linear Phase](#linear-phase)

A type of [filter](#filter) (usually [FIR](#FIR)) where all frequency components are delayed in time by a constant amount.

It avoids [phase distortion](#phase-distortion).

---

1. https://www.dspguide.com/ch19/4.htm


## [Linear Time Invariant (LTI) Filter](#LTI)

This is a category of filters that are:

1. Linear, which means the sum of two signals going through a filter results in the same output as when they go through the filter individually and get summed afterwards.

2. Time Invariant, which means a sample going through the filter is always going to have the same output no matter WHEN it goes through.


## [Logarithm](#logarithm)
*log*

Inverse mathematical function to taking the exponent of a number.

Almost all human perception, including hearing occurs on a logarithmic scale.

---
1. https://en.wikipedia.org/wiki/Weber–Fechner_law



# [Low-pass filter](#low-pass-filter)
*LPF*

A [filter](filter) that lets through all frequencies lower than a certain ([cutoff](#cutoff)) frequency.

See also: [High-pass filter](#highpass).


## [Magnitude](#magnitude)

Absolute value of some measured amount.

For example, a [DFT](#dft) bin has a magnitude.

Unlike [amplitude](#amplitude), it's always a positive value.


## [Mantissa](#mantissa)

Historically, the digits after the decimal point in a logarithm.

Also used as a synonym to [significand](#significand).


## [Modulation](#modulation)



## [Non-linear](#non-linear)

Describes a [filter](#filter) or a system where the

Distortion. Compression.

Harmonics are created.

[Characteristic curve](#characteristic-curve) is no longer just a line.

---

1. https://www.dspguide.com/ch5/4.htm


## [Nyquist](#nyquist)
*Folding Frequency*

Half of the [sampling rate](#sample_rate).

The highest frequency that a digital signal can store at a given sample rate.

Generated frequencies that are higher than the nyquist will "fold" over and [alias](#alias).


## [Operator](#operator)

A building block of [FM synthesis](#frequency-modulation-synthesis), comprised of an input, an [oscillator](#oscillator), an amplifier and an output.



## [Order](#order)
*Transfer Function Order*

Max of numerator or denominator orders.

Filter order = number of poles or zeros, whichever is greater.


## [Orthogonal](#orthogonal)

Perpendicular.

[Dot product](#dot-product) is zero.

Sine and Cosine are orthogonal.

---

1.
https://www.dsprelated.com/freebooks/mdft/Orthogonality.html
2. https://jackschaedler.github.io/circles-sines-signals/sine_wave_properties.html


## [Oscillator](#oscillator)



## [Passband]

A range of frequencies that will pass through untouched by a [filter](#filter).

The other frequencies will either be in the [stopband](#stopband) or in the [rolloff](#rolloff).


## [Period](#period)
*Periodic Time*

How long a [cycle](#cycle) of a waveform takes, in time or [samples](#sample).

Sometimes used interchangeably with [cycle](#cycle), but technically the period of is the duration in time of 1 cycle.

Reciprocal of [frequency](#frequency).

One [cycle](#cycle) often has its period expressed as 360 [degrees](#degree) or 2π [radians](#radian).

Real signals aren't usually periodic.


## [Periodic signal](#periodic_signal)

A signal that repeats itself regularly and therefore has pitch. 

Generated sine, saw, square waves are good examples.

[Wavetable synthesis](#wavetable) stores one [cycle](#cycle) of a waveform and uses it to generate periodic waveforms.


## [Phase Angle](#phase-angle)
*theta*
*θ*
*phase*
*angle*

Phase is the position in the [cycle](#cycle) of a [waveform](#waveform). The phase angle is a fraction of a full cycle of 360 degrees or 2π [radians](#radians).

One of the two components of a signal in the [frequency domain](#frequency-domain), the other being [magnitude](#magnitude).

θ (lowercase theta) is used as the variable to represent the angle in math. 


## [Phase Distortion](#phase-distortion)

A filter that's not [linear phase](#linear-phase) introduces different delays for different frequency components.

The shape of the waveform changes.


## [Phase Shift](#phase-shift)

The offset or difference in [phase](#phase) of two waveforms.

A [cosine](#cosine) wave is a [sine](#sine) wave shifted π/2 [radians](#radians) "left" (earlier).


## [Phasor](#phasor)
*Sinor*
*Complexor*

A complex number storing [amplitude](#amplitude), [frequency](#frequency), and [phase](#phase).



## [Pink Noise](#pink-noise)
*1/f noise*


## [Polar Form](#polar_form)

A notation for complex numbers that uses sine and cosine instead of real and imaginary numbers.


## [Pole Zero Analysis](#pole-zero-analysis)


---

1. https://www.dsprelated.com/freebooks/filters/Pole_Zero_Analysis_I.html


## [Poles](#poles)

The name comes from plotting the magnitude of the transfer function as a function of z.

Something something denominator approaching infinity.

> A point, or a value of z for which the equation is equal to infinity is called a pole. A point, or a value z for which the equation is equal to zero is called a zero. The location of poles and zeros can tell you a lot about the frequency response of a filter.



---

https://sound.stackexchange.com/a/24640


## [Power](#power)

Power is the rate of energy per time unit.

In a signal, power is proportional to amplitude squared.

Unlike the analog world, which measures power in Watts, in dsp, power doesn't have a physical unit. 


## [Power Spectral Density](#power_spectral_density)
*Power Spectrum*



## [Quadrature Oscillator](#quadrature-oscillator)

An [oscillator](oscillator) that produces values for both [sine](sine) and [cosine](cosine).



## [Radian](#radian)

A unit of measure, like [degrees](#degrees) but expressed with π.

1 radian is the angle made at the center of a circle by an arc whose length is equal to the radius of the circle.

A full circle has 2π radians.

Rad for short. So rad.


## [Rectification](#rectification)

Absolute value.


## [Recursive Filter](#recursive)


## [Rolloff](#rolloff)

The slope / steepness of a [filter's](#filter) frequency response

The units are usually expressed in [db](#decibel) per octave.

Also used as a noun to specify the transition region between a [passband](#passband) and a [stopband](#stopband).


## [Sample](#sample)

A single value from a [discrete](#discrete) signal.

Samples are usually evenly spaced in time, each one represents a value at that point in time. 


## [Sample Rate](#sample_rate)
*Sampling frequency*
*Fs*

How many [discrete](#discrete) [samples](#sample) per second.

CD is 44,100 samples per second. Film is 48,000 samples per second.

The sample rate determines the highest frequency that can be stored. See [Nyquist](#nyquist).


## [Sawtooth](#sawtooth)



## [Sideband](#sideband)

The additional spectral components above and below a [modulated](#modulation) frequency, such as in [FM synthesis](#frequency-modulation-synthesis).



## [Signal](#signal)

"A way to convey information"

Amplitude as a function of time.

On a computer, signals are [discrete](#discrete).


## [Significand](#significand)
*Significant digits*

The part of the floating point

Sometimes [Mantissa](#mantissa) is used interchangeably with this term.


## [Simple Harmonic Motion](#simple-harmonic-motion)

The underlying physical oscillation that is responsible for sinusoidal movement. 

Air molecules are temporarily displaced when hit by sound waves, their vibration back and forth is Simple Harmonic Motion.

Think of a weight on a spring or a pendulum. 

--- 

https://en.wikipedia.org/wiki/Simple_harmonic_motion


## [Sine](#sine)

Given an angle in a triangle, sine is equal to ratio of the length of the side opposite to the hypotenuse. 

On the unit circle (where the radius of 1 is the hypotenuse), it's the value of the y coordinate. 

One of the three main trigonometric functions.

---
1. http://youtu.be/gZNm7L96pfY?t=48m35s
2. https://www.khanacademy.org/math/geometry/hs-geo-trig/hs-geo-trig-ratios-intro/a/finding-trig-ratios-in-right-triangles


## [Sinusoid](#sinusoid)
*Sine Wave*

A [periodic](#periodic) signal generated by the mathematical function `sin`.

---

https://www.dsprelated.com/freebooks/mdft/Sinusoids.html


## [Spectrum](#spectrum)

A noun referring to what the [Fourier transform](#fourier-transform) produces, the [magnitude](#magnitude) and [phase](#phase) of each of the frequency components.

Data in the [frequency domain](#frequency-domain).

See: [Cepstrum](#cepstrum).


## [State Space Modeling](#state-space-modeling)


## [Stopband](#stopband)

A range of frequencies that do not pass through a [filter](#filer) at all, or are fully [attenuated](#attenuation) by the filter.

The other frequencies will be in the [passband](#stopband) or in the [rolloff](#rolloff).


## [Superposition](#superposition)
*Superposition principle*
*Superposition property*

When two signals are summed and then go through a filter, the result is the same as when they go through the filter individually and are summed afterwards.

When a filter or system obeys this principle, it's called [linear](#linear).


## [System](#system)

Something that produces one or more outputs when zero or more inputs.

Often used as a synonym to a [filter](#filter).


## [Taps](#taps)



## [Time Domain](#time-domain)

An array of numbers, each number representing the value of that signal at that particular moment in time.

The default way we store a signal and convert it from electronic information into digital information.

Mathematically, when the independent variable is a time index.


## [Time Invariant](#time-invariant)

A [system](#system) that behaves the same at any point in time.

A sample going through a [filter](#filter) is always going to have the same output no matter WHEN it goes through.


## [Time Series](#time-series)

A collection of values taken at equally spaced points in time.


## [Transfer function](#transfer-function)

Frequency response of a [filter](#filter). How a filter behaves in the in the [frequency domain](#frequency-domain).

Ratio of the output frequency response to the input frequency response. How much of the input "transfers" to the output?

Calculated by taking the [z-transform](#z-transform) of both sides of the [difference equation](#difference-equation).


## [Unity gain](#unity-gain)

Input equals output.

Mostly used in audio engineering.


## [Upsample](#upsample)

Increase the [sampling rate](#sample-rate), usually with some method of [interpolation](#interpolation).

Opposite of [downsample](#downsample).


## [Vector](#vector)

In math, a vector is a [magnitude](#magnitude) and an [angle](#angle) on a plane.

In C++ (and some other languages), this is an "array" of values, for example a collection of [floats](#float). Unlike an array, there can be a variable number of values.


## [Wave](#wave)

Most of the time people mean [signal](#signal).

Sometimes they mean an audio file, such as WAV, which is an audio file format standard.


## [Waveform](#waveform)

Two meanings:

1. The shape of a single [cycle](#cycle) of a periodic [signal](#signal) such as a [sine](#sine), [sawtooth](#sawtooth), or [square](#square), for example visualized on an oscilloscope. 

2. A [signal](#signal)'s [amplitude](#amplitude) graphed over time, as you would see in a [DAW](#DAW).


## [Waveguide](#waveguide)

A network of nodes that delay/allpass the signal and send out signal in both directions (to/from) the node. The total energy in the network is lossless (the same) at any given point in time.


---
1. https://ccrma.stanford.edu/files/papers/stanm31.pdf


## [Wave Shaping](#wave_shaping)

A fancy name for processing a signal, usually with the intention of adding extra harmonics or distortion. 


1. https://docs.juce.com/master/tutorial_dsp_convolution.html#tutorial_dsp_convolution_what_is_waveshaping


## [Window Function](#window_function)
*Windowing*

Smooths out the input to a [FFT](#FFT) to increase accuracy, as the FFT assumes the input is one cycle of a periodic signal.

It fades in and out the input signal so that it's loopable without [discontinuities](#discontinuities).

---
1. [Understanding FFTs and Windowing](https://download.ni.com/evaluation/pxi/Understanding%20FFTs%20and%20Windowing.pdf)


## XOR

*Exclusive OR*
*Bitwise XOR*

Inspect the individual bits of a number, returning 1 when the bits are different from each other and 0 when the bits are the same (both 1 or both 0).

The caret ^ is used in most computer languages including C++ and Javascript.




## [Z-plane](#z-plane)
*Complex plane*

A way to graph [complex numbers](#complex-number), usually [z](#z), where the x-axis representing the real part (Re) and the y-axis representing the imaginary part (Im).


## [Z-transform](#z-transform)

Maps a function of `n` ([discrete](#discrete) time such as in a [filter](#filter)), to a function of [z](#z) in the [frequency domain](#frequency-domain).

This is the type of thing that a Fourier transform does.

It's the [discrete time](#discrete) version of the [Laplace transform](#laplace-transform).


## [z](z)

z is a [complex](#complex-number) variable used to represent "some angular frequency" when working in the [frequency domain](#frequency-domain).

It is normally defined as:

$$ z = e^{jωt}$$

See [angular frequency](#angular-frequency).
---

https://www.khanacademy.org/science/electrical-engineering/ee-circuit-analysis-topic/ee-ac-analysis/v/ee-complex-exponential-magnitude


## [Zero Order Hold](#zero-order-hold)
*ZOH*

The most naive way to reconstruct a [continuous](#continuous-time) signal from a set of [sampled values](#sapmles).

Not actually how a [DAC](#DAC) works these days, but people imagine it to be [1].

---

1. https://youtu.be/cIQ9IXSUzuM


## [Zero Padding](#zero-padding)

Adding zeros at the end of a signal.

This is common to do during [DFT](#DFT) when the signal length is shorter than the window size.


## [Zero-phase Windowing](#zero_phase_windowing)

A technique used when computing the [FFT](#fft) where the signal is split in half and zeros are added in the middle of the signal.

This gives the benefit of increases the fidelity of the FFT while keeping the signal as symmetrical as possible.

---

1. https://dsp.stackexchange.com/questions/18938/merits-of-zero-phase-zero-padding/
