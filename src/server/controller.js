const cards = [
    {
        id: 0,
        artist:"Ed Sheeran",
        song:"Perfect",
        album:"Divide",
        genre:"pop"
    }
];

let id = 1;

module.exports = {
    showMusic: (req,res) => { 
        res.status(200).send(cards)
    }, 

    addMusic: (req, res) => {
        const {artist,song,album,genre} = req.body;
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
        const removedCard = cards.map(card =>{card.id==id});
        cards.split(index,1);
        res.status(200).send(cards)
    },

 

    editMusic: (req, res) => {
        const {artist, song, album, genre} = req.body;
        const { id } = req.params;

        res.status(200).send(cards)
    }


}