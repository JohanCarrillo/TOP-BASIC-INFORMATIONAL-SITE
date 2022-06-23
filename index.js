const http = require('http');  // require installation
const fs = require('fs');  // does not require installation

// this is the port we will be using to identify the server
const port = 3000;

// now we create a http server
const server = http.createServer( (req, res) => {

	switch (req.url) {  // switch case over required url

		// direction: '/', data: index.html
		case '/':
			console.log('inside index');
			fs.readFile('./index.html', (err, data) => {
				// the data is read as plain text
				console.log('reading index');
				if (err) throw err;  // this throws an error and stop execution

				// now we add the server response
				// response.statusCode = 200, means the url exists
				res.writeHead(200, {'Content-Type': 'text/plain'});
				res.write(data);
				return res.end;  // we have to end the response every time
			});
			break;

		case '/about':
			fs.readFile('about.html', (err, data) => {
				console.log('inside about me');
				if (err) throw err;
				res.writeHead(200, {'Content-Type': 'text/plain'});
				res.write(data);
				return res.end;
			});
			break;
		
		case '/contact':
			fs.readFile('contact.html', (err, data) => {
				console.log('inside constat me');
				if (err) throw err;
				res.writeHead(200, {'Content-Type': 'text/plain'});
				res.write(data);
				return res.end;
			});
			break;
		
			default:
				fs.readFile('404.html', (err, data) => {
					console.log('inside 404');
					if (err) throw err;
					// response.statusCode = 200, means the url does not exists
					res.writeHead(404, {'Content-Type': 'text/plain'});
					res.write(data);
					return res.end;
				});
				break;
	}
});

// now we make the server start listening in url:port
server.listen(port, (err) => {
	err ? console.log(err) : console.log('server working');
});


/* DOCUMENTATION
	- http module: https://nodejs.org/api/http.html#http
		- http.createServer: https://www.w3schools.com/nodejs/met_http_createserver.asp
	
		http response status: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
	
		- fs module: https://nodejs.org/api/fs.html
			- fs.readFile: https://nodejs.org/api/fs.html#fsreadfilepath-options-callback
*/