import Redis from "ioredis";

const DEFAULT_EXPIRATION = 1000 * 60 * 60 * 24 * 30; // 30 days

// if production mode
let redis =
  process.env.NODE_ENV === "production"
    ? new Redis(process.env.REDIS_URL)
    : new Redis();
    
export const getOrSetCache = (key, data) => {
  return new Promise((resolve, reject) => {
    redis.get(key, async (error, result) => {
      if (error) return reject(error);
      if (result != null) {
        resolve(JSON.parse(result));
      } else {
        redis.setex(key, DEFAULT_EXPIRATION, JSON.stringify(data));
        resolve(data);
      }
    });
  });
};
