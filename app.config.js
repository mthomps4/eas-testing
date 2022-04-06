// https://docs.expo.dev/build-reference/variables/
const buildId = process.env.EAS_BUILD_ID || "local";
const profile = process.env.EAS_BUILD_PROFILE || "local";
const gitHash = process.env.EAS_BUILD_COMMIT_HASH || "local";
const isCI = process.env.CI; // 1 or 0

// Custom Set in eas.json
const APP_ENV = process.env.APP_ENV || "nope";

console.log("\n\n\n\n\n");
console.log({ buildId, profile, gitHash, isCI, customEnv });
console.log("\n\n\n\n\n");

export default {
  expo: {
    name: `baby-groot-${profile}`,
    slug: `baby-groot-${profile}`,
    owner: "mthomps4",
    version: "2.0.6",
    assetBundlePatterns: ["**/*"],
    extra: {
      eas: {
        projectId: "8482c23d-2aed-46f1-aacb-8efa56bddddc",
        appEnv: APP_ENV,
      },
    },
    ios: {
      buildNumber: "5", // GitHash or buildId Combo?
    },
  },
};
