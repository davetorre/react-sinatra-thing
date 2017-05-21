import React from 'react';
import ReactDOM from 'react-dom';

import NoteList from './note-list';
import NoteDetail from './note-detail';


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

ReactDOM.render(
  <div>
    <h1>Notes</h1>
    <NoteList notes={notes} />
    <NoteDetail content={notes[0].content} />
  </div>
  ,
  document.getElementById('root')
);
