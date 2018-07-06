require('zone.js/dist/zone-node');
require('reflect-metadata');

const express = require('express');
const path = require('path');
const ngUniversal = require('@nguniversal/express-engine');
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

// function angularRouter(req, res) {
//   res.render('index', {req, res});
// }

const app = express();

// app.engine('html', ngUniversal.ngExpressEngine({
//   bootstrap: AppServerModuleNgFactory,
//   providers: [
//     provideModuleMap(LAZY_MODULE_MAP)
//   ]
// }));

// app.set('view engine', 'html');
// app.set('views', 'dist/zazi')

// app.get('/', angularRouter);
// app.use(express.static(`${__dirname}/dist/zazi`))
// app.get('*', angularRouter);

// app.listen(3000, () => {
//   console.log('server');
// });

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
