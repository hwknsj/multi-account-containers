# Tab Containers - a privacy/proxy/vpn container extension for Firefox

Tab Containers enables advanced configuration and creation of containers (groups) which _contain_ separate cookies, local/session storage, cache, etc. allowing one to, for example, separate your shopping browsing from your spying company email or from Google who will rapaciously sell your consumer identity to any number of advertisers/large data firms.

Tab Containers also enables _per container_ HTTP(S)/SOCKS proxy configuration or VPN configuration (with Mozilla VPN). This is incredibly useful if there are some sites you need to access via a proxy or VPN to access your work's internal sites or bypass a regional restriction.

Developers who wish to use a development tool such as [Charles Proxy](https://www.charlesproxy.com) or [Requestly](https://github.com/requestly/requestly) (a great app worth checking out) which use a local proxy (e.g. `http://localhost:8888`) to intercept, modify, redirect, or analyze network requests can now simply use a Tab Container (call it, for example, "dev-proxy") and ensure only requests from those tabs are captured. **No need to set a system-wide proxy!** Filter out the noise of the hundreds of irrelevant network requests.

The Tab Containers extension is available for Firefox [on the official Add-Ons by Mozilla site here](https://addons.mozilla.org/en-US/firefox/addon/tab-containers/).

## Add-on description

Tab Containers is a fork of <a rel="noopener noreferrer nofollow" target="_blank" href="https://addons.mozilla.org/en-US/firefox/addon/multi-account-containers/">Mozilla's Multi-Account Containers addon</a> ([source code](https://github.com/mozilla/multi-account-containers)) with some minor changes:

I created this fork originally to implement a feature/bug fix allowing the user to create & manage containers groups with a "black"/"grey" color. The issue has been documented before (<a rel="noopener noreferrer nofollow" target="_blank" href="https://github.com/mozilla/multi-account-containers/issues/1822">see issue 1822</a> and though a <a rel="nofollow noopener noreferrer" href="https://github.com/mozilla/multi-account-containers/pull/2192" target="_blank">solution was submitted to Mozilla</a>, the maintainers have chosen not to implement this feature despite of the fact that Firefox's built-in 'Container Tabs' allows use of the 'black'/'grey' container color option (via the about:settings page).

I try to keep this version up-to-date with Mozilla's, pending when I have time.

## Development

### Requirements

- Node 12+ (v18+ recommended)
- Yarn (`corepack install -g yarn@latest`)
- Firefox 91.1.0+
- Git 2.13+

Also see the guide in [Contributing][contributing].

### Build

`Yarn` is required: simply `corepack install -g yarn`, then

```sh
yarn run package
```

The extension will output as `addon.xpi`.

[![Test](https://github.com/hwknsj/tab-containers/actions/workflows/test.yaml/badge.svg)](https://github.com/hwknsj/tab-containers/actions/workflows/test.yaml)

Learn more about Tab Containers in
[our end-user documentation][enduser].

## Contributing

Everyone is welcome to contribute to Tab Containers. To learn how
to contribute a patch to Tab Container, please
[read the contributing guide][contributing].

You can also chat with Mozilla [our Matrix room][matrix] or [our forum][forum].

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
