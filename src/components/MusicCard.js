import React, { Component } from 'react';
import axios from 'axios';


class MusicCard extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //     unClicked:false
    // }
  }

  // handleEdit= () => {
  //   const {card} = this.props;
  //   this.setState ({
  //     unClicked:true
  //   })
  //   this.props.handleEdit(card.artist,card.song,card.album, card.genre)
  // }

  // editCard = (id) => {
  //   const {editCard} = this.props;
  //   editCard(id);
    
  //   this.setState ({
  //     unClicked:false
  //   })
  // }


  render() {
    // const {deleteCard} = this.props
    return (
      <div>
        {/* {this.state.unClicked ? (
        <button onClick={()=> this.editCard(key)}>Save</button>
        ) : (
        <button onClick={()=> this.handleEdit()}>Edit</button>
        )
      }; */}
        <button>Edit</button>
        <button>Delete</button>
      </div>
    );
  }

}

export default MusicCard;
