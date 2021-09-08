const express = require('express');
const path = require('path');
const app = express();
/*const https = require('https');
const fs = require('fs');*/

require('console-stamp')(console, {
    pattern: 'dd/mm/yyyy HH:MM:ss.l',
    colors: {
        stamp: 'yellow',
        label: 'white',
        metadata: 'green'
    }
});

// Serve static files form the dist directory
app.use(express.static(path.join(__dirname)));
app.use('/*', express.static(path.join(__dirname)));


// Fire up the Node.js server
app.listen(process.env.PORT, () => console.log(`Server started at port: ${process.env.PORT}`));

/*
https.createServer({
    key: fs.readFileSync('/'),
    cert: fs.readFileSync('/'),
    passphrase: '9qm7U3yHmnaV4mgtmEFA'
}, app)
    .listen(process.env.PORT, () => console.log(`Server started at port: ${process.env.PORT}`));

*/
