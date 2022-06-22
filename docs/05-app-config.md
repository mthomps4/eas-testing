# App Config

<https://docs.expo.dev/workflow/configuration/>

As you can imagine, iOS and Android have very specific and different way's of doing things. Expo has tried to manage this pain the best they can with their Managed workflows, however, we know we'll need to "Eject" at some point for native integrations and full control.

What does that mean?

Well... It means we are going to bite the bullet up front and get all our BARE workflow fully set before we start tacking on the world for the client.

When Expo/EAS starts a build. It takes the knowns from `eas.json` and pumps them into our `app.json`

Looking at our default `app.json` it doesn't really give us much to work with.

```json
{
  "expo": {
    "name": "my-app",
    "slug": "my-app",
    "version": "1.0.0",
    "assetBundlePatterns": [
      "**/*"
    ]
  }
}
```

Luckily Expo provides a way to pump this json file into a config file that can be made more dynamic.

> Side Note: You can access and modify incoming config values by exporting a function that returns an object. This is useful if your project also has an app.json. By default, Expo CLI will read the app.json first and send the normalized results to the app.config.js. Meaning we can leave our app.json as 'shared' config and pump those results into our app.config.js

For our needs we'll simply change our `app.json` file into a `app.config.js` file.

Go ahead and note the section below:

```js
// https://docs.expo.dev/build-reference/variables/
// https://docs.expo.dev/build-reference/variables/#built-in-environment-variables
// https://docs.expo.dev/build-reference/variables/#can-i-share-environment-variables-defined-in

// Not set when running expo-dev-client locally
const buildId = process.env.EAS_BUILD_ID || "local-build";
const buildProfile =
  process.env.EAS_BUILD_PROFILE || "local profile check APP_ENV";
const gitHash = process.env.EAS_BUILD_COMMIT_HASH || "local build";
const isCI = process.env.CI; // 1 or 0

// eas build env || .env.* file from start:* (yarn start:dev)
const profile = process.env.APP_ENV || "local";

let config = {};

if (profile) {
  const isProduction = profile === "production";
  const appName = isProduction ? "baby-groot" : `baby-groot-${profile}`;

  config = {
    expo: {
      name: appName,
      slug: "my-cool-app", // NOTE: set this to `appName` if you wish to see different projects in the Expo Dashboard
      owner: "Expo Project Owner",
      version: "2.0.6", // TODO: should get updated from EAS/Doppler
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
```

Alright so there's a few use-cases and setup to note here.
Lets focus on the `config` block.

Config passes an `expo` block. This is how Expo knows where this project lives, its identifier (slug), etc. There are a lot of keys that can be passed here but `name`, `slug`, and `owner` are required.

## ENVs

The `extra` block. This is uses for any APP ENVs you would like to surface and use via [Expo Constants](https://docs.expo.dev/versions/latest/sdk/constants/). For now we've noted a few pieces about our app and build, but eventually this could be API keys for Sentry, Stripe, etc.

You'll also note some of these come from pre defined ENVs from Expo. When EAS builds it _should_ have these defined. While you may not need them, its good to have on hand if you ever want to check the commit of a build, etc.

This will not be our last adventure with ENVs -- once we get all of our variants building, we'll need to come back and introduce Doppler and CI/CD via GitActions.

### ENV TLDR

Our CI/CD will utilize Doppler to pump ENVs into the build container.
We'll tell Doppler _which_ set of ENVs based off the `profile` we've selected. (preview, alpha, production)

We'll be able to access these via `process.env` the same way in our `app.config` above.

## Next

[Building Preview](06-building-by-profile.md)
