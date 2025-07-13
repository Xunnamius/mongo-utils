# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## @-xun/mongo-test[@1.2.0][3] (2025-07-13)

### ✨ Features

- **packages/mongo-test:** expose `resetSharedMemory` in return value of `setupMemoryServerOverride` ([40a49ae][4])

### ⚙️ Build System

- **deps:** bump @-xun/env from 1.1.1 to 1.1.2 ([88faf29][5])
- **deps:** bump @-xun/jest from 2.2.5 to 2.2.7 ([b0740d4][6])
- **deps:** bump internal monorepo interdependencies to latest versions ([a7f7628][7])
- **deps:** bump rejoinder from 2.0.1 to 2.0.2 ([a846985][8])

<br />

### 🏗️ Patch @-xun/mongo-test[@1.2.1][9] (2025-07-13)

#### ⚙️ Build System

- **deps:** bump internal monorepo interdependencies to latest versions ([1f0ca46][10])
- **packages/shared:** allow internal `resetSharedMemory` function to preserve values on demand ([215b087][11])

<br />

## @-xun/mongo-test[@1.1.0][12] (2025-06-03)

### ✨ Features

- **packages:** allow `setupMemoryServerOverride` to initialize schema and dummy db ([c04211e][13])

### ⚙️ Build System

- **deps:** bump @-xun/jest from 2.1.1 to 2.1.3 ([4bcbae5][14])
- **deps:** bump @-xun/next-env from 1.0.1 to 1.0.2 ([c88f3b0][15])
- **deps:** bump internal monorepo interdependencies to latest versions ([adcea4b][16])
- **deps:** bump mongodb from 6.16.0 to 6.17.0 ([e36a3e7][17])

<br />

### 🏗️ Patch @-xun/mongo-test[@1.1.7][18] (2025-07-08)

#### ⚙️ Build System

- **deps:** bump @-xun/env from 1.1.0 to 1.1.1 ([a14688a][19])
- **deps:** bump core-js from 3.43.0 to 3.44.0 ([b57ee73][20])
- **deps:** bump internal monorepo interdependencies to latest versions ([2bc6f51][21])

<br />

### 🏗️ Patch @-xun/mongo-test[@1.1.6][22] (2025-07-07)

#### ⚙️ Build System

- **deps:** bump internal monorepo interdependencies to latest versions ([4b44a6c][23])

<br />

### 🏗️ Patch @-xun/mongo-test[@1.1.5][24] (2025-07-03)

#### ⚙️ Build System

- **deps:** bump @-xun/env from 1.0.0 to 1.1.0 ([969d604][25])
- **deps:** bump internal monorepo interdependencies to latest versions ([079514a][26])

<br />

### 🏗️ Patch @-xun/mongo-test[@1.1.4][27] (2025-06-30)

#### ⚙️ Build System

- Add `/error` package entry point ([5a4a5a7][28])
- **deps:** bump internal monorepo interdependencies to latest versions ([2665e9e][29])

<br />

### 🏗️ Patch @-xun/mongo-test[@1.1.3][30] (2025-06-30)

#### ⚙️ Build System

- Add @-xun/env (remove @-xun/next-env) ([4671c51][31])
- **deps:** bump @-xun/jest from 2.1.3 to 2.2.1 ([1211407][32])
- **deps:** bump @-xun/jest from 2.2.1 to 2.2.4 ([58e93b0][33])
- **deps:** bump @-xun/jest from 2.2.4 to 2.2.5 ([cf46468][34])
- **deps:** bump @-xun/next-env from 1.0.2 to 1.1.0 ([91db983][35])
- **deps:** bump core-js from 3.42.0 to 3.43.0 ([82fc977][36])
- **deps:** bump internal monorepo interdependencies to latest versions ([c9e7b79][37])
- **deps:** bump rejoinder from 1.2.5 to 2.0.1 ([79c355c][38])

<br />

### 🏗️ Patch @-xun/mongo-test[@1.1.2][39] (2025-06-05)

#### 🪄 Fixes

- **packages:** ensure setX() function parameters are "functionable" ([da36b2f][40])

#### ⚙️ Build System

- **deps:** bump internal monorepo interdependencies to latest versions ([f7025b9][41])

<br />

### 🏗️ Patch @-xun/mongo-test[@1.1.1][42] (2025-06-03)

#### 🪄 Fixes

- **packages/mongo-test:** plug memory leak during mongo-ms cleanup routine ([a42d1f3][43])

#### ⚙️ Build System

- **deps:** bump internal monorepo interdependencies to latest versions ([c4a4849][44])

<br />

## @-xun/mongo-test[@1.0.0][45] (2025-06-02)

### ✨ Features

- **packages/mongo-test:** implement @-xun/mongo-test ([7b7238c][46])

<br />

### 🏗️ Patch @-xun/mongo-test[@1.0.1][47] (2025-06-03)

#### 🪄 Fixes

- **packages/shared:** use more accurate types for internal shared memory ([d887470][48])

#### ⚙️ Build System

- **deps:** bump internal monorepo interdependencies to latest versions ([a8eb945][49])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@1.1.7...@-xun/mongo-test@1.2.0
[4]: https://github.com/Xunnamius/mongo-utils/commit/40a49ae68f7b595d1d0d315eb673c0ca84015b58
[5]: https://github.com/Xunnamius/mongo-utils/commit/88faf297750fcb8ce06e3045231c28af44e62cf8
[6]: https://github.com/Xunnamius/mongo-utils/commit/b0740d43593ff1892a3a624c497acce3bf3297a9
[7]: https://github.com/Xunnamius/mongo-utils/commit/a7f762885434aa965e58dfc1af4a47d55cf0ce63
[8]: https://github.com/Xunnamius/mongo-utils/commit/a8469859ae9f57daa447a285037effed20c7cced
[9]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@1.2.0...@-xun/mongo-test@1.2.1
[10]: https://github.com/Xunnamius/mongo-utils/commit/1f0ca468a5f232fd532c91f3f9f65284575178f7
[11]: https://github.com/Xunnamius/mongo-utils/commit/215b087cc1b8fd6914cf3fbe657f77626466f333
[12]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@1.0.1...@-xun/mongo-test@1.1.0
[13]: https://github.com/Xunnamius/mongo-utils/commit/c04211e3ff9f2d1a4c7292b600a0f079f7e77b3b
[14]: https://github.com/Xunnamius/mongo-utils/commit/4bcbae5c6f7de13e3f4f2460bb13f253600b200f
[15]: https://github.com/Xunnamius/mongo-utils/commit/c88f3b0ed64868a6f49bce55cc755bfcc2c2a2f9
[16]: https://github.com/Xunnamius/mongo-utils/commit/adcea4b279e5bbf21b37d855ee502f1f635668d3
[17]: https://github.com/Xunnamius/mongo-utils/commit/e36a3e74258b21b72f3efea7ae717693958d19b7
[18]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@1.1.6...@-xun/mongo-test@1.1.7
[19]: https://github.com/Xunnamius/mongo-utils/commit/a14688a357d9c3a864c9c3e99bd46c85675e6895
[20]: https://github.com/Xunnamius/mongo-utils/commit/b57ee73e16fa727a552c196a26560f0861b8a985
[21]: https://github.com/Xunnamius/mongo-utils/commit/2bc6f51f9f2b664299324bf7103f7035a2275eb2
[22]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@1.1.5...@-xun/mongo-test@1.1.6
[23]: https://github.com/Xunnamius/mongo-utils/commit/4b44a6c56354073996bd062259926a167850dc5d
[24]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@1.1.4...@-xun/mongo-test@1.1.5
[25]: https://github.com/Xunnamius/mongo-utils/commit/969d60411652ab8060415009be92c4fb51e51ffd
[26]: https://github.com/Xunnamius/mongo-utils/commit/079514a535ffbde4b4bfc6873c427a90ebf61557
[27]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@1.1.3...@-xun/mongo-test@1.1.4
[28]: https://github.com/Xunnamius/mongo-utils/commit/5a4a5a72ee127a824372b4175e7a7f6ab5a03af4
[29]: https://github.com/Xunnamius/mongo-utils/commit/2665e9e2d66d6b3f49c5eff1ec1cdf6b20d4cfaf
[30]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@1.1.2...@-xun/mongo-test@1.1.3
[31]: https://github.com/Xunnamius/mongo-utils/commit/4671c51e0b154b368b76cc65445cc8fa8f242dc2
[32]: https://github.com/Xunnamius/mongo-utils/commit/12114076b58467a9e360a692c8811812cf5b46ad
[33]: https://github.com/Xunnamius/mongo-utils/commit/58e93b0aedb278b009c185e5dfc9f32cf0972085
[34]: https://github.com/Xunnamius/mongo-utils/commit/cf464682a7b2394e2d23fc6c57a72c5c79e30efa
[35]: https://github.com/Xunnamius/mongo-utils/commit/91db983263466271b376021bb471d5b5c293b2df
[36]: https://github.com/Xunnamius/mongo-utils/commit/82fc97790fe3d2599e1333238e77fc915e7e4f29
[37]: https://github.com/Xunnamius/mongo-utils/commit/c9e7b791fd5fa7823d6028e840bcef44b12978f0
[38]: https://github.com/Xunnamius/mongo-utils/commit/79c355ce1906b7d7de63413f997423e40c7d9b43
[39]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@1.1.1...@-xun/mongo-test@1.1.2
[40]: https://github.com/Xunnamius/mongo-utils/commit/da36b2f7ed743ec7d8e66e842457ff4af33ae36e
[41]: https://github.com/Xunnamius/mongo-utils/commit/f7025b96096fa3c28f6709dbefc9663807f406dd
[42]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@1.1.0...@-xun/mongo-test@1.1.1
[43]: https://github.com/Xunnamius/mongo-utils/commit/a42d1f3bf6df8ecad890c565a46f81f53a45682a
[44]: https://github.com/Xunnamius/mongo-utils/commit/c4a48495d2d01da20245757303c3130ffe912d9a
[45]: https://github.com/Xunnamius/mongo-utils/compare/7b7238ccb96b3e04fca5f7608ea8476890bbb153...@-xun/mongo-test@1.0.0
[46]: https://github.com/Xunnamius/mongo-utils/commit/7b7238ccb96b3e04fca5f7608ea8476890bbb153
[47]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@1.0.0...@-xun/mongo-test@1.0.1
[48]: https://github.com/Xunnamius/mongo-utils/commit/d887470e11c12850d2375d4c5c93bcc22682bb96
[49]: https://github.com/Xunnamius/mongo-utils/commit/a8eb945b56abca416084448e2d151aef93b9c677
