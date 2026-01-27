// src/utils/bodyParser.js
function bodyParser(request) {
  return new Promise((resolve, reject) => {
    // 1. Create a variable to hold the body string
    let body = '';
    // 2. Listen for 'data' events and add to the variable
    request.on('data', chunk => {
      body += chunk.toString();
    });
    // 3. Listen for the 'end' event:
    //    a. Try to JSON.parse the body
    //    b. If successful, call resolve(parsedData)
    //    c. If it fails, call reject(error)
    request.on('end', () => {
    try{const data = JSON.parse(body); console.log(data);
    resolve(data);}
    catch(error){reject(error)  ; }
});
  });
}

module.exports = bodyParser;