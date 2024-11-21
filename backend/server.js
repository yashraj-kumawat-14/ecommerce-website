const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
app.use('/api', productRoutes);
const PORT = process.env.PORT || 5000;


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
