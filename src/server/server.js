const express = require ('express');
const bodyParser = require ('body-parser');
const ctrl = require ('./controller')

const app = express();

app.use(bodyParser.json());

//ENDPOINTS
//get/read method
app.get('/api/music', ctrl.showMusic);

//post/create method
app.post('/api/music', ctrl.addMusic);

// //delete method
app.delete('/api/music/:id', ctrl.deleteMusic);

// //put/update method
app.put('/api/music/:id', ctrl.editMusic);

const port = 4000;
app.listen(port, ()=>console.log(`Congratulations, I am running on ${port}`));