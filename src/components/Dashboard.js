import React, { Component } from 'react';
import MusicLibrary from './MusicLibrary';
import axios from 'axios';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            cards: [],
            artist: "",
            song: "",
            album: "",
            genre: ""
        };

        this.addMusic = this.addMusic.bind(this);
    };

    componentDidMount() {
        axios.get('/api/music').then(res => {
            this.setState({
                cards: res.data
            });
        })
            .catch(err => {
                console.log(1111, err)
            });
    };

    addArtistName(name) {
        this.setState({
            artist: name
        });
    };

    addSongName(name) {
        this.setState({
            song: name
        });
    };

    addAlbumName(name) {
        this.setState({
            album: name
        });
    };

    addGenreName(type) {
        this.setState({
            genre: type
        });
    };

    addMusic(artist, song, album, genre) {
        axios.post('/api/music', { artist, song, album, genre }).then(res => {
            this.setState({
                cards: res.data,
                artist: "",
                song: "",
                album: "",
                genre: ""
            });
        });
    };

    deleteCard = (id) => {
        axios.delete(`/api/music/${id}`).then(res => {
            this.setState({
                cards: res.data
            });
        });
    };

    handleEdit = (artist,song,album,genre) => {
        this.setState({
            artist,
            song, 
            album, 
            genre
        });
    };

    fixCard = (id)=> {
        const {artist, song, album, genre}=this.state;
        axios.put(`/api/music/${id}`,{artist, song, album, genre}).then(res => {
            this.setState({
                cards: res.data,
                artist: "",
                song: "",
                album: "",
                genre: ""

            });
        });
    };

    render() {
        const { cards, artist, song, album, genre } = this.state;
        const library = cards.map((card) => {
            return (
                <MusicLibrary
                    key={card.id}
                    card={card}
                    deleteCard={this.deleteCard}
                    fixCard={this.fixCard}
                    handleEdit={this.handleEdit}
                />
            );
        });


        return (
            <div>
                <br/>
                <input placeholder="Artist" value={this.state.artist} onChange={e => this.addArtistName(e.target.value)} />
                <input placeholder="Song" value={this.state.song} onChange={e => this.addSongName(e.target.value)} />
                <input placeholder="Album" value={this.state.album} onChange={e => this.addAlbumName(e.target.value)} />
                <input placeholder="Genre" value={this.state.genre} onChange={e => this.addGenreName(e.target.value)} />
                <button onClick={() => this.addMusic(artist, song, album, genre)}>ADD AMAZING MUSIC ONLY!</button>
                {/* <button onClick={()=>this.editMusic(artist,song,album,genre)}>Update</button> */}
                <div>{library}</div>

            </div>
        );
    };
}

export default Dashboard;


