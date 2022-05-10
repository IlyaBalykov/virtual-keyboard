export const textArea = document.createElement('textarea');

function makeTextArea() {
  const textAreaContainer = document.createElement('section');

  textAreaContainer.className = 'textarea-container';
  textArea.className = 'textarea-container__textarea';

  textArea.setAttribute('rows', '15');
  textArea.setAttribute('autocorrect', '');
  textArea.setAttribute('wrap', 'hard');
  textArea.setAttribute('autocorrect', '');
  textArea.setAttribute('autofocus', '');

  textAreaContainer.append(textArea);

  return textAreaContainer;
}

export default makeTextArea();
