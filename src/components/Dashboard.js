import React, { Component } from 'react';
import MusicLibrary from './MusicLibrary';
import MusicCard from './MusicCard';
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
        }

        this.addMusic = this.addMusic.bind(this);
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

    // deleteCard =(id) => {
    //     axios.delete(`/api/music/:${id}`).then(res => {
    //         this.setState({
    //             cards: res.data
    //         })
    //     })
    // }

    // handleEdit = (artist, song, album, genre ) => {
    //     this.setState ({
    //         artist,
    //         song,
    //         album, 
    //         genre
    //     })
    // }

    // editCard = (id) => {
    //     const { artist, song, album, genre } = this.state;
    //     axios.put(`/api/music/:${id}`, { artist, song, album, genre }).then(res => {
    //         this.setState({
    //             cards: res.data,
    //             artist: "",
    //             song: "",
    //             album: "",
    //             genre: "",
    //         })
    //     })
    // }

    render() {
        const { cards, artist, song, album, genre } = this.state;
        // console.log(2222,this.state.cards);
        const library = cards.map((card) => {
            console.log(card);
            return (
                <MusicLibrary
                    key={card.id}
                    card={card}
                />
                //  <MusicCard card={card} key={card.id}/>
                 )
        });


        return (
            <div>
                <input placeholder="Artist" value={this.state.artist} onChange={e => this.addArtistName(e.target.value)} />
                <input placeholder="Song" value={this.state.song} onChange={e => this.addSongName(e.target.value)} />
                <input placeholder="Album" value={this.state.album} onChange={e => this.addAlbumName(e.target.value)} />
                <input placeholder="Genre" value={this.state.genre} onChange={e => this.addGenreName(e.target.value)} />
                <button onClick={() => this.addMusic(artist, song, album, genre)}>ADD AMAZING MUSIC ONLY!</button>

                <div>{library}</div>
                <MusicCard 
                    // deleteCard={this.deleteCard} editCard={this.editCard}
                    // handleEdit={this.handleEdit}
                    // card={this.cards}
                />
            </div>
        );
    }
}

export default Dashboard;
