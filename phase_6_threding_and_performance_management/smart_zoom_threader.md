# Smart Zoom Threader Protocol

This document outlines a three-tiered system for managing memory and performance while exploring deeply zoomable harmonic number lines using prime-based data.

---

## ✅ Three-Tier Prime Exploration Strategy

### Tier 1: Real-Time UI Range
- **Depth**: Up to ~Tier 22 (may vary with zoom density).
- **Memory Use**: Light (~hundreds of MBs).
- **Performance**: Smooth, fluid interaction.
- **Use Case**: Regular UI zooms, real-time playback and manipulation.
- **Behavior**: Instant navigation, all prime points remain in RAM.

---

### Tier 2: Background-Rendered Cache Zone
- **Depth**: ~Tier 23–26 (adjustable by user’s time budget).
- **Memory Use**: Moderate (~hundreds of MBs to ~2.5GB max).
- **Performance**: Not real-time, but preloaded over time.
- **Use Case**: Semi-deep zooms that the user can explore later.
- **Behavior**: Smart threader generates this region in the background. Example: “Generate Zone 25–26 within 24 hrs”.

---

### Tier 3: Ultra-Deep Agent-Based Threaded Dive
- **Depth**: Tier 27 and beyond (limitless, constrained only by available storage and patience).
- **Memory Use**: Capped. Uses temporary cache only.
- **Performance**: Asynchronous and deferred; data never resides fully in RAM.
- **Use Case**: Mandelbrot-style planned dives for scale generation or immersive playback.
- **Behavior**:
  - System alerts the user when entering deep territory.
  - Offers a time-based rendering estimate and configuration panel.
  - Generates temporary scale data and deletes cache after unless pinned.
  - Supports resumable dives and multi-device state sync (future scope).

---

## 🔒 Safe Overflow Policy
- Cap memory usage at **~3.5GB** to reserve space for system functions.
- Continuously monitor memory and active cache size.
- Trigger scale-back operations or prompt warnings as the limit approaches.

---

This modular threader system empowers all users—from lightweight devices to pro rigs—to harness the infinite structure of primes without performance breakdown, using a memory-conscious zoom model.