#!/bin/sh

# https://docs.doppler.com/docs/install-cli
# https://docs.expo.dev/build-reference/infrastructure/
# https://github.com/travis-ci/travis-build/blob/061cd364c38a07c8908b420b9dd134d86b537b01/lib/travis/build/bash/travis_setup_env.bash#L22-L35

echo "Running Doppler..."
doppler --version
doppler run --token="$DOPPLER_TOKEN" -- true