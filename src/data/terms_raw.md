# Terms raw

The file contains a copy of definitions from https://github.com/sudara/dspjargon/tree/master/definitions, which aren't in the landing page yet.

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
