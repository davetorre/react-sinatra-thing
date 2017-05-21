import React from 'react';
import ReactDOM from 'react-dom';

import NoteList from './note-list';


ReactDOM.render(
  <div>
    <h1>Notes</h1>
    <NoteList titles={['First Note', 'Second Note', 'Third Note']} />
  </div>
  ,
  document.getElementById('root')
);
