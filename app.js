const express = require('express');
const app = express();
const port = process.env.PORT || 4000;  // 3000から4000に変更

console.log('Before route definition');

app.get('/', (req, res) => {
    console.log('Inside GET / route');
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

console.log('After app.listen');
