module.exports = function (req, res, next) {
  if (req.method === 'POST') {
    console.log(req.body);
    // Converts POST to GET and move payload to query params
    // This way it will make JSON Server that it's GET request
    req.method = 'GET'
    req.query = req.body
  }
  next()
}
