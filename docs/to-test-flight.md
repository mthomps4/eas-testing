# To the App Store

## Prepping a build for TestFlight

If you recall in our Preview build profile, we set this build to be for "internal"

```json
"preview": {
  "distribution": "internal",
}
```

This works great for installing from Expo but for IOS, we need to get this to TestFlight ASAP for test user groups, feedback, and more importantly Apples approval process. This will let of know of any "Gotchas" sooner rather than later when trying to submit our app for Production. To do that we need a new Build Profile. For this example, we are going to assume we still aren't quite ready for production and want to have this app pointing to Staging credentials. We'll call this build profile `ALPHA`. This also coordinates with Androids "Tracks" for Alpha, Beta, Prod.

```json
    "build": {
      "preview": {
        // ...previous setup
      },
      "alpha": {
        "extends": "base",
        "channel": "alpha",
        "env": {
          "APP_ENV": "alpha"
        },
        "ios": {
          "scheme": "myApp-alpha",
          "buildConfiguration": "Release"
        },
      },
    }
```

Similar to before we'll add a new `scheme` for `-alpha` in our `ios` block for our future target. The main difference here is that we don't have a `distribution` key as it defaults to `"store"`.

### Rinse and Repeat

Take a look back at our notes for [adding build targets](./ios-adding-build-targets.md) for ios.
Follow all of these instructions until you have a new target `alpha` with an updated name and appIcon.
All of this should be the exact same until we go to build.

## Building for TestFlight

So you have a new target set, and you're ready to build.
Simlar to our preview command, run:
`eas build -p ios --profile alpha`

Again, follow the prompts and let EAS handle all the things:

- Yes Apple Creds
- Yes create a new profile
- select device(s)
- select push notification keys
- wait...
- wait...
- Hopefully Success! (If not double check all the steps for building our targets)

GOTCHA: If you are using Expo Modules remember to RE RUN the `npx` command each time you create a new target. This will ensure all the native files are updated with the knowledge of your new target.

If you have a successful build, lets go see the differences in Expo Dashboard.

---

SEE The Brain Dump [dump](./dump.md)
