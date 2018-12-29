let express = require('express');
let app = express();

app.get('/', (req, res)=> {
 res.send('This is an API landing page.');
});

app.listen(3001, ()=>{
    console.log('Listening on port 3001...');
});