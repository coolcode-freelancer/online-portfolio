
//Install express server
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 8080);

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
app.listen(app.get('port'), function(err) {
  if(err) console.log(err);
  console.log('Listening on port ' + app.get('port'));
});
