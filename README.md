<!-- symbiote-template-region-start 1 -->

<p align="center" width="100%">
  <img width="300" src="https://raw.githubusercontent.com/Xunnamius/mongo-utils/refs/heads/main/logo.png">
</p>

<p align="center" width="100%">
<!-- symbiote-template-region-end -->
Simple opinionated tools for streamlining mongodb driver interactions
<!-- symbiote-template-region-start 2 -->
</p>

<hr />

<div align="center">

[![Black Lives Matter!][x-badge-blm-image]][x-badge-blm-link]
[![Last commit timestamp][x-badge-lastcommit-image]][x-badge-repo-link]
[![Source license][x-badge-license-image]][x-badge-license-link]
[![Uses Semantic Release!][x-badge-semanticrelease-image]][x-badge-semanticrelease-link]

</div>

<br />

# mongo-utils

<!-- symbiote-template-region-end -->

Utilities for a more pleasant DX with the mongodb driver.

<!-- symbiote-template-region-start 3 -->

---

<!-- remark-ignore-start -->
<!-- symbiote-template-region-end -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Packages](#packages)
- [Usage](#usage)
- [Contributing and Support](#contributing-and-support)
  - [Contributors](#contributors)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- symbiote-template-region-start 4 -->
<!-- remark-ignore-end -->

<br />

## Packages

<!-- symbiote-template-region-end -->

- [@-xun/mongo-common][1] — Common schema and data exports for mongo-utils.
- [@-xun/mongo-schema][2] — Tools for sharing common schemas across utility
  packages.
- [@-xun/mongo-test][3] — Tools for testing mongo databases.
- [@-xun/mongo-item][4] — Tools for quickly finding items and documents in
  mongo.
- [shared][5] — Common unpublished multiversal imports (beware the dual package
  hazard!).

## Usage

Currently, @-xun/mongo-schema is the base package (though it depends on
[@-xun/next-env][6]). It is responsible for ensuring each database used by the
software is always available and initialized as described by the currently
registered schema.

For that reason, @-xun/mongo-schema is relied upon by @-xun/mongo-test, which
contains tools for manipulating the software's databases while under test.

@-xun/mongo-common relies on both @-xun/mongo-schema and @-xun/mongo-test for
their types (as well as several @-xun/next-\* packages), and contains common
baseline schemas (along with their dummy testing data) used in some way by most
of my mongo-related software.

@-xun/mongo-item and @-xun/mongo-oid-sort are standalone tools.

Projects should call `setSchemaConfig()` (from @-xun/mongo-schema) as early as
possible during their initialization process. When running tests,
`setDummyData()` from (@-xun/mongo-test) should similarly be called as early as
possible. They can be passed common schema and dummy data from
@-xun/mongo-common; this data should be tweaked further before being passed to
`setSchemaConfig()` and `setDummyData()`. Once those two functions are called,
`getDb()` and related functions will all work out-of-the-box and without further
configuration!

<!-- symbiote-template-region-start 5 -->

## Contributing and Support

**[New issues][x-repo-choose-new-issue] and [pull requests][x-repo-pr-compare]
are always welcome and greatly appreciated! 🤩** Just as well, you can [star 🌟
this project][x-badge-repo-link] to let me know you found it useful! ✊🏿 Or [buy
me a beer][x-repo-sponsor], I'd appreciate it. Thank you!

See [CONTRIBUTING.md][x-repo-contributing] and [SUPPORT.md][x-repo-support] for
more information.

<!-- symbiote-template-region-end -->
<!-- TODO: additional contribution/support sections here -->
<!-- symbiote-template-region-start 6 -->

### Contributors

<!-- symbiote-template-region-end -->
<!-- symbiote-template-region-start 7 -->
<!-- remark-ignore-start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- remark-ignore-end -->

Thanks goes to these wonderful people ([emoji
key][x-repo-all-contributors-emojis]):

<!-- remark-ignore-start -->
<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->

<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://xunn.io/"><img src="https://avatars.githubusercontent.com/u/656017?v=4?s=100" width="100px;" alt="Bernard"/><br /><sub><b>Bernard</b></sub></a><br /><a href="#infra-Xunnamius" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/Xunnamius/mongo-utils/commits?author=Xunnamius" title="Code">💻</a> <a href="https://github.com/Xunnamius/mongo-utils/commits?author=Xunnamius" title="Documentation">📖</a> <a href="#maintenance-Xunnamius" title="Maintenance">🚧</a> <a href="https://github.com/Xunnamius/mongo-utils/commits?author=Xunnamius" title="Tests">⚠️</a> <a href="https://github.com/Xunnamius/mongo-utils/pulls?q=is%3Apr+reviewed-by%3AXunnamius" title="Reviewed Pull Requests">👀</a></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td align="center" size="13px" colspan="7">
        <img src="https://raw.githubusercontent.com/all-contributors/all-contributors-cli/1b8533af435da9854653492b1327a23a4dbd0a10/assets/logo-small.svg">
          <a href="https://all-contributors.js.org/docs/en/bot/usage">Add your contributions</a>
        </img>
      </td>
    </tr>
  </tfoot>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->
<!-- remark-ignore-end -->

This project follows the [all-contributors][x-repo-all-contributors]
specification. Contributions of any kind welcome!

<!-- symbiote-template-region-end -->

[x-badge-blm-image]: https://xunn.at/badge-blm 'Join the movement!'
[x-badge-blm-link]: https://xunn.at/donate-blm
[x-badge-lastcommit-image]:
  https://img.shields.io/github/last-commit/Xunnamius/mongo-utils?style=flat-square
  'Latest commit timestamp'
[x-badge-license-image]:
  https://img.shields.io/github/license/Xunnamius/mongo-utils?style=flat-square
  "This package's source license"
[x-badge-license-link]:
  https://github.com/Xunnamius/mongo-utils/blob/main/LICENSE
[x-badge-repo-link]: https://github.com/Xunnamius/mongo-utils
[x-badge-semanticrelease-image]:
  https://xunn.at/badge-semantic-release
  'This repo practices continuous integration and deployment!'
[x-badge-semanticrelease-link]:
  https://github.com/semantic-release/semantic-release
[x-repo-all-contributors]: https://github.com/all-contributors/all-contributors
[x-repo-all-contributors-emojis]: https://allcontributors.org/docs/en/emoji-key
[x-repo-choose-new-issue]:
  https://github.com/Xunnamius/mongo-utils/issues/new/choose
[x-repo-contributing]: /CONTRIBUTING.md
[x-repo-pr-compare]: https://github.com/Xunnamius/mongo-utils/compare
[x-repo-sponsor]: https://github.com/sponsors/Xunnamius
[x-repo-support]: /.github/SUPPORT.md
[1]: ./packages/mongo-common
[2]: ./packages/mongo-schema
[3]: ./packages/mongo-test
[4]: ./packages/mongo-item
[5]: ./packages/shared
[6]: https://github.com/Xunnamius/react-utils/packages/next-env
