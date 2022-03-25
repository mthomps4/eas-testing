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

### Local Android

- adsf
