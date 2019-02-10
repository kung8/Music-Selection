import React from 'react';

export default function MusicLibrary (props) {
   
  const {card} = props

    return (
      <div>
          <h3>Artist: {card.artist}</h3>
          <h3>Song: {card.song}</h3>
          <h3>Album: {card.album}</h3>
          <h3>Genre: {card.genre}</h3>
          <button onClick={()=>props.deleteCard(card.id)}>Delete</button>
          <button onClick={()=>props.fixCard(card.id)}>Edit</button>
          {/* <button>Like</button> */}
        <br/>
      
      </div>
    );
  }


//if I have time to do this create a sort for the cards