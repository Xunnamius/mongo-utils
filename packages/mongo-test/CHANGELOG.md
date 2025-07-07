# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## @-xun/mongo-test[@1.1.0][3] (2025-06-03)

### ✨ Features

- **packages:** allow `setupMemoryServerOverride` to initialize schema and dummy db ([c04211e][4])

### ⚙️ Build System

- **deps:** bump @-xun/jest from 2.1.1 to 2.1.3 ([4bcbae5][5])
- **deps:** bump @-xun/next-env from 1.0.1 to 1.0.2 ([c88f3b0][6])
- **deps:** bump internal monorepo interdependencies to latest versions ([adcea4b][7])
- **deps:** bump mongodb from 6.16.0 to 6.17.0 ([e36a3e7][8])

<br />

### 🏗️ Patch @-xun/mongo-test[@1.1.6][9] (2025-07-07)

#### ⚙️ Build System

- **deps:** bump internal monorepo interdependencies to latest versions ([4b44a6c][10])

<br />

### 🏗️ Patch @-xun/mongo-test[@1.1.5][11] (2025-07-03)

#### ⚙️ Build System

- **deps:** bump @-xun/env from 1.0.0 to 1.1.0 ([969d604][12])
- **deps:** bump internal monorepo interdependencies to latest versions ([079514a][13])

<br />

### 🏗️ Patch @-xun/mongo-test[@1.1.4][14] (2025-06-30)

#### ⚙️ Build System

- Add `/error` package entry point ([5a4a5a7][15])
- **deps:** bump internal monorepo interdependencies to latest versions ([2665e9e][16])

<br />

### 🏗️ Patch @-xun/mongo-test[@1.1.3][17] (2025-06-30)

#### ⚙️ Build System

- Add @-xun/env (remove @-xun/next-env) ([4671c51][18])
- **deps:** bump @-xun/jest from 2.1.3 to 2.2.1 ([1211407][19])
- **deps:** bump @-xun/jest from 2.2.1 to 2.2.4 ([58e93b0][20])
- **deps:** bump @-xun/jest from 2.2.4 to 2.2.5 ([cf46468][21])
- **deps:** bump @-xun/next-env from 1.0.2 to 1.1.0 ([91db983][22])
- **deps:** bump core-js from 3.42.0 to 3.43.0 ([82fc977][23])
- **deps:** bump internal monorepo interdependencies to latest versions ([c9e7b79][24])
- **deps:** bump rejoinder from 1.2.5 to 2.0.1 ([79c355c][25])

<br />

### 🏗️ Patch @-xun/mongo-test[@1.1.2][26] (2025-06-05)

#### 🪄 Fixes

- **packages:** ensure setX() function parameters are "functionable" ([da36b2f][27])

#### ⚙️ Build System

- **deps:** bump internal monorepo interdependencies to latest versions ([f7025b9][28])

<br />

### 🏗️ Patch @-xun/mongo-test[@1.1.1][29] (2025-06-03)

#### 🪄 Fixes

- **packages/mongo-test:** plug memory leak during mongo-ms cleanup routine ([a42d1f3][30])

#### ⚙️ Build System

- **deps:** bump internal monorepo interdependencies to latest versions ([c4a4849][31])

<br />

## @-xun/mongo-test[@1.0.0][32] (2025-06-02)

### ✨ Features

- **packages/mongo-test:** implement @-xun/mongo-test ([7b7238c][33])

<br />

### 🏗️ Patch @-xun/mongo-test[@1.0.1][34] (2025-06-03)

#### 🪄 Fixes

- **packages/shared:** use more accurate types for internal shared memory ([d887470][35])

#### ⚙️ Build System

- **deps:** bump internal monorepo interdependencies to latest versions ([a8eb945][36])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@1.0.1...@-xun/mongo-test@1.1.0
[4]: https://github.com/Xunnamius/mongo-utils/commit/c04211e3ff9f2d1a4c7292b600a0f079f7e77b3b
[5]: https://github.com/Xunnamius/mongo-utils/commit/4bcbae5c6f7de13e3f4f2460bb13f253600b200f
[6]: https://github.com/Xunnamius/mongo-utils/commit/c88f3b0ed64868a6f49bce55cc755bfcc2c2a2f9
[7]: https://github.com/Xunnamius/mongo-utils/commit/adcea4b279e5bbf21b37d855ee502f1f635668d3
[8]: https://github.com/Xunnamius/mongo-utils/commit/e36a3e74258b21b72f3efea7ae717693958d19b7
[9]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@1.1.5...@-xun/mongo-test@1.1.6
[10]: https://github.com/Xunnamius/mongo-utils/commit/4b44a6c56354073996bd062259926a167850dc5d
[11]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@1.1.4...@-xun/mongo-test@1.1.5
[12]: https://github.com/Xunnamius/mongo-utils/commit/969d60411652ab8060415009be92c4fb51e51ffd
[13]: https://github.com/Xunnamius/mongo-utils/commit/079514a535ffbde4b4bfc6873c427a90ebf61557
[14]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@1.1.3...@-xun/mongo-test@1.1.4
[15]: https://github.com/Xunnamius/mongo-utils/commit/5a4a5a72ee127a824372b4175e7a7f6ab5a03af4
[16]: https://github.com/Xunnamius/mongo-utils/commit/2665e9e2d66d6b3f49c5eff1ec1cdf6b20d4cfaf
[17]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@1.1.2...@-xun/mongo-test@1.1.3
[18]: https://github.com/Xunnamius/mongo-utils/commit/4671c51e0b154b368b76cc65445cc8fa8f242dc2
[19]: https://github.com/Xunnamius/mongo-utils/commit/12114076b58467a9e360a692c8811812cf5b46ad
[20]: https://github.com/Xunnamius/mongo-utils/commit/58e93b0aedb278b009c185e5dfc9f32cf0972085
[21]: https://github.com/Xunnamius/mongo-utils/commit/cf464682a7b2394e2d23fc6c57a72c5c79e30efa
[22]: https://github.com/Xunnamius/mongo-utils/commit/91db983263466271b376021bb471d5b5c293b2df
[23]: https://github.com/Xunnamius/mongo-utils/commit/82fc97790fe3d2599e1333238e77fc915e7e4f29
[24]: https://github.com/Xunnamius/mongo-utils/commit/c9e7b791fd5fa7823d6028e840bcef44b12978f0
[25]: https://github.com/Xunnamius/mongo-utils/commit/79c355ce1906b7d7de63413f997423e40c7d9b43
[26]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@1.1.1...@-xun/mongo-test@1.1.2
[27]: https://github.com/Xunnamius/mongo-utils/commit/da36b2f7ed743ec7d8e66e842457ff4af33ae36e
[28]: https://github.com/Xunnamius/mongo-utils/commit/f7025b96096fa3c28f6709dbefc9663807f406dd
[29]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@1.1.0...@-xun/mongo-test@1.1.1
[30]: https://github.com/Xunnamius/mongo-utils/commit/a42d1f3bf6df8ecad890c565a46f81f53a45682a
[31]: https://github.com/Xunnamius/mongo-utils/commit/c4a48495d2d01da20245757303c3130ffe912d9a
[32]: https://github.com/Xunnamius/mongo-utils/compare/7b7238ccb96b3e04fca5f7608ea8476890bbb153...@-xun/mongo-test@1.0.0
[33]: https://github.com/Xunnamius/mongo-utils/commit/7b7238ccb96b3e04fca5f7608ea8476890bbb153
[34]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@1.0.0...@-xun/mongo-test@1.0.1
[35]: https://github.com/Xunnamius/mongo-utils/commit/d887470e11c12850d2375d4c5c93bcc22682bb96
[36]: https://github.com/Xunnamius/mongo-utils/commit/a8eb945b56abca416084448e2d151aef93b9c677
