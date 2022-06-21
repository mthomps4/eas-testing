// https://docs.expo.dev/build-reference/variables/
// https://docs.expo.dev/build-reference/variables/#built-in-environment-variables

// Not set when running expo-dev-client locally
const buildId = process.env.EAS_BUILD_ID || "local-build";
const buildProfile =
  process.env.EAS_BUILD_PROFILE || "local profile check APP_ENV";
const gitHash = process.env.EAS_BUILD_COMMIT_HASH || "local build";
const isCI = process.env.CI; // 1 or 0

// https://docs.expo.dev/build-reference/variables/#can-i-share-environment-variables-defined-in

// eas build env || .env.* file from start:* (yarn start:dev)
const profile = process.env.APP_ENV || "local";

let config = {};

if (profile) {
  const isProduction = profile === "production";
  const appName = isProduction ? "baby-groot" : `baby-groot-${profile}`;

  config = {
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
      },
    },
  };
}

export default config;
