
# Interval Lock Generator UI

This README summarizes the conceptual and functional design for the interval locking mechanism within the generator panel of the Octave Number Lab.

## Interval Locking System

### Purpose
The locking system allows the user to select a **single interval** from a geometric sequence that will remain fixed, while the surrounding summed intervals dynamically reposition this locked window during generator operations. This gives the user powerful control over **windowed interval-based scale generation**.

### Geometric Interval Sequencer
- **Reference Field**: 
  - A single entry field for establishing a starting point (default: 0, the global root Hz).
  - Accepts drag-and-drop from scale notes to clone their coordinate as reference.

- **Array Entry Field**:
  - A stackable, two-argument entry interface (`summed_root`, `top_note`).
  - Upon each entry:
    - The previous `top_note` becomes part of the `summed_root`.
    - The next input becomes the new `top_note`.

### Locked Interval
- Only **one interval** can be locked at a time, due to the nature of geometric summation.
- Locking is **semantic**, not merely visual — it defines the focus for scale generation iteration.
- Once locked, the generator will use the geometric sequence to push this window across all positions defined by the summed intervals.
- This resembles an audible fractal-like iteration (e.g. akin to Mandelbrot zooms).

## UI Handling Proposal

### Locking Method
- Avoid right-click or cryptic gestures.
- Avoid clutter inside the dropdown.
- **Preferred UI Concept**:
  - A small lock icon next to each array item in the dropdown list.
  - Hover reveals tooltip: "Lock this interval"
  - Only one can be selected at a time — new selections override the previous lock.

### Generator Integration
- The interval array can be selected inside the generator's drop-down module system.
- The module system will be intuitive, similar to the traversal builder.
- Users can:
  - Click on a module to preview its internals.
  - Stack and combine modules to define traversal or generator behaviors.
  - Save/load sequences just like playback patterns.

## Optional Generator Output Behavior
- Generator may produce a list of scales based on locked window iterations.
- Prompt user on output:
  - "Assign as sequence under one parent scale?"
  - "Export individually?"
- Output scales may be tagged or linked via hierarchy, maintaining clarity without hidden metadata.

---

This setup keeps the sequencer intuitive and portable, while giving it deep generative power. Further refinements will center on naming conventions, aesthetic clarity, and minimizing user friction.
