function makeRow(row, rowNumber) {
  const keyArr = [];
  const newRow = document.createElement('div');
  row.forEach((e, i) => {
    const key = document.createElement('div');

    newRow.className = `keyboard__${rowNumber}`;
    key.innerText = e;
    key.dataset.keyPosition = `${rowNumber}-${i}`;
    keyArr.push(key);
  });
  newRow.append(...keyArr);
  return newRow;
}

function makeKbd() {
  const keyboardContainer = document.createElement('section');
  const firstRow = ['ё', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '-', '=', 'Backspace'];
  const secondRow = ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'DEL'];
  const thirdRow = ['Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'];
  const fourthRow = ['Shift', '\\', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '/', '^', 'Shift'];
  const fifthRow = ['Ctl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '<', '^', '>'];

  const keyboardRows = [makeRow(firstRow, 'firstRow'),
    makeRow(secondRow, 'secondRow'),
    makeRow(thirdRow, 'thirdRow'),
    makeRow(fourthRow, 'fourthRow'),
    makeRow(fifthRow, 'fifthRow')];

  keyboardContainer.className = 'keyboard-container';
  keyboardContainer.append(...keyboardRows);
  return keyboardContainer;
}

export default makeKbd();
