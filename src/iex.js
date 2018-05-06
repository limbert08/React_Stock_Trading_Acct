// Search for Specific ticker - provides JSON

//https://api.iextrading.com/1.0/stock/market/batch?symbols=qqq,fb&types=quote,news,chart&range=1m&last=5

app.get("/api/:ticker?", function (req, res) {
  var ticker = req.params.ticker;
  console.log(ticker);

  var parameters = {
    symbols: ticker,
    types: 'quote,news,chart',
    range: '1m',
    last: '5'
  }
  console.log(parameters);
  axios({
      method: 'GET',
      url: 'https://api.iextrading.com/1.0//stock/market/batch',
      params: parameters,
      headers: {
        'Cache-Control': 'no-cache'
      }
    })
    .then(function (response) {

      res.json(response.data);
    });
});