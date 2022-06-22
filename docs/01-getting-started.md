# Getting Started

## TOC

- [Getting Started](#getting-started)
  - [TOC](#toc)
  - [Sections](#sections)
  - [Requirements](#requirements)
  - [Recommended Reads](#recommended-reads)
  - [Downloads](#downloads)
  - [Goal](#goal)
    - [Build Use Cases](#build-use-cases)
  - [Setup a new Project](#setup-a-new-project)
    - [Init](#init)
    - [Add Typescript](#add-typescript)
    - [Add some Code](#add-some-code)
    - [Expo Go](#expo-go)
      - [On machine](#on-machine)
      - [On Device](#on-device)
      - [Test](#test)
  - [What's next](#whats-next)

## Sections

- [Getting Started](./01-getting-started.md)
- [Building Your First App](./02-building-your-first-app.md)
- [Adding Build Variants](./03-adding-build-variants.md)
  - [Adding Targets for iOS](./04-ios-adding-build-targets.md)
  - [Adding Android Flavors](./04-android-adding-flavors.md)
- [App Config](05-app-config.md)
- [Building Preview](./06-building-by-profile.md)
- [To the App Store](./07-to-the-app-store.md)
  - [iOS: to TestFlight](./08-ios-to-test-flight.md)
  - [Android: to GooglePlay](./08-android-to-google-play.md)
- [Creating the Development Build](./09-creating-the-development-build.md)
- [Creating the Simulator Build](./09-creating-the-development-build.md#simulation-builds)
- [ENVs with Doppler](./10-doppler-envs-w-expo.md)
- [CI/CD setup](./11-ci-cd-setup.md)

## Requirements

- An Expo Account [signup](https://expo.dev/signup)
- An Active Apple Developer for iOS/TestFlight [developer.apple.com](https://developer.apple.com)
- An Active Google Play Store account for Android Submission [developer.android.com](https://developer.android.com/)

## Recommended Reads

- [JDK for M1s](https://discord.com/channels/370570267069513731/773706016457621545/961380144650539049)
- [Expo Glossary](https://docs.expo.dev/workflow/glossary-of-terms/)

## Downloads

- [Expo Cli](https://docs.expo.dev/workflow/expo-cli/)
`yarn add -g expo-cli`
- [EAS Cli](https://github.com/expo/eas-cli)`yarn global add eas-cli`
- [iOS Sim](https://docs.expo.dev/workflow/ios-simulator/)
- [Android Studio](https://docs.expo.dev/workflow/android-studio-emulator/)
- [Expo Go](https://expo.dev/client) (on Device)

## Goal

Create a BARE Expo application and leverage EAS with the following "variants" that can be installed on a SINGLE device.[See App Variants](https://docs.expo.dev/build-reference/variants/)

- *Simulator
- Development
- Preview
- Alpha
- Production

### Build Use Cases

**Simulator:** This build outputs a `.app` and `.apk` file for your local simulator. You can drag and drop these builds to your running simulator. (Uses Expo-Dev-Client)

**Development:** Builds a DEBUG build via Expo. This is installed via Expo QR Code/URL via Expo profile. We do not worry about bumping the build/version for this build, this is simply for testing/debugging a specific build. (Uses Expo-Dev-Client)

**Preview:** A RELEASE build via Expo. We would look to have CI build this each PR as a sanity check. If we wish to test the build of that PR, we are able to download vis Expo QR/URL. (Note: this still produces an apk for Android)

**Alpha:** TestFlight/Alpha submission. This is the first pass at getting the app to the app store. From here, we can create test groups for both Internal folk and External clients/stakeholders. This build will never actually be release, but is an easy way to run new features by our clients. If you are coming over from Web, this is our "Staging/QA" sandbox. You can imagine this may point to a different dataset, etc. We only need to bump the buildNumber/versionCode here.

**Production:** TestFlight/Prod track submission. The real deal, we can still create test groups for Sanity checks before submitting. This would point to production data and APIs. We would Tag and bump the versions appropriately, test, and submit.

*NOTE: Both Simulator and Development builds require `expo-dev-client`. More about Expo Dev Client here [docs/expo-dev-client-setup](./docs/expo-dev-client-setup.md)*

## Setup a new Project

### Init

- To start lets create a Bare workflow with `expo init` and selecting BARE workflow. OR use the shortcut here `expo init --template bare-minimum`
![bare workflow selection](./images/expo-init.png)

### Add Typescript

- Add Typescript by following the docs here. [Expo Typescript](https://docs.expo.dev/guides/typescript/)

### Add some Code

- [Expo Bare "Hello World"](https://docs.expo.dev/bare/hello-world/)
- Test your simulator with `yarn ios|android`

### Expo Go

#### On machine

- Run `eas login`
- Authenticate with your Expo.dev account
- Confirm with `eas whoami` | `expo whoami`

#### On Device

- Log into Expo Go with the same account

#### Test

- Now when you run `yarn ios|android` you should see the app running under "Recently in Development".
- Click the app in Expo Go
- You should see the metro bundler start to build in your terminal. Once complete, you should see the app running THROUGH Expo Go on your local device. This will differ slightly from our Development build, but more on that later.

## What's next

At this point, you should have a "Hello World" application and the ability to run it in a simulator with `yarn ios|android`. If that's the case, lets dive into the fun world of building your App for deployment. [Building Your App](./building-your-first-app.md)
