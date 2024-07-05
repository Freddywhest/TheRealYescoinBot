require("dotenv").config();
const settings = {
  API_ID:
    process.env.API_ID && /^\d+$/.test(process.env.API_ID)
      ? parseInt(process.env.API_ID)
      : process.env.API_ID && !/^\d+$/.test(process.env.API_ID)
      ? "N/A"
      : undefined,
  API_HASH: process.env.API_HASH || "",

  AUTO_UPGRADE_MULTICLICKS: process.env.AUTO_UPGRADE_MULTICLICKS
    ? process.env.AUTO_UPGRADE_MULTICLICKS.toLowerCase() === "true"
    : true,
  MAX_MULTICLICKS_LEVEL: process.env.MAX_MULTICLICKS_LEVEL
    ? parseInt(process.env.MAX_MULTICLICKS_LEVEL)
    : 5,

  SLEEP_BETWEEN_TAP: process.env.SLEEP_BETWEEN_TAP
    ? process.env.SLEEP_BETWEEN_TAP.split(",").map((str) =>
        parseInt(str.trim())
      )
    : 70,

  USE_PROXY_FROM_FILE: process.env.USE_PROXY_FROM_FILE
    ? process.env.USE_PROXY_FROM_FILE.toLowerCase() === "true"
    : false,

  RANDOM_TAPS_COUNT:
    process.env.RANDOM_TAPS_COUNT &&
    Array.isArray(JSON.parse(process.env.RANDOM_TAPS_COUNT))
      ? JSON.parse(process.env.RANDOM_TAPS_COUNT)
      : [10, 1000],
};

module.exports = settings;
