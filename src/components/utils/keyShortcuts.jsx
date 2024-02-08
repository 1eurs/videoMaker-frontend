class KeyShortcuts {
  // Delete
  isDelete(event) {
    return event.key === "Delete" || event.key === "Backspace";
  }

  // Save or update template
  isCtrlS(event) {
    return event.ctrlKey && event.code === "KeyS";
  }

  // Select all
  isCtrlA(event) {
    return event.ctrlKey && event.code === "KeyA";
  }

  // Copy
  isCtrlC(event) {
    return event.ctrlKey && event.code === "KeyC";
  }

  // Paste
  isCtrlV(event) {
    return event.ctrlKey && event.code === "KeyV";
  }

  // Redo
  isCtrlY(event) {
    return event.ctrlKey && event.code === "KeyY";
  }

  // Cut
  isCtrlX(event) {
    return event.ctrlKey && event.code === "KeyX";
  }

  // Move up
  isArrowUp(event) {
    return event.code === "ArrowUp";
  }

  // Move up with shift
  isShiftArrowUp(event) {
    return event.shiftKey && event.code === "ArrowUp";
  }

  // Move down
  isArrowDown(event) {
    return event.code === "ArrowDown";
  }

  // Move down with shift
  isShiftArrowDown(event) {
    return event.shiftKey && event.code === "ArrowDown";
  }

  // Move left
  isArrowLeft(event) {
    return event.code === "ArrowLeft";
  }

  // Move left with shift
  isShiftArrowLeft(event) {
    return event.shiftKey && event.code === "ArrowLeft";
  }

  // Move right
  isArrowRight(event) {
    return event.code === "ArrowRight";
  }

  // Move right with shift
  isShiftArrowRight(event) {
    return event.shiftKey && event.code === "ArrowRight";
  }

  // Modifier shift
  isShift(event) {
    return event.shiftKey;
  }

  // Decrease line height
  isAltDown(event) {
    return event.altKey && event.code === "ArrowDown";
  }

  // Increase line height
  isAltUp(event) {
    return event.altKey && event.code === "ArrowUp";
  }

  // Increase character spacing
  isAltRight(event) {
    return event.altKey && event.code === "ArrowRight";
  }

  // Decrease character spacing
  isAltLeft(event) {
    return event.altKey && event.code === "ArrowLeft";
  }

  // Move down 1px
  isCtrlDown(event) {
    return event.ctrlKey && event.code === "ArrowDown";
  }

  // Move up 1px
  isCtrlUp(event) {
    return event.ctrlKey && event.code === "ArrowUp";
  }

  // Move right 1px
  isCtrlRight(event) {
    return event.ctrlKey && event.code === "ArrowRight";
  }

  // Move left 1px
  isCtrlLeft(event) {
    return event.ctrlKey && event.code === "ArrowLeft";
  }

  // Move down 10px
  isShiftCtrlDown(event) {
    return event.ctrlKey && event.shiftKey && event.code === "ArrowDown";
  }

  // Move up 10px
  isShiftCtrlUp(event) {
    return event.ctrlKey && event.shiftKey && event.code === "ArrowUp";
  }

  // Move right 10px
  isShiftRight(event) {
    return event.ctrlKey && event.shiftKey && event.code === "ArrowRight";
  }

  // Move left 10px
  isShiftCtrlLeft(event) {
    return event.ctrlKey && event.shiftKey && event.code === "ArrowLeft";
  }

  // Redo with Ctrl+Shift+Z
  isCtrlShiftZ(event) {
    return event.ctrlKey && event.shiftKey && event.code === "KeyZ";
  }

  // Undo with Ctrl+Z
  isCtrlZ(event) {
    return event.ctrlKey && !event.shiftKey && event.code === "KeyZ";
  }

  // Zoom reset
  isCtrlOne(event) {
    return event.ctrlKey && event.key === "1";
  }

  // Zoom in
  isCtrlMinus(event) {
    return event.ctrlKey && event.key === "-";
  }

  // Zoom out
  isCtrlEqual(event) {
    return event.ctrlKey && event.key === "=";
  }

  // Zoom to fit
  isCtrlZero(event) {
    return event.ctrlKey && event.key === "0";
  }
}

export default new KeyShortcuts();
