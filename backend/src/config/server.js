const port = 3003;
const bodyParser = require('body-parser'),
    express = require('express'),
    server = express();


server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json())

server.listen(port, () => console.log(`bacend is running on port ${port}`));

