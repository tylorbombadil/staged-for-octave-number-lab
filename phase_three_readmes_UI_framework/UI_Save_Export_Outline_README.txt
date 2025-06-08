
# UI Save & Export System Outline

This document captures the high points from the design conversation regarding save and export functionality for the Octave Number Lab. It includes distinctions between global and individual save concerns, user-friendly design philosophy, and conventions for differentiating "save" vs "export."

---

## 🌐 Global Save Functionality

- **Primary Save Action**: Under the `File` menu, there will be a clearly labeled `Save Tree` action.
- **What It Saves**: The entire current project state, including:
  - Tree structure
  - Loaded scales
  - Active scale metadata
  - Contents of the geometric interval sequencer
  - Inspector settings
- **No Quick Save**: The decision was made to avoid a `quick save` icon or hotkey in order to reduce ambiguity about what is being saved.

---

## 🧩 Individual Save / Export Functionality

### 🔹 General Philosophy
- **Individual Elements**: Components like individual scales, branches, or interval arrays should be exportable separately.
- **Right-Click Menu**: Initially considered, but ultimately ruled out because:
  - Too hidden for general users
  - Lacks clarity and discoverability

### 🔹 UI Placement
- **Per-Panel Save Buttons**:
  - A save/export icon may appear in specific subpanels (like the geometric sequencer)
  - Communicates to the user that the panel’s contents can be extracted as a discrete object
- **Avoid Top-Level Clutter**:
  - Buttons to save individual elements should not appear in the global top bar
  - They remain scoped to their workspace to keep mental context clear

### 🔹 Nomenclature Conventions
- **Save**: Reserved for full project or tree state.
- **Export**: Used for saving isolated items like:
  - Interval arrays from the sequencer
  - Generated branches from the generator
  - Individual user-created scales

---

## 🌀 Generator-Specific Behavior

- The generator outputs multiple related scales.
- A post-generation prompt asks:
  - "Do you want to export these as a grouped branch?"
  - If confirmed, the original scale becomes the parent, and generated items become children.
  - This integrates well into the tree without disturbing user agency.
- Each scale is otherwise treated as independent unless the user chooses to group them.

---

## 💬 User Interaction Notes

- **Clarity First**: The app will never silently save or auto-export anything. All actions will be intentional.
- **Tagging Agency**: Exports may include metadata notes, but the user will always define naming and intent.
- **Avoiding Cryptic Icons**: Export buttons will include tooltips or hover-labels to clarify their scope.

---

This outline ensures a scalable, understandable system for handling save/export operations in a user-centric way.
