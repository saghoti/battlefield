const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

app.listen(process.env.PORT || 737, () => {
  console.log(`Server started on port ${process.env.PORT || 737}`);
})