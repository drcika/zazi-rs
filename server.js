require('zone.js/dist/zone-node');
require('reflect-metadata');

const express = require('express');
const ngUniversal = require('@nguniversal/express-engine');
const { provideModuleMap } = require('@nguniversal/module-map-ngfactory-loader');

const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/server/main');

function angularRouter(req, res) {
  res.render('index', {req, res});
}

const app = express();

app.engine('html', ngUniversal.ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [
    provideModuleMap(LAZY_MODULE_MAP)
  ]
}));

app.set('view engine', 'html');
app.set('views', 'dist/zazi')

app.get('/', angularRouter);
app.use(express.static(`${__dirname}/dist/zazi`))
app.get('*', angularRouter);

app.listen(4200, () => {
  console.log('server');
});