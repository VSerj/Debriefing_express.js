const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  console.log('Server DEDA');
  
  res.setHeader('Content-Type', 'text/html');

  const createPath = page => path.resolve(__dirname, 'views', `${page}.html`);

  let basePath = '';

  switch (req.url) {
    case '/':
      basePath = createPath('index');
      break;

    case '/contacts':
      basePath = createPath('contacts');
      break;

    default:
      basePath = createPath('error');
      break;
  }

  fs.readFile(basePath, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });

  // res.write('<h1>_Server Deda</h1>');
  // res.write('<p>Welcom</p>');
  // const data = JSON.stringify({
  //   name: 'Serj',
  //   payload: 'Ded',
  // });
});

const PORT = 7000;

server.listen(PORT, 'localhost', err => {
  err ? console.log(err) : console.log(`listening port ${PORT}`);
});
