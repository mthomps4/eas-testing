// https://docs.expo.dev/build-reference/variables/#built-in-environment-variables
// https://docs.expo.dev/build-reference/variables/#can-i-share-environment-variables-defined-in

const dopplerSecrets = require("./doppler-secrets");

// set through EAS build
const buildId = process.env.EAS_BUILD_ID || "local-build";
const buildProfile = process.env.EAS_BUILD_PROFILE || "local";
const gitHash = process.env.EAS_BUILD_COMMIT_HASH || "local build";
const isCI = process.env.CI; // 1 or 0

// Should be present from Expo Secrets
// Note: if this is under one Project, you may need to namespace the ENV `DOPPLER_TOKEN_PREVIEW` `DOPPLER_TOKEN_${buildProfile.toUpperCase()}`
const dopplerToken = process.env.DOPPLER_TOKEN;

const emptyConfig = {};

if (!dopplerToken) return emptyConfig;

const secrets = dopplerSecrets.getSecrets(dopplerToken);
const profile = secrets.APP_ENV;

if (!profile) return emptyConfig;

console.log({ secrets });

const isProduction = profile === "production";
const appName = isProduction ? "baby-groot" : `baby-groot-${profile}`;
const myEnv = process.env.MY_ENV || "NOPE...";

const config = {
  expo: {
    name: appName,
    slug: appName,
    owner: "mthomps4",
    version: "2.0.6", // 2.0.6-7 ?? Chat w/ Dominic later.
    assetBundlePatterns: ["**/*"],
    extra: {
      eas: {
        buildId,
        buildProfile,
        gitHash,
        isCI,
      },
      profile,
      appName,
      myEnv,
      secrets,
    },
  },
};

export default config;
