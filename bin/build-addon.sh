#!/bin/env bash

# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at http://mozilla.org/MPL/2.0/.

. $(dirname $0)/commons.sh

print Y "Installing dependencies..."
yarn install || die

print Y "Running tests..."
yarn test

print Y "Creating the final package..."

if [[ $# -gt 0 ]]; then
  EXTRA_PARAMS="--filename $1"
fi

yarn web-ext build --source-dir ./src --overwrite-dest $EXTRA_PARAMS || die
