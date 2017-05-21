import React from 'react';


class NoteDetail extends React.Component {
  render() {
    return <textarea defaultValue={this.props.content}></textarea>;
  }
}

export default NoteDetail;
