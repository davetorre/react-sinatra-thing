import React from 'react';


class NoteItem extends React.Component {
  handleClick(event) {
  }

  render() {
    return <li onClick={this.handleClick}>{this.props.note.title}</li>;
  }
}

class NoteList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.notes.map((note) => {
          return <NoteItem key={note.id} note={note} />;
        })}
      </ul>
    );
  }
}

export default NoteList;
