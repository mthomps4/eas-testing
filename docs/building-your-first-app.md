# Your first build w/ EAS

So we have "Hello World" running. Great!

The reality, our work means little if we can't "ship it".

So before we go crazy trying to add the coolest features into our mobile app, we need to understand how the mobile world works when it comes to building, testing, and App Submission.

If you are coming over from Web now is the time to go grab a snack, and fresh drink (or two). We're need to cover a lot of terms and process.

## 10,000 ft View

There are two major players in the mobile space world. Apple and Android. There are technically others (Windows, Linux, etc), and yes React Native _can_ support them, but its rare we need them.

So for this guide we are going to chat through how to `submit` with EAS to both Expo TestFlight (iOS) and Google Play (Android).

... But before we even make it to the stores, we need a `build` of our app.

## Building Our First Build

Before we even mess with the app stores, we want to create a solid way to verify our app works as expected. Insert Expo.

There are two types of "builds" that Expo can manage for us. "internal" and "store".

As you would expect it. `store` is meant to get our app ready for the AppStores.
To start we need to make an `internal` build in Expo.

- Ensure you are logged into eas w/ `eas whoami`
- From our "hello world" app run `eas build:configure` - this will output `eas.json` and update our `app.json` file.

------

- ... Lets add EAS config (IOS ONLY - ANDROID TODO)
- ... Lets try to build for iOS
- ... Its prompting me for... a LOT?!?! WHA?
- ... What are Certs / Profiles, etc. (IOS SPECIFICS)

- ... I See an Successful Build!
- ... Expo Profile API
- ... Finding and Installing your build in Expo w/ QR code

- ... So this techincally created a cert for Production
- certs `org.name.myapp` not `org.name.myapp.preview`
- ... So how do we make this Preview?
- ... Insert Build Variants
- ... IOS ONLY (ANDROID TODO SECTION)
- ... ALL THE CONFIG (Get ya hands dirty)
- ... XCode... What am I even staring at
- ... Creating Targets and Schemes
- ... Gotchas w/ Expo Modules and Abstract Targets
- ... Lets create an APP Icon for Dev VS "Prod"
- ... Android VS IOS HOW TO App Icons
- ... All this config ...Are you lost yet?
- ... but wait App.json? config.js?!
- ... Lets try it out with a new build!
- ... So now we have preview build?!
- ... yes we have a `preview` build and can mark that off the list.

- ... Oh uh we noticed `preview`(or any other build) is crashing -- insert development build.
- ... Release VS Debug builds
- ... More about Metro bundler
- ... Insert Expo Dev client
- ... Why Expo Dev Client
- ... The setup
- ... The config
- ... Building for different Profiles w/ EAS
- ... But wait!!! The IDENTIFIER
- ... Shoot, So we need another build Variant
- ... IOS Specifics / ANDROID TODO (Build Profile for DEV)
- ... Rinse Repeat Targets (IOS)
- ... Gotchas w/ Expo Modules and Abstract Targets
- ... XCode Remove that Dupe File ^^^
- ... New Build Script for Dev
- ... Download and Test
- ... Troubleshooting QR Code? (Somethings off)
- ... WAIT Its looking for Metro Bundler
- ... More about Expo Dev Client and how to run
- ... Running Expo Client
- ... Making changes
- ... When you need to cut a new build for Dev

-- Simulator

- What if I don't have a physical device to test with
- ...  Insert Sim Builds
- ... Looking at our end goal, now that we understand the DevClient
Simulator Builds
- Same as Dev but ZIP file for simulators
No scanning a QR Code

----

- ... All of this FOR A Proper Preview BUILD?! (yes)

---

## Next Steps... TO THE APP STORE

### TODO FOR ANDROID

### IOS

- TestFlight 101
- Create a Test Group (INTERNAL)
- Alpha VS Production (use case for both)
- BuildNumber vs Versioning
- Another look at app.config.js
- Repeat -- Lets create yet another Profile/Variant
- Entitlements in XCode
  - Wha? My apps not entitled
- Build (Don't Submit)
- See the different Prompts for Certs
- See the difference in EXPO
- EAS Submit (Terminal)
- Seeing your app in TestFlight
- Managing Builds to Groups
- Auto approving the "yes, no, no, Just let me test please" prompts (TODO)
- Downloading TestFlight
- Getting the App Invite
- Test Drive your app

Now you have 3 App Variants:

- Dev (Debug build)
- Preview (Release build via Expo)
- Alpha (Release build from TestFlight)

Lets get our final Profile set for Production!

... rinse repeat -- build -- test (TODO for Android)
