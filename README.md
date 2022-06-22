# EAS Walk with Build Profiles

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

**Preview:** A RELEASE build via Expo. We would look to have CI build this each PR as a sanity check. If we wish to test the build of that PR, we are able to download vis Expo QR/URL. (Note: this still produces an apk for Android down)

**Alpha:** TestFlight/Alpha submission. This is the first pass at getting the app to the app store. From here, we can create test groups for both Internal folk and External clients/stakeholders. This build will never actually be release, but is an easy way to run new features by our clients. If you are coming over from Web, this is our "Staging/QA" sandbox. You can imagine this may point to a different dataset, etc. We only need to bump the buildNumber/versionCode here.

**Production:** TestFlight/Prod track submission. The real deal, we can still create test groups for Sanity checks before submitting. This would point to production data and APIs. We would Tag and bump the versions appropriately, test, and submit.

*NOTE: Both Simulator and Development builds require `expo-dev-client`. More about Expo Dev Client here [docs/expo-dev-client-setup](./docs/expo-dev-client-setup.md)*

## The Process

There's alot to cover Lets [Get Started](./docs/getting-started.md)

### Sections

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

## Notes and Resources

### Useful Commands

- `expo start -c` to clear the Metro Bundler cache
- `npx pod-install` to install pods for iOS. If you are used to yarn, alias to something like `yarn pods`.

### Links

#### Expo on M1s

- [JDK for M1s](https://discord.com/channels/370570267069513731/773706016457621545/961380144650539049)

#### Extra Deps

- [Expo Modules](https://docs.expo.dev/bare/installing-expo-modules/)
- [Expo Dev Client](https://www.npmjs.com/package/expo-dev-client)
- [Expo Constants](https://docs.expo.dev/versions/latest/sdk/constants/)
- [uri-scheme](https://www.npmjs.com/package/uri-scheme)

*Note: Run with `expo install dep`*

#### Links

- [Expo Glossary](https://docs.expo.dev/workflow/glossary-of-terms/)
- [Intro to EAS Build](https://docs.expo.dev/build/introduction/)
- [App Variants](https://docs.expo.dev/build-reference/variants/)
- [Auto Submit](https://docs.expo.dev/build/automating-submissions/)
- [Submitting Docs](https://docs.expo.dev/submit/ios/)
- [EAS JSON](https://docs.expo.dev/build/eas-json/)
- [Configuration w/ app.config](https://docs.expo.dev/workflow/configuration/)
- [App config scheme](https://docs.expo.dev/versions/latest/config/app/)

#### ENVs

- [ENVs w/ Expo](https://docs.expo.dev/guides/environment-variables/)
- [ENVs and Common Questions](https://docs.expo.dev/build-reference/variables/#common-questions)
