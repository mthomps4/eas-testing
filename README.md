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

## Generate and Provide app signing creds

- eas build --platform all
- eas build --platform ios
- eas build --platform android
