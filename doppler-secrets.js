const https = require("https");

module.exports.getSecrets = async (token) => {
  return new Promise(function (resolve, reject) {
    https
      .get(
        `https://${token}@api.doppler.com/v3/configs/config/secrets/download?format=json`,
        (res) => {
          let secrets = "";
          res.on("data", (data) => (secrets += data));
          res.on("end", () => resolve(JSON.parse(secrets)));
        }
      )
      .on("error", (e) => reject(e));
  });
};
