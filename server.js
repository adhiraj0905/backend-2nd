const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/ok', (req, res) => res.status(200).json({ message: "Request successful", statusCode: 200 }));
app.post('/api/created', (req, res) => res.status(201).json({ message: "Resource created successfully", statusCode: 201 }));

// Client Errors
app.get('/api/bad-request', (req, res) => res.status(400).json({ error: "Bad Request: Missing required data", statusCode: 400 }));
app.get('/api/unauthorized', (req, res) => res.status(401).json({ error: "Unauthorized: Invalid credentials", statusCode: 401 }));
app.get('/api/forbidden', (req, res) => res.status(403).json({ error: "Forbidden: Access denied", statusCode: 403 }));
app.get('/api/not-found', (req, res) => res.status(404).json({ error: "Not Found", statusCode: 404 }));
app.get('/api/conflict', (req, res) => res.status(409).json({ error: "Conflict: Resource already exists", statusCode: 409 }));

// Server Errors
app.get('/api/server-error', (req, res) => res.status(500).json({ error: "Internal Server Error", statusCode: 500 }));
app.get('/api/service-unavailable', (req, res) => res.status(503).json({ error: "Service Unavailable: Try again later", statusCode: 503 }));

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));