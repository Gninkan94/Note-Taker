const express = require('express');
const api_routes = require('./routes/api-routes')
const html_routes = require('./routes/html-routes')
const PORT = process.env.PORT || 3001;
// This is dynamically set the port
const app = express();

// This Express middleware will always run the operation in the order from top to bottom "order matters"
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(html_routes)
app.use(api_routes)

app.listen(PORT, () => {
    console.log(`your server is running on this  http://localhost:${PORT}`);
});