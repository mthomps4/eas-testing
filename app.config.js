// https://docs.expo.dev/build-reference/variables/#built-in-environment-variables
// https://docs.expo.dev/build-reference/variables/#can-i-share-environment-variables-defined-in

// const dopplerSecrets = require("./doppler-secrets");

// set through EAS build
const buildId = process.env.EAS_BUILD_ID || "local-build";
const buildProfile = process.env.EAS_BUILD_PROFILE || "local";
const gitHash = process.env.EAS_BUILD_COMMIT_HASH || "local build";
const isCI = process.env.CI; // 1 or 0

const isProduction = buildProfile === "production";
const projectName = "baby-groot";
const appName = isProduction ? projectName : `${projectName}-${buildProfile}`;

const baseConfig = {
  expo: {
    name: appName,
    slug: projectName,
    owner: "mthomps4",
    assetBundlePatterns: ["**/*"],
  },
};

// Note: if this is split between Projects, you can simplify to a DOPPLER_TOKEN env per project.
// Should be namespaced in the project via Expo Secrets
const tokenKey = `DOPPLER_TOKEN_${buildProfile.toUpperCase()}`;
const dopplerToken = process.env[tokenKey];
if (!dopplerToken) return baseConfig;

const generateConfigWithSecrets = () => {
  // const secrets = await dopplerSecrets.getSecrets(dopplerToken);
  const secrets = JSON.parse(
    require("child_process").execSync("node ./scripts/doppler-secrets.js")
  );

  console.log({ secrets });
  // Destructure secrets needed...
  const myEnv = secrets.MY_ENV || "NOPE...";

  return {
    expo: {
      ...baseConfig.expo,
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
};

const config = generateConfigWithSecrets();

export default config;
