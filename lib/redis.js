import Redis from "ioredis";

const DEFAULT_EXPIRATION = 60 * 60 * 24; // 24 hours

let redis = new Redis(process.env.REDIS_URL);

// let redis = new Redis();
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