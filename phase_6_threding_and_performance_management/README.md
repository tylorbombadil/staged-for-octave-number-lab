# Octave Number Lab: Background Prime Zoom Engine

## Vision

The Octave Number Lab aims to provide a deeply immersive harmonic exploration tool that allows users to explore prime-reduced octave values at virtually any depth. A key feature of the app is its ability to compute and cache octave-reduced prime positions in the background, even on limited-resource machines like a 4GB Chromebook.

## Objective

Enable perceptually deep exploration of the harmonic space by:
- Mapping very large prime numbers into a 1–2 octave range using exact reduced decimal or rational values.
- Running deep prime computations as low-priority background tasks.
- Preventing truncation errors that would compromise audio and spatial precision.
- Adapting resource usage dynamically to avoid overwhelming low-spec devices.

## Methodology

- **Precision Math:** Employ high-precision libraries (`decimal`, `fractions`) to prevent drift and truncation.
- **Thread Management:** Use Python threading or asynchronous tasks to throttle background computations.
- **Granular Controls:** Scripts monitor CPU/RAM availability and adjust workload dynamically.
- **Persistence:** Long computations can be paused and resumed over multiple sessions.
- **Fail-Safes:** Set thresholds on memory usage and prime size to avoid unresponsive system states.

## Features

- On-demand zooming into deeper harmonic regions.
- Smart caching system based on viewport and zoom factor.
- Auto-scaling workload for background computation.
- Modular threading engine with adjustable resource usage.
- Interactive visualization with precise floating-point rendering.
- Optional audio playback from calculated scales.

## Target Platforms

- Designed to run even on minimal setups (e.g. 4GB Chromebook).
- Core threading engine is light and modular.
- Users on high-performance systems can override resource caps for faster deep exploration.

## Why It Matters

Exploring primes at increasing harmonic depths opens up a new domain of musical expression and numerical intuition. By enabling this on constrained devices, the Octave Number Lab becomes a widely accessible tool for musicians, mathematicians, and dreamers alike.

---

