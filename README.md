# EAS Walk with Build Profiles

## Goal

Create a BARE Expo application and leverage EAS with the following "variants" that can be installed on a SINGLE device.[See App Variants](https://docs.expo.dev/build-reference/variants/)

- *Simulator
- Development
- Preview
- Alpha
- Production

### Build Use Cases

**Simulator:** This build outputs a `.app` and `.apk` file for your local simulator. You can drag and drop these builds to your running simulator.

**Development:** Builds a DEBUG build via Expo. This is installed via Expo QR Code/URL via Expo profile. We do not worry about bumping the build/version for this build, this is simply for testing/debugging a specific build.

**Preview:** A RELEASE build via Expo. We would look to have CI build this each PR as a sanity check. If we wish to test the build of that PR, we are able to download vis Expo QR/URL.

**Alpha:** TestFlight/Alpha submission. This is the first pass at getting the app to the app store. From here, we can create test groups for both Internal folk and External clients/stakeholders. This build will never actually be release, but is an easy way to run new features by our clients. If you are coming over from Web, this is our "Staging/QA" sandbox. You can imagine this may point to a different dataset, etc. We only need to bump the buildNumber/versionCode here.

**Production:** TestFlight/Prod track submission. The real deal, we can still create test groups for Sanity checks before submitting. This would point to production data and APIs. We would Tag and bump the versions appropriately, test, and submit.

*NOTE: Both Simulator and Development builds require `expo-dev-client`. More about Expo Dev Client here [docs/expo-dev-client-setup](./docs/expo-dev-client-setup.md)*

## The Process

1. [Getting Started](./docs/getting-started.md)
2. [Building with EAS](./docs/building-your-app.md)
3. asdf

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
