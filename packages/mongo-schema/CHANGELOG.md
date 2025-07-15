# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## @-xun/mongo-schema[@1.3.0][3] (2025-07-14)

### ✨ Features

- Add multitenancy support via `AsyncLocalStorage` ([dc00823][4])

### 🪄 Fixes

- **packages/mongo-schema:** improve fidelity of `destroyDb` ([407bab2][5])

<br />

### 🏗️ Patch @-xun/mongo-schema[@1.3.2][6] (2025-07-15)

#### ⚙️ Build System

- **deps:** bump @-xun/env from 1.1.2 to 1.1.3 ([ec04ff2][7])

<br />

### 🏗️ Patch @-xun/mongo-schema[@1.3.1][8] (2025-07-15)

#### 🪄 Fixes

- **packages:** loosen some type constraints and further improve intellisense ([fa910a4][9])

<br />

## @-xun/mongo-schema[@1.2.0][10] (2025-07-07)

### ✨ Features

- **packages:** use shared @-xun/api-error when throwing certain errors ([f4f436a][11])

<br />

### 🏗️ Patch @-xun/mongo-schema[@1.2.3][12] (2025-07-13)

#### ⚙️ Build System

- **packages/shared:** allow internal `resetSharedMemory` function to preserve values on demand ([215b087][13])

<br />

### 🏗️ Patch @-xun/mongo-schema[@1.2.2][14] (2025-07-13)

#### ⚙️ Build System

- **deps:** bump @-xun/api-error from 1.1.0 to 1.1.1 ([f38abd6][15])
- **deps:** bump @-xun/env from 1.1.1 to 1.1.2 ([1dc023e][16])
- **deps:** bump rejoinder from 2.0.1 to 2.0.2 ([ff03e50][17])

<br />

### 🏗️ Patch @-xun/mongo-schema[@1.2.1][18] (2025-07-08)

#### ⚙️ Build System

- **deps:** bump @-xun/api-error from 1.0.0 to 1.1.0 ([21a2ba8][19])
- **deps:** bump @-xun/env from 1.1.0 to 1.1.1 ([52e2961][20])
- **deps:** bump core-js from 3.43.0 to 3.44.0 ([6f3bf82][21])

<br />

## @-xun/mongo-schema[@1.1.0][22] (2025-06-03)

### ✨ Features

- **packages:** allow `setupMemoryServerOverride` to initialize schema and dummy db ([c04211e][23])

### ⚙️ Build System

- **deps:** bump @-xun/next-env from 1.0.1 to 1.0.2 ([c411889][24])
- **deps:** bump mongodb from 6.16.0 to 6.17.0 ([f3ac753][25])

<br />

### 🏗️ Patch @-xun/mongo-schema[@1.1.5][26] (2025-07-03)

#### ⚙️ Build System

- **deps:** bump @-xun/env from 1.0.0 to 1.1.0 ([ee44a86][27])

<br />

### 🏗️ Patch @-xun/mongo-schema[@1.1.4][28] (2025-06-30)

#### ⚙️ Build System

- Add `/error` package entry point ([5a4a5a7][29])

<br />

### 🏗️ Patch @-xun/mongo-schema[@1.1.3][30] (2025-06-30)

#### ⚙️ Build System

- Add @-xun/env (remove @-xun/next-env) ([4671c51][31])
- **deps:** bump @-xun/next-env from 1.0.2 to 1.1.0 ([14dba20][32])
- **deps:** bump core-js from 3.42.0 to 3.43.0 ([c0b4402][33])
- **deps:** bump rejoinder from 1.2.5 to 2.0.1 ([f8023e2][34])

<br />

### 🏗️ Patch @-xun/mongo-schema[@1.1.2][35] (2025-06-05)

#### 🪄 Fixes

- **packages:** ensure setX() function parameters are "functionable" ([da36b2f][36])

<br />

### 🏗️ Patch @-xun/mongo-schema[@1.1.1][37] (2025-06-03)

#### 🪄 Fixes

- **packages/mongo-schema:** use latest mongodb driver function signatures ([f5f3b27][38])

<br />

## @-xun/mongo-schema[@1.0.0][39] (2025-06-02)

### ✨ Features

- **packages/mongo-schema:** implement @-xun/mongo-schema ([338b758][40])

<br />

### 🏗️ Patch @-xun/mongo-schema[@1.0.1][41] (2025-06-03)

#### 🪄 Fixes

- **packages/mongo-schema:** improve intellisense commentary ([10a6922][42])
- **packages/shared:** use more accurate types for internal shared memory ([d887470][43])

#### ⚙️ Build System

- **deps:** bump @-xun/next-env from 1.0.0 to 1.0.1 ([4a587cd][44])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-schema@1.2.3...@-xun/mongo-schema@1.3.0
[4]: https://github.com/Xunnamius/mongo-utils/commit/dc008237cea91d9e0ab0ac3c2601605520a63c0f
[5]: https://github.com/Xunnamius/mongo-utils/commit/407bab2e1053c2ef3f317e562dd8332125ab7063
[6]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-schema@1.3.1...@-xun/mongo-schema@1.3.2
[7]: https://github.com/Xunnamius/mongo-utils/commit/ec04ff2547345c1ee7e7c9012452cbdb8a3fef95
[8]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-schema@1.3.0...@-xun/mongo-schema@1.3.1
[9]: https://github.com/Xunnamius/mongo-utils/commit/fa910a4577c53855bfc3e60bccb44aba6189ec96
[10]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-schema@1.1.5...@-xun/mongo-schema@1.2.0
[11]: https://github.com/Xunnamius/mongo-utils/commit/f4f436a17e3a4dfdb6460c5eeb717c55d6f392c1
[12]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-schema@1.2.2...@-xun/mongo-schema@1.2.3
[13]: https://github.com/Xunnamius/mongo-utils/commit/215b087cc1b8fd6914cf3fbe657f77626466f333
[14]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-schema@1.2.1...@-xun/mongo-schema@1.2.2
[15]: https://github.com/Xunnamius/mongo-utils/commit/f38abd688c978cc96e7e4e64111389f0d0c15248
[16]: https://github.com/Xunnamius/mongo-utils/commit/1dc023eb3ef75827d5fa3aec53a384baa6323b00
[17]: https://github.com/Xunnamius/mongo-utils/commit/ff03e505d580b04f37a9f6272281bc3c9d0ce108
[18]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-schema@1.2.0...@-xun/mongo-schema@1.2.1
[19]: https://github.com/Xunnamius/mongo-utils/commit/21a2ba8f84508b349c460225ddeb0d037f6364a8
[20]: https://github.com/Xunnamius/mongo-utils/commit/52e29615a603aa84367c429a6e24e6e24f8f2c33
[21]: https://github.com/Xunnamius/mongo-utils/commit/6f3bf822825a871f1e2c6bb2fc3b678feda56c4d
[22]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-schema@1.0.1...@-xun/mongo-schema@1.1.0
[23]: https://github.com/Xunnamius/mongo-utils/commit/c04211e3ff9f2d1a4c7292b600a0f079f7e77b3b
[24]: https://github.com/Xunnamius/mongo-utils/commit/c411889e6bc1bc42c347d505d86434013eb60eac
[25]: https://github.com/Xunnamius/mongo-utils/commit/f3ac7538c9d98c963f8b94b760fb0249c5ceefee
[26]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-schema@1.1.4...@-xun/mongo-schema@1.1.5
[27]: https://github.com/Xunnamius/mongo-utils/commit/ee44a86dd2f7bd179506a4679da6c233cfd0ce8e
[28]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-schema@1.1.3...@-xun/mongo-schema@1.1.4
[29]: https://github.com/Xunnamius/mongo-utils/commit/5a4a5a72ee127a824372b4175e7a7f6ab5a03af4
[30]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-schema@1.1.2...@-xun/mongo-schema@1.1.3
[31]: https://github.com/Xunnamius/mongo-utils/commit/4671c51e0b154b368b76cc65445cc8fa8f242dc2
[32]: https://github.com/Xunnamius/mongo-utils/commit/14dba2047cb280667e5902ca6c6377d1cc5dfaa4
[33]: https://github.com/Xunnamius/mongo-utils/commit/c0b440267624a18e821749d4fbafcfb436f02792
[34]: https://github.com/Xunnamius/mongo-utils/commit/f8023e27de9fd60ad3bd8b856b821cfac351e1d7
[35]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-schema@1.1.1...@-xun/mongo-schema@1.1.2
[36]: https://github.com/Xunnamius/mongo-utils/commit/da36b2f7ed743ec7d8e66e842457ff4af33ae36e
[37]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-schema@1.1.0...@-xun/mongo-schema@1.1.1
[38]: https://github.com/Xunnamius/mongo-utils/commit/f5f3b27be3f13bbf8e30e4951460221006daa66a
[39]: https://github.com/Xunnamius/mongo-utils/compare/338b7589e5e51031f1d3bb7a988f4892cb8fc0ef...@-xun/mongo-schema@1.0.0
[40]: https://github.com/Xunnamius/mongo-utils/commit/338b7589e5e51031f1d3bb7a988f4892cb8fc0ef
[41]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-schema@1.0.0...@-xun/mongo-schema@1.0.1
[42]: https://github.com/Xunnamius/mongo-utils/commit/10a69221eb15a2b2f017f7fcdeb3a1b2072fa1f6
[43]: https://github.com/Xunnamius/mongo-utils/commit/d887470e11c12850d2375d4c5c93bcc22682bb96
[44]: https://github.com/Xunnamius/mongo-utils/commit/4a587cdf0b096474447ef4fa322e494156132126
