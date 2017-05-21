const insertHtml = (elementId, html) => {
  const element = document.getElementById(elementId);
  element.innerHTML = '';
  element.insertAdjacentHTML('afterbegin', html);
};

const noteItem = (note) => {
  return `<li class="note-item">${note.title}</li>`;
};

const noteList = (notes) => {
  var items = notes.reduce((acc, note) => {
    return acc + noteItem(note);
  }, '');
  return `
    <h1>Notes</h1>
    <ul>${items}</ul>
  `;
};

const noteDetail = (note) => {
  return `
    <textarea>${note.content}</textarea>
  `;
};

var notes = [
  {
    title: 'First Note',
    content: 'Content for the first note.',
    id: 1
  },
  {
    title: 'Second Note',
    content: 'Content for the second note.',
    id: 2
  },
  {
    title: 'Third Note',
    content: 'Content for the third note.',
    id: 3
  }
];

insertHtml('note-list', noteList(notes));
insertHtml('note-detail', noteDetail(notes[0]));
var noteItemEls = document.getElementsByClassName('note-item');
[].forEach.call(noteItemEls, (el, index) => {
  el.addEventListener('click', () => {
    insertHtml('note-detail', noteDetail(notes[index]));
  });
});
