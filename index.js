let express = require('express');

let app = express();

app.get('/apl/best-framework', (req,res) => {res.send('React')});

app.listen(3000,()=>{
    console.log('the server is listining')
})