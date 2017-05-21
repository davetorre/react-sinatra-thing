import React from 'react';


class NoteItem extends React.Component {
  render() {
    return <li>{this.props.title}</li>;
  }
}

class NoteList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.titles.map(function(title){
          return <NoteItem title={title} />;
        })}
      </ul>
    );
  }
}

export default NoteList;
