#! /usr/bin/env bash

echo 'Prebuild stage:\n'
echo 'Generate Build Info.'

INPUT_FILE_PATH="./plugins/ConsoleBuildInfo.mjs"
OUTPUT_FILE_PATE="./plugins/ConsoleBuildInfo.bak.mjs"

COMMIT_HASH=$(git rev-parse HEAD)
BUILD_TIME=$(date)

sed -e "s/COMMIT_HASH/\"$COMMIT_HASH\"/" \
  -e "s/BUILD_TIME/\"$BUILD_TIME\"/" \
  $INPUT_FILE_PATH >$OUTPUT_FILE_PATE
