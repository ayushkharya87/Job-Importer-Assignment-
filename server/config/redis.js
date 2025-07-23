const Redis = require('ioredis');

const redis = new Redis({
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: process.env.REDIS_PORT || 6379,
  maxRetriesPerRequest: null,  
  enableReadyCheck: false,  
  retryStrategy(times) {
    const delay = Math.min(times * 100, 3000); 
    console.warn(`[Redis] Reconnecting in ${delay}ms (attempt ${times})`);
    return delay;
  },
});

redis.on('connect', () => {
  console.log('✅ Redis connected successfully');
});

redis.on('error', (err) => {
  console.error('❌ Redis connection error:', err.message);
});

redis.on('reconnecting', () => {
  console.log('♻️  Attempting to reconnect to Redis...');
});

redis.on('end', () => {
  console.warn('⚠️ Redis connection closed');
});

module.exports = redis;
