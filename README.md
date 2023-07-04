# Tab Containers

> Note: This add-on is essentially a clone of [Firefox Multi-Account Containers](https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/) ([source code](https://github.com/mozilla/multi-account-containers)) with one exception–I've the black container color to the popup interface. This has been documented in [Github issues](https://github.com/mozilla/multi-account-containers/issues/1822) and a [pull request](https://github.com/mozilla/multi-account-containers/pull/2192) by @aaronkollasch has been "open" since November 2021. Given that those who manage the extension seem to disagree that this is a valuable feature (in spite of the fact that Firefox's built-in 'Container Tabs' includes the 'black'/'grey' container color option).

## Add-on description

Multi-Account Containers is a clone of <a rel="noopener noreferrer nofollow" target="_blank" href="https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/">Firefox Multi-Account Containers</a> with the added feature/bug fix of being able to create & manage containers with "black"/"grey" color. This solves the <a rel="noopener noreferrer nofollow" target="_blank" href="https://github.com/mozilla/multi-account-containers/issues/1822">known issue</a> in Firefox Multi-Account Containers–<a rel="nofollow noopener noreferrer" href="https://github.com/mozilla/multi-account-containers/pull/2192" target="_blank">this solution has been submitted to Mozilla</a> and have chosen not to implement it at the sole discretion of one github user.

The credit for this extension belongs to those at Mozilla, I just fixed some CSS and JS.

This extension will always be maintained up-to-date with the current version of Firefox Multi-Account Containers (until it isn't). For nerds, the <a href="https://github.com/hwknsj/multi-account-containers" target="_blank">source code is available on Github</a>.

## Development

### Requirements

- Node 12+ (v16+ recommended)
- Yarn (`npm i -g yarn@latest`)
- Firefox 91.1.0+
- Git 2.13+

Also see the guide in [Contributing][contributing].

### Build

`Yarn` is required: simply `npm i -g yarn`, then

```sh
yarn run package
```

## The extension will output as `addon.xpi`.

[![Test](https://github.com/mozilla/multi-account-containers/actions/workflows/test.yaml/badge.svg)](https://github.com/mozilla/multi-account-containers/actions/workflows/test.yaml)

The Multi-Account Containers extension lets you carve out a separate box for each of your online lives – no more opening a different browser just to check your work email!

Learn more about Multi-Account Containers in
[our end-user documentation][enduser].

## Contributing

Everyone is welcome to contribute to Multi-Account Containers. To learn how
to contribute a patch to Multi-Account Container, please
[read our contributing guide][contributing].

You can also chat with us on [our Matrix room][matrix] or [our forum][forum].

This repository is governed by Mozilla's code of conduct and etiquette
guidelines. For more details, [please read the Mozilla Community Participation Guidelines][cpg].

### License

This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at https://mozilla.org/MPL/2.0/.

<!-- Please keep the list in alphabetical order -->

[contributing]: CONTRIBUTING.md
[cpg]: https://www.mozilla.org/about/governance/policies/participation/
[enduser]: https://support.mozilla.org/en-US/kb/containers
[forum]: https://discourse.mozilla.org/c/containers/223
[matrix]: https://matrix.to/#/#containers:mozilla.org
