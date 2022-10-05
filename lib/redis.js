import Redis from "ioredis";

const DEFAULT_EXPIRATION = 3600; // 1 hour

let redis = new Redis(process.env.REDIS_URL);

// const redis = new Redis({
//   host: process.env.REDIS_HOST,
//   port: process.env.REDIS_PORT,
//   password: process.env.REDIS_PASSWORD,
// });

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
