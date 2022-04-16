const expressServer = require('./express-server');

expressServer().then((esi) => esi.start());
