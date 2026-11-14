'use strict';
const rateLimit = require('express-rate-limit');

// In a multi-instance deployment, rate-limit-redis can replace the default
// MemoryStore so every instance behind the load balancer shares one counter.
// The in-memory store keeps separate counters per process, multiplying the
// effective limit as more instances are added.
module.exports = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true,
});
