const cards = [
    {
        id: 0,
        artist: "Ed Sheeran",
        song: "Perfect",
        album: "Divide",
        genre: "pop"
    }
];

let id = 1;

module.exports = {
    showMusic: (req, res) => {
        const {artist} = req.query;
        if(artist){
            const searchedArtist = cards.filter(card =>
                card.artist.includes(artist));
                res.status(200).send(searchedArtist)
            
        } else {
            res.status(200).send(cards)}
    },

    addMusic: (req, res) => {
        const { artist, song, album, genre } = req.body;
        cards.push({
            id,
            artist,
            song,
            album,
            genre
        });
        id++;
        res.status(200).send(cards)
    },

    deleteMusic: (req, res) => {
        // console.log("you are ready to delete");
        const { id } = req.params;
        let indexCard = cards.findIndex(card => { return card.id == id });
        cards.splice(indexCard, 1);
        res.status(200).send(cards)
    },

    

    editMusic: (req, res) => {
        const { artist, song, album, genre } = req.body;
        const { id } = req.params;
        // console.log(1111, id)
        let indexCard = cards.findIndex(card => { return card.id == id });
    
        // cards[indexCard].artist = artist;
        // cards[indexCard].song = song;
        // cards[indexCard].album = album;
        // cards[indexCard].genre = genre;
        let found = cards[indexCard];
        found = {
            id: found.id,
            artist: artist || found.artist,
            song: song || found.song,
            album: album || found.album,
            genre: genre || found.genre,
        }
        cards.splice(indexCard, 1, found);
        res.status(200).send(cards)
    }


}