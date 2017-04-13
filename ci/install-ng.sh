#!/bin/sh
source ~/.nvm/nvm.sh
nvm install 7
node -v
npm -v
cd ng/
npm install
node -v
npm -v