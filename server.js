const express = require("express")

const app= express();
const port = 8000;

require('../servidor/config/mongoose.config')

app.use( express.json() );
app.use( express.urlencoded ({ extended:true }) );
app.use( require('../servidor/routes/jokes.routes') )

app.listen(port, ()=> console.log(`Listening on port: ${port}`) );