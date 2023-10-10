const express = require('express');
const app = express();

app.get('/stream', (req, res) => {
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.flushHeaders();

    // Send data every 5 seconds
    setInterval(() => {
        const data = { time: new Date().toISOString() };
        res.write(`data: ${JSON.stringify(data)}\n\n`);
    }, 5000);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});
