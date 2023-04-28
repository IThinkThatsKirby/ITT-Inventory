const express = require('express');
const app = express();
const port = 3000;
// test route to get barcode data
app.post('*', (req: any, res: any) => {
  res.send('Scan Recieved :D');
  console.log(req);
  console.log('HERE');
})

app.listen(port, () => {
  console.log(`Express Server is running on port: ${port}`)
})