printf "1 - Build source code\n"
yarn tsc

printf "\n2 - Install dependencies\n"
cp package.json yarn.lock build
cd build
yarn --production