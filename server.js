const express = require('express'),
    app = express();
    
// config
app.set('port', process.env.PORT || 3000);

// middleware
app.use(express.json());

app.use('/', require('./src/routes'));

app.listen(app.get('port'), () => {
    console.log('Listenning to port: ' + app.get('port'));
});