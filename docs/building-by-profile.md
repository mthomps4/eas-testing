# Building By Profile

Alright, we have one final step before we can test this next build. Our app config has a set of hardcoded values in `app.json`. We need to migrate to `app.config.js` to make some of these values a bit more dynamic.

Values in app.json are no longer valid for BUILD in our BARE workflow. All the values needed are coded to native files and/or in our EAS.json build/submit blocks. App.config is what drives our Manifest for Constants if Expo Constants are used for any reason. App.json/config is primarily leveraged in MANAGED workflows. We go ahead and change a few things here to help stay consistent when/if observing that manifest.

## App Config

`app.json` (ORIGINAL / OLD file)

```json
{
  "expo": {
    "name": "baby-groot",
    "slug": "baby-groot",
    "owner": "mthomps4",
    "version": "2.0.6",
    "assetBundlePatterns": [
      "**/*"
    ],
    "extra": {
      "eas": {
        "projectId": "8482c23d-2aed-46f1-aacb-8efa56bddddc"
      }
    },
  }
}

```

`app.config.js` (Our New File)

```js
// eas build env || .env.* file from start:* (yarn start:dev)
const profile = process.env.APP_ENV;
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
          projectId: "asdf-asdf-asdf-asdf",
        },
        profile,
        appName,
      },
    },
  };
}

export default config;
```

### Reference Links

- <https://docs.expo.dev/build-reference/variables>
- <https://docs.expo.dev/build-reference/variables/#built-in-environment-variables>
- <https://docs.expo.dev/build-reference/variables/#can-i-share-environment-variables-defined-in>

-

## Lets build "Preview"

Save and push everything so far.

Run: `eas build -p ios --profile preview`
This will kick off a build for iOS using our Preview profile.
Our Build profile has noted a `scheme` for this particular build that will map to our `targets` previously updated in our Podfile.

Follow the prompts similar to our First Build.

- AppleCreds
- Say yes to generating new Profiles (this will create our `.preview`) in Apple Developer Store.
- You can choose the same devices and Push Notification key
- then...wait
- ...waiting
- ...And hopefully
- SUCCESS!

You should see a QR code to download. Go ahead and scan that with your device.

This time you should see some _slight_ differences.
When getting the prompt from Expo, you should see the name has changed to preview.

Assuming the app successfully downloads you should see:

- Our PREVIEW app next to our original build app
- Our new App Icon
- The name of the App on the home screen w/ (Preview)

CONGRATS!! :tada:

## Next: TO THE APP STORE

[To the App Store](./to-the-app-store.md)
