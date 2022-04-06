// https://docs.expo.dev/build-reference/variables/
// https://docs.expo.dev/build-reference/variables/#built-in-environment-variables

// They are not set when evaluating app.config locally

// const buildId = process.env.EAS_BUILD_ID || "local";
// const profile = process.env.EAS_BUILD_PROFILE || "local";
// const gitHash = process.env.EAS_BUILD_COMMIT_HASH || "local";
// const isCI = process.env.CI; // 1 or 0
// console.log("\n\n\n\n\n");
// console.log({ buildId, profile, gitHash, isCI });
// console.log("\n\n\n\n\n");

// When running `eas build -p ios --profile alpha :thinking:
// I wonder if this is different from CI?

// {
//   buildId: 'local',
//   profile: 'local',
//   gitHash: 'local',
//   isCI: undefined,
//   APP_ENV: 'alpha'
// }

// https://docs.expo.dev/build-reference/variables/#can-i-share-environment-variables-defined-in
// "Use a single environment variable to toggle configuration."

// Custom Set in eas.json
const profile = process.env.profile;

let config = {};

if (profile) {
  const appName = `baby-groot-${profile}`;

  config = {
    expo: {
      name: appName,
      slug: appName,
      owner: "mthomps4",
      version: "2.0.6", // 2.0.6-7 ?? Chat w/ Dominic later.
      assetBundlePatterns: ["**/*"],
      extra: {
        eas: {
          projectId: "8482c23d-2aed-46f1-aacb-8efa56bddddc",
          profile,
          appName,
        },
      },
      ios: {
        buildNumber: "7", // GitHash or buildId Combo? Manual bump for now config.js cannot autoIncrement
      },
    },
  };
}

export default config;
