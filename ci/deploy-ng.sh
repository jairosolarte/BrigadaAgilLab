git config --global user.email "travis@travis-ci.org"
git config --global user.name "Travis CI"

git remote add origin-ci https://femago:$GITHUB_API_KEY@github.com/UAMISO4101/BrigadaAgilLab.git
git subtree push --prefix ng origin-ci deploy-ng