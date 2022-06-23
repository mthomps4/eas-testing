# https://docs.doppler.com/docs/install-cli
# https://docs.expo.dev/build-reference/infrastructure/
# https://github.com/travis-ci/travis-build/blob/061cd364c38a07c8908b420b9dd134d86b537b01/lib/travis/build/bash/travis_setup_env.bash#L22-L35

echo "uname"
echo $uname
echo "ostype"
echo $OSTYPE

install_doppler_with_apt () {
  echo "installing doppler with apt"
  apt install -y curl gnupg
  (curl -Ls --tlsv1.2 --proto "=https" --retry 3 https://cli.doppler.com/install.sh || wget -t 3 -qO- https://cli.doppler.com/install.sh) | sudo sh
}

install_doppler_with_brew() {
  echo "installing doppler with brew"
  brew install gnupg
  brew install dopplerhq/cli/doppler
}

if grep -qi "darwin" <<< $OSTYPE ; then
  install_doppler_with_brew()
else
  install_doppler_with_apt()
fi

# doppler run --token="$DOPPLER_TOKEN" -- true

# # Should pull from Expo Secrets
# export HISTIGNORE='export DOPPLER_TOKEN*'
# export DOPPLER_TOKEN='dp.st.prd.xxxx'
# echo -e "setup:\r\n  project: baby-groot\r\n  config: preveiw" > doppler.yaml