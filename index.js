const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the Angular app
app.use(express.static(path.join(__dirname, "public")));

// API routes
app.get("*angular", (req, res) => {
	res.sendFile(path.join(__dirname, "public/browser", "index.html"));
});

// Start the server
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
