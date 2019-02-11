import React, { Component } from 'react';

export default class MusicLibrary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isClicked: false

    }

  };

  fix = () => {
    // this.props.handleButton(this.state)
    this.props.toggleEditState()
    const { card, handleEdit } = this.props;

    this.setState({
      isClicked: true
    });
    handleEdit(card.artist, card.song, card.album, card.genre);
  };

  reviseCard(id) {
    this.props.fixCard(id);
    this.props.toggleEditState();
    this.setState({
      isClicked: false
    });
  };

  render() {
    const { card, deleteCard } = this.props

    return (
      <div class='card'>
        
        <div>
          <h3>Artist: {card.artist}</h3>
          <h3>Song: {card.song}</h3>
          <h3>Album: {card.album}</h3>
          <h3> Genre: {card.genre}</h3>
          <button onClick={() => deleteCard(card.id)}>Delete</button>
          {this.state.isClicked ? (
            <button onClick={() => this.reviseCard(card.id)}>Submit Change</button>
          ) : (
              <button onClick={() => this.fix()}>Edit</button>
            )
          }
          <br />
        </div>
      </div>
    );
  }

}

//if I have time to do this create a sort for the cards