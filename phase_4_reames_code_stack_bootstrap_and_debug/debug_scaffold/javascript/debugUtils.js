function debugWrap(label, fn) {
  try {
    return fn();
  } catch (error) {
    console.error(`[JS/DEBUG] ${label}:`, error);
  }
}