
const path = require('path');
const nunjucks = require('nunjucks');
var env = new nunjucks.Environment( 
  new nunjucks.FileSystemLoader(
    [
      path.resolve(__dirname, '../client/views')
    ],
    {
      watch:false,
      noCache: true
    }
  ),
  {autoescape: false}
);

function render(template, context) {
  return new Promise(function(resolve, reject) {
    env.render(template, context, function(err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}


module.exports = render;
