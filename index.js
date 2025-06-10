const proxy = require('express-http-proxy');
const app = require('express')();
const http = require('http');

const API_TARGET = process.env.API_TARGET;
const PORT = process.env.PORT;

app.use(proxy(API_TARGET, {
    userResDecorator: function(proxyRes, proxyResData, userReq, userRes) {
    data = JSON.parse(proxyResData.toString('utf8'));

    let response = data;
    if(Array.isArray(data)) {
        response = {response}
    }
    return JSON.stringify(response);
  }
}));

http.createServer(app).listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});