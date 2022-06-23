# Does not rely on package managers
# Recommended for ephemeral environments (e.g. CI jobs)
# Supports Linux, BSD, and macOS

# Requires Curl & GnuPG:
#        Alpine: apk add curl gnupg
#   CentOS/RHEL: yum install -y curl gnupg
apt install -y curl gnupg

(curl -Ls --tlsv1.2 --proto "=https" --retry 3 https://cli.doppler.com/install.sh || wget -t 3 -qO- https://cli.doppler.com/install.sh) | sudo sh

echo -e "setup:\r\n  project: baby-groot\r\n  config: preveiw" > doppler.yaml

doppler run --token="$DOPPLER_TOKEN" -- true

# # Should pull from Expo Secrets
# # export HISTIGNORE='export DOPPLER_TOKEN*'
# # export DOPPLER_TOKEN='dp.st.prd.xxxx'