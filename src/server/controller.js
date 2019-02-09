const cards = [
    {
        artist:"Ed Sheeran",
        song:"Perfect",
        album:"Divide",
        genre:"pop"
    }
];

let id = 0;

module.exports = {
    showMusic: (req,res) => { 
        res.status(200).send()
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
     
    // deleteMusic: {

    // }, 

    // editMusic: {

    // }


}