# Cross-Language Debug Scaffold

This scaffold provides a basic structure for wrapping and logging debug output across Python, JavaScript, and p5.js.

## Modules

### Python
- `debug_utils.py` defines a decorator that wraps function calls with try/except and logs tracebacks.
- `sample_module.py` demonstrates use on a scale generation function.

### JavaScript
- `debugUtils.js` defines a try/catch wrapper with label tagging.
- `sampleUI.js` shows wrapping an event handler.

### p5.js
- `sampleSketch.js` includes basic draw function with error logging.

## Usage

Expand each module with new functions wrapped in these debug tools. Pipe logs into a shared panel or log file if desired.