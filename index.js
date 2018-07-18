const execa = require('execa');
execa('ls').then(result => console.log(result.stdout));
