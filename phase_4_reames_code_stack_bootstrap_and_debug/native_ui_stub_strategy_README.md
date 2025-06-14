# Native UI Stub Strategy for Flask-Based App

This README outlines how to handle native UI limitations in a browser-based Flask environment and how to cleanly prepare for future migration to a native app shell like Tauri.

---

## 🎯 Objective

Allow your app to:
- Feel fluid and responsive in a limited environment (e.g. Flask + Browser)
- Maintain modularity so future upgrades (e.g. to Tauri) can occur with minimal disruption
- Continue iterating easily with AI assistance and low-level code expertise

---

## 🔧 Strategy Summary

### 1. Encapsulate Native-Feeling Components

| Feature                   | Stub Component          |
|---------------------------|--------------------------|
| File/Folder Picker        | `FilePickerStub`         |
| Save/Export Modal         | `ExportDialogStub`       |
| Dropdown Menus (styled)   | `StyledDropdownStub`     |

Each of these should render a simplified HTML version but emit data through a clean, standard interface.

---

### 2. Use Upgrade Comments

In your stub modules, clearly comment where native functionality is expected:

```js
// @native-ui-stub: Replace with Tauri's file dialog in future
```

This provides AI and collaborators with clear signals for enhancement later.

---

### 3. Interface Contract Design

All interactions with browser stubs should be routed through wrapper functions:

```js
export function openFilePicker(callback) {
  const input = document.createElement('input');
  input.type = 'file';
  input.onchange = () => callback(input.files[0]);
  input.click();
}
```

Later, replace this wrapper’s internals when migrating.

---

### 4. Visual Design Flexibility

Use CSS utility libraries like Tailwind. Avoid over-customizing for platform look. Native-feel elements will be styled in future Tauri upgrade.

---

## 🗂 Folder Proposal

```
/src
  /native_stubs
    FilePickerStub.js
    ExportDialogStub.js
    StyledDropdownStub.js
```

---

## 📌 Benefits

- Clean fallback UI now
- Ready-to-upgrade architecture
- Modular interfaces encourage AI automation
- Fits well in 4GB RAM constrained dev setups

---

## 🚀 Next Steps

1. Set up the stubs with minimal UI
2. Place upgrade markers
3. Maintain clean export interfaces
4. Document expected replacements clearly

