#!/bin/sh
source ~/.nvm/nvm.sh
nvm install 7.7.3
nvm use 7.7.3
node -v
npm -v
cd ng/
npm install