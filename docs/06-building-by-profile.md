# Building By Profile

## Lets build "Preview"

Save and push everything so far.

### iOS

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

### Android

Assuming you've gotten your Credentials for Android in order [see android credentials](./android-accounts-and-expo-credentials.md) you should be all set to run a similar command.

Run `eas build -p android --profile preview`

- waiting
- waiting
- Hooo RAY!

## QR Codes

The terminal should spit out a QR code if built successfully. Alternatively, you can find the same QR code in Expo's Dashboard under the specific build.

Assuming everything was successful, you should have your PREVIEW build installed on your phone!

## Next: TO THE APP STORE

[To the App Store](./07-to-the-app-store.md)
