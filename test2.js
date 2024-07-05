const axios = require("axios");
const FormData = require("form-data");

async function sendPostRequest() {
  // Initialize FormData
  const form = new FormData();
  form.append("viewCompletedAt", "1719735016810");
  form.append("reference", "81");

  // Set headers
  const headers = {
    "Content-Type": `multipart/form-data; boundary=${form._boundary}`,
    Accept: "application/json, text/plain, */*",
    "Sec-Fetch-Site": "cross-site",
    "Launch-Params":
      "query_id=AAH2YsUgAwAAAPZixSAYwjDP&user=%7B%22id%22%3A6992257782%2C%22first_name%22%3A%22Er%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22Freddy50000%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1720200907&hash=df8fb680e9e86b387b248a1481347eeaf58f4dbcb99595338db2077b82e58e11",
    "Accept-Language": "en-US,en;q=0.9",
    "Accept-Encoding": "gzip, deflate",
    "Sec-Fetch-Mode": "cors",
    Origin: "https://miniapp.yesco.in",
    "User-Agent":
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
    Referer: "https://miniapp.yesco.in/",
    "Sec-Fetch-Dest": "empty",
  };
  /* query_id=AAH2YsUgAwAAAPZixSDAz-1L&user=%7B%22id%22%3A6992257782%2C%22first_name%22%3A%22Er%22%2C%22last_name%22%3A%22%22%2C%22username%22%3A%22Freddy50000%22%2C%22language_code%22%3A%22en%22%2C%22allows_write_to_pm%22%3Atrue%7D&auth_date=1720200222&hash=6c26d40a14471c69fa28287dc5039b8b2a6ecc24258e6d3d2b2ea1a7deb97418 */
  try {
    // Send POST request
    const response = await axios.post(
      "https://clownfish-app-f7unk.ondigitalocean.app/v2/tasks/claimAdsgramAdReward",
      form,
      { headers }
    );
    console.log("Response:", response.data);
  } catch (error) {
    console.error(
      "Error:",
      error.response ? error.response.data : error.message
    );
  }
}

// Example usage
sendPostRequest();
