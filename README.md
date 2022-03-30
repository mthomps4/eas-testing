# EAS walk

- expo init
- eas init (updates app.json)
- eas build:configure (generates eas.json)

## EAS JSON

- added APP_ENV to test envs later
- created a "local" profile that will produce a build for the emulators ios and build an apk vs aab for Android. (Drag n drop to emulators - hit link for device)
<https://docs.expo.dev/build-reference/simulators/>
<https://docs.expo.dev/build-reference/apk/>

## For App Stores

- Create or Have an Apple Dev account $99
- You can build and sign your app using EAS Build, but you can't upload it to the Google Play Store unless you have a membership, a one-time $25 USD fee

## First Build

- eas build --platform all
- eas build --platform ios
- eas build --platform android

### Asks to generate and provide app signing creds

#### ios

- Would you like to log in to your apple account (Y)
- Team selected
- Provider selected
- bundle identifier registered `org.name.babygroot`
- Sync capabilities (none)
- Generate Apple Distribution Cert (Y) (OR REUSE KNOWN)
- Created App Cert
- Generate a new Apple Provisioning Profile (Y)
- Created
- Would you like to set up Push Notifications (N)
- Build Queued...

```sh
Build details: https://expo.dev/accounts/mthomps4/builds/24110723-e9fa-417e-b41f-62e79142593f

Waiting for build to complete. You can press Ctrl+C to exit.
✔ Build finished

🍎 iOS app:
https://expo.dev/artifacts/eas/5sj4Z78jvZ5d6h7iAp7XcD.ipa
```

#### android

- Linked to project @mthomps4/baby-groot
- Using remote Android Creds (Expo Server)
- Generate a new Android Keystore (Y)
- created
- Uploaded to EAS
- Build queued...

```sh

Build details: https://expo.dev/accounts/mthomps4/builds/e772e8b7-0928-4596-9b87-3df81c3f4fdb

Waiting for build to complete. You can press Ctrl+C to exit.
✔ Build finished

🤖 Android app:
https://expo.dev/artifacts/eas/uzE71nNNpSFfCKRtf8YERZ.aab
```

## First LOCAL Build for Simulators

### Local ios

- `eas build --platform ios --profile local`
- Linked
- Uploaded to EAS
- Build Queued...

```sh
Build details: https://expo.dev/accounts/mthomps4/builds/2133034b-c7b7-4cf8-b256-0d6da097fb41

Waiting for build to complete. You can press Ctrl+C to exit.
✔ Build finished

🍎 iOS app:
https://expo.dev/artifacts/eas/56M1F2BSEXJ9NTggts9X7H.tar.gz
```

**UH OH!!!**
Got the `babygroot.app` file but when running

```sh
No bundle URL present.
Make sure youre running a packager server or have included a .jsbundle file in your application bundle.
```

Make sure Metro is running: `yarn start` Then start the app from the simulator

### Local Android

- This actually threw an error for `expo-dev-client` out the gate. Probably the issue with needing metro for ios as well.
Not the focus of this Repo... Moving on.

## Deploy to Store

### ios - take 2

- add preview profile to eas.json submit
- `eas submit -p ios --profile preview`
- 2FA w/ App Store Creds
- What would you like to submit? › - Use arrow-keys. Return to submit.
❯   Select a build from EAS
    Provide a URL to the app archive
    Provide a path to a local app binary file
    Provide a build ID to identify a build on EAS
? Which build would you like to submit? › - Use arrow-keys. Return to submit.
❯   - ID: 24110723-e9fa-417e-b41f-62e79142593f, Finished at: 3/25/2022, 1:36:04 PM
        App version: 1.0, Build number: 1, SDK: 44.0.0
        Profile: production, Release channel: Unknown
        Authored by: mthomps4
  - None of the above (select another option)
Looking up credentials configuration for org.name.babygroot...
? Select what to use for your project: › - Use arrow-keys. Return to submit.
    [Add a new ASC API Key]
❯   [Enter an App Specific Password]

- Please enter your Apple app-specific password.
Learn more: <https://expo.fyi/apple-app-specific-password>
This option will be deprecated soon. You will still be able to provide your password with the EXPO_APPLE_APP_SPECIFIC_PASSWORD environment variable.
✔ Your Apple app-specific password: … *******************

ASC App ID:  1616581395
Project ID:  8482c23d-2aed-46f1-aacb-8efa56bddddc
Apple ID:    matt@3wirebuild.com

✔ Scheduled iOS submission

Submission details: <https://expo.dev/accounts/mthomps4/projects/baby-groot/submissions/1b3b0c20-1400-4662-beb8-45ec46bb0fcc>

Waiting for submission to complete. You can press Ctrl+C to exit.
⠼ Submitting your app to Apple App Store Connect: submission in progress

***

OOOPS... added APP ICON

- `eas submit -p ios --profile preview --auto-submit
- creds
- no push notifications
- didn't have ascAppId so it asks for App Specific PW
- Entered...

- Build queued...
- built
- auto submitted :tada:

UPDATE: added `autoIncrement: version` to eas
> Bumping expo.version from 2.0.1 to 2.0.2

### android - take 2

FIRE

## Killed the first round with fire... take 2

### ios - take 3

- `reverted/removed variant specifics`
- `eas build -p ios --profile preview`
- Do you want to log into Apple (Y)
- Generate new Apple Distribution Cert (Y)
- Select Device for ADHOC build (me)
- Would you like push notifications (Y)
  - Chose existing key
- Expo auto bumped version from 2.0.4 to 2.0.5
- Build queued...
