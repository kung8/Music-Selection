import React, { Component } from 'react';
import MusicLibrary from './MusicLibrary';
import axios from 'axios';
import MusicCard from './MusicCard';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            cards: "",
            artist: "",
            song: "",
            album: "",
            genre: ""
        }
    };

    componentDidMount() {
        axios.get('/api/music').then(res => {
            this.setState({
                cards: res.data
            })
        })
            .catch(err => {
                console.log(1111, err)
            })
    };

    addArtistName(name) {
        this.setState({
            artist: name
        })
    };

    addSongName(name) {
        this.setState({
            song: name
        })
    };

    addAlbumName(name) {
        this.setState({
            album: name
        })
    };

    addGenreName(type) {
        this.setState({
            genre: type
        })
    };

    addMusic(artist, song, album, genre) {
        axios.post('/api/music', { artist, song, album, genre }).then(res => {
            this.setState({
                cards: res.data,
                artist: "",
                song: "",
                album: "",
                genre: ""
            })

        })
    };

    render() {
        return (
            <div>
                <input placeholder="Artist" value={this.state.artist} onChange={e => this.addArtistName(e.target.value)} />
                <input placeholder="Song" value={this.state.song} onChange={e => this.addSongName(e.target.value)} />
                <input placeholder="Album" value={this.state.album} onChange={e => this.addAlbumName(e.target.value)} />
                <input placeholder="Genre" value={this.state.genre} onChange={e => this.addGenreName(e.target.value)} />
                <button onClick={() => this.addMusic()}>ADD AMAZING MUSIC ONLY!</button>
                
                <MusicLibrary />
                <MusicCard/>
            </div>
        );
    }
}

export default Dashboard;
