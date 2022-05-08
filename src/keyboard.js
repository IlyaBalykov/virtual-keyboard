function makeRow(row, rowNumber) {
  const keyArr = [];
  const newRow = document.createElement('div');
  const reg = /^[\da-zа-яЁё+\-=]$|Tab/i;
  row.forEach((e, i) => {
    const key = document.createElement('div');
    const keyValue = e[0];
    const keySymbolId = e[4];
    const keySpecialId = e[1];
    newRow.className = `keyboard__${rowNumber}`;
    key.innerText = keyValue;
    if (reg.test(keyValue)) {
      key.className = 'symbol-key';
      key.classList.add(`${keySymbolId}`);
    } else {
      key.className = 'special-key';
      key.classList.add(`${keySpecialId}`);
    }
    key.dataset.keyPosition = `${rowNumber}-${i}`;
    keyArr.push(key);
  });
  newRow.append(...keyArr);
  return newRow;
}

function makeKbd() {
  const keyboardContainer = document.createElement('section');
  // ru-shift-eng-shift
  const firstRow = [['ё', 'Ё', '`', '~', 'Backquote'], [1, '!', 1, '!', 'Digit1'], [2, '"', 2, '@', 'Digit2'], [3, '№', 3, '#', 'Digit3'], [4, ';', 4, '$', 'Digit4'], [5, '%', 5, '%', 'Digit5'], [6, ':', 6, '^', 'Digit6'], [7, '?', 7, '&', 'Digit7'], [8, '*', 8, '*', 'Digit8'], [9, '(', 9, '(', 'Digit9'], [0, ')', 0, ')', 'Digit0'], ['-', '_', '-', '_', 'Minus'], ['=', '+', '=', '+', 'Equal'], ['Backspace', 'Backspace']];
  const secondRow = [['Tab', 'Tab'], ['й', 'Й', 'q', 'Q', 'KeyQ'], ['ц', 'Ц', 'w', 'W', 'KeyW'], ['у', 'У', 'e', 'E', 'KeyE'], ['к', 'К', 'r', 'R', 'KeyR'], ['е', 'Е', 't', 'T', 'KeyT'], ['н', 'Н', 'y', 'Y', 'KeyY'], ['г', 'Г', 'u', 'U', 'KeyU'], ['ш', 'Ш', 'i', 'I', 'KeyI'], ['щ', 'Щ', 'o', 'O', 'KeyO'], ['з', 'З', 'p', 'P', 'KeyP'], ['х', 'Х', '[', '{', 'BracketLeft'], ['ъ', 'Ъ', ']', '}', 'BracketRight'], ['\\', '/', '\\', '|', 'Backslash'], ['Del', 'Delete']];
  const thirdRow = [['Caps Lock', 'CapsLock'], ['ф', 'Ф', 'a', 'A', 'KeyA'], ['ы', 'Ы', 's', 'S', 'KeyS'], ['в', 'В', 'd', 'D', 'KeyD'], ['а', 'А', 'f', 'F', 'KeyF'], ['п', 'П', 'g', 'G', 'KeyG'], ['р', 'Р', 'h', 'H', 'KeyH'], ['о', 'О', 'j', 'J', 'KeyJ'], ['л', 'Л', 'k', 'K', 'KeyK'], ['д', 'Д', 'l', 'L', 'KeyL'], ['ж', 'Ж', ';', ':', 'Semicolon'], ['э', 'Э', '\'', '"', 'Quote'], ['Enter', 'Enter']];
  const fourthRow = [['Shift', 'ShiftLeft'], ['\\', '/', '\\', '|', 'Backslash'], ['я', 'Я', 'z', 'Z', 'KeyZ'], ['ч', 'Ч', 'x', 'X', 'KeyX'], ['с', 'С', 'c', 'C', 'KeyC'], ['м', 'М', 'v', 'V', 'KeyV'], ['и', 'И', 'b', 'B', 'KeyB'], ['т', 'Т', 'n', 'N', 'KeyN'], ['ь', 'Ь', 'm', 'M', 'KeyM'], ['б', 'Б', ',', '<', 'Comma'], ['ю', 'Ю', '.', '?', 'Period'], ['.', ',', '/', '?', 'Slash'], ['↑', 'ArrowUp'], ['Shift', 'ShiftRight']];
  const fifthRow = [['Ctrl', 'ControlLeft'], ['Win', 'Super'], ['Alt', 'AltLeft'], [' ', 'Space'], ['Alt', 'AltRight'], ['Ctrl', 'ControlRight'], ['←', 'ArrowLeft'], ['↓', 'ArrowDown'], ['→', 'ArrowRight']];

  const keyboardRows = [makeRow(firstRow, 'first-row'),
    makeRow(secondRow, 'second-row'),
    makeRow(thirdRow, 'third-row'),
    makeRow(fourthRow, 'fourth-row'),
    makeRow(fifthRow, 'fifth-row')];

  keyboardContainer.className = 'keyboard-container';
  keyboardContainer.append(...keyboardRows);
  return keyboardContainer;
}

export default makeKbd();
