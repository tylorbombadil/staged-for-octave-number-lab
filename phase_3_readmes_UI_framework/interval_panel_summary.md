
# Interval Panel and Geometric Sequencer: Functional Summary

This document captures the comprehensive summary of our design and functionality conversation regarding the Interval Panel and the associated Geometric Sequencer in the Octave Number Lab.

---

## Overview

The Interval Panel and Geometric Sequencer are core components located in the bottom 30mm working panel of the app. The sequencer enables users to construct and manipulate interval-based coordinate arrays which will be central to the generation of scales and the navigation of the number line.

---

## Panel Structure

The bottom 30mm panel consists of:
1. **Tree Editor** – Used for modifying the hierarchy and roots of scale trees.
2. **Geometric Sequencer** – The interval logic and array builder.
3. **Meta Inspector** – For examining specific values within a scale.

Each panel section includes relevant buttons and hotkeys. Optional "Active Area" behavior was considered but later set aside in favor of using direct hotkeys for each work zone.

---

## Geometric Sequencer Logic

### Reference Field
- Default value: `0`, representing the global root.
- Accepts a coordinate from any dragged scale element.
- Establishes the new reference position from which intervals are reckoned.

### Sequence Entry Field (Right Field)
- A two-argument array entry: `[summed_root, top_note]`
- Operates dynamically:
  - When a note is dropped in, `top_note` is calculated relative to the current reference.
  - `summed_root` begins at 0, but on each new entry:
    - Previous `top_note` becomes the new `summed_root`
    - New `top_note` is computed relative to that

This results in a progressive additive interval array.

### Reset and Save
- Each field has a reset option.
- Only the right entry field (interval array) is savable.
- The array can be saved for reuse and export.

---

## Functional Use Cases

### Primary Use
- **Interval array serves as a systematic selector** for scale-generating windows.
- User can define a small fixed interval and use the rest of the array to position that window across the number line.

### Locked Window Feature
- One interval in the array is tagged as "locked".
- That interval becomes the selection window.
- All other intervals in the array serve to reposition it dynamically.
- Generator can iterate over the sequence and output stretched scales for each iteration.

### Export Considerations
- Export of scales from this generator does not imply inherent structure.
- On export, the app may prompt the user with the option to:
  - Save as flat scales
  - Nest under a parent
  - Apply a "Generated Sequence" tag for visual clarity

This maintains agency while suggesting intelligent structure.

---

## UI Considerations

- Interval panels remain consistent in both root and generator contexts.
- All manipulations are housed in the same UI for clarity and reuse.
- Save button placed in-panel to visually signal user agency over the array.
- Considered not embedding new-scale aggregates into the tree automatically—user must do this manually to maintain semantic clarity.
- Export prompts may aid user in grouping or tagging without assumption.

---

## Philosophical Alignment

- App retains user-driven taxonomy.
- No automated metadata embedding unless explicitly chosen.
- Visual hints (tags, badges) are non-invasive and reversible.
- System remains flexible but grounded in mathematical and auditory logic.

---

## Future Potential

- These interval arrays may be used in psychedelic or fractal-like generation flows.
- Could emulate Mandelbrot-like iterative behaviors if extended.
- Saved sequences could form the foundation of visual/audio transformations in future versions of the app.

