const express = require('express');
const { createClient } = require('redis');

const app = express();
const PORT = 3001;

// Redis config dari ENV
const redisClient = createClient({
  socket: {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379,
  },
});

redisClient.on('error', (err) => console.error('Redis Error', err));

(async () => {
  await redisClient.connect();
  console.log('✅ Connected to Redis');
})();

app.get('/', async (req, res) => {
  const count = await redisClient.incr('visitor_count');
  res.json({
    message: 'Hello from Docker + Redis to 🚀',
    visitor: count,
  });
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
