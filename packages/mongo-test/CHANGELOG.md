# Changelog

All notable changes to this project will be documented in this auto-generated
file. The format is based on [Conventional Commits][1];
this project adheres to [Semantic Versioning][2].

<br />

## @-xun/mongo-test[@3.0.0][3] (2025-07-14)

### 💥 BREAKING CHANGES 💥

- The 'without-initialization' option of `defer` has been renamed to 'without-hooks'

### ✨ Features

- **packages/mongo-test:** use more consistent hook registration algorithm ([0aaaccf][4])

### 🪄 Fixes

- **packages/mongo-test:** ensure `reinitializeServerDatabases` is always called by `initializeMemoryServerOverride` except in `defer: 'without-hooks'` mode ([3243a42][5])

<br />

### 🏗️ Patch @-xun/mongo-test[@3.0.4][6] (2025-07-15)

#### ⚙️ Build System

- **deps:** bump internal monorepo interdependencies to latest versions ([00a92ee][7])

<br />

### 🏗️ Patch @-xun/mongo-test[@3.0.3][8] (2025-07-15)

#### ⚙️ Build System

- **deps:** bump internal monorepo interdependencies to latest versions ([b593b95][9])

<br />

### 🏗️ Patch @-xun/mongo-test[@3.0.2][10] (2025-07-15)

#### ⚙️ Build System

- **deps:** bump @-xun/env from 1.1.2 to 1.1.3 ([dbd8611][11])
- **deps:** bump internal monorepo interdependencies to latest versions ([04177aa][12])

<br />

### 🏗️ Patch @-xun/mongo-test[@3.0.1][13] (2025-07-15)

#### 🪄 Fixes

- **packages:** loosen some type constraints and further improve intellisense ([fa910a4][14])

#### ⚙️ Build System

- **deps:** bump internal monorepo interdependencies to latest versions ([c6ac480][15])

<br />

## @-xun/mongo-test[@2.1.0][16] (2025-07-14)

### ✨ Features

- Add multitenancy support via `AsyncLocalStorage` ([dc00823][17])

### ⚙️ Build System

- **deps:** bump internal monorepo interdependencies to latest versions ([eefb7bf][18])

<br />

### 🏗️ Patch @-xun/mongo-test[@2.1.2][19] (2025-07-14)

#### 🪄 Fixes

- **packages/mongo-test:** further improve intellisense comments ([32f7f4b][20])

<br />

### 🏗️ Patch @-xun/mongo-test[@2.1.1][21] (2025-07-14)

#### 🪄 Fixes

- **packages/mongo-test:** improve intellisense comments ([75a9018][22])

<br />

## @-xun/mongo-test[@2.0.0][23] (2025-07-13)

### 💥 BREAKING CHANGES 💥

- `reinitializeServer` (returned by `setupMemoryServerOverride`) was renamed to `reinitializeServerDatabases`

### ✨ Features

- **packages/mongo-test:** expose `killMemoryServerOverride` in return value of `setupMemoryServerOverride` ([1bd1501][24])

<br />

## @-xun/mongo-test[@1.3.0][25] (2025-07-13)

### ✨ Features

- **packages/mongo-test:** expose `initializeMemoryServerOverride` in return value of `setupMemoryServerOverride` ([96c4924][26])

<br />

## @-xun/mongo-test[@1.2.0][27] (2025-07-13)

### ✨ Features

- **packages/mongo-test:** expose `resetSharedMemory` in return value of `setupMemoryServerOverride` ([40a49ae][28])

### ⚙️ Build System

- **deps:** bump @-xun/env from 1.1.1 to 1.1.2 ([88faf29][29])
- **deps:** bump @-xun/jest from 2.2.5 to 2.2.7 ([b0740d4][30])
- **deps:** bump internal monorepo interdependencies to latest versions ([a7f7628][31])
- **deps:** bump rejoinder from 2.0.1 to 2.0.2 ([a846985][32])

<br />

### 🏗️ Patch @-xun/mongo-test[@1.2.2][33] (2025-07-13)

#### 🪄 Fixes

- **packages/mongo-test:** allow deferred `setupMemoryServerOverride` to skip initialization tasks ([a6c2112][34])

<br />

### 🏗️ Patch @-xun/mongo-test[@1.2.1][35] (2025-07-13)

#### ⚙️ Build System

- **deps:** bump internal monorepo interdependencies to latest versions ([1f0ca46][36])
- **packages/shared:** allow internal `resetSharedMemory` function to preserve values on demand ([215b087][37])

<br />

## @-xun/mongo-test[@1.1.0][38] (2025-06-03)

### ✨ Features

- **packages:** allow `setupMemoryServerOverride` to initialize schema and dummy db ([c04211e][39])

### ⚙️ Build System

- **deps:** bump @-xun/jest from 2.1.1 to 2.1.3 ([4bcbae5][40])
- **deps:** bump @-xun/next-env from 1.0.1 to 1.0.2 ([c88f3b0][41])
- **deps:** bump internal monorepo interdependencies to latest versions ([adcea4b][42])
- **deps:** bump mongodb from 6.16.0 to 6.17.0 ([e36a3e7][43])

<br />

### 🏗️ Patch @-xun/mongo-test[@1.1.7][44] (2025-07-08)

#### ⚙️ Build System

- **deps:** bump @-xun/env from 1.1.0 to 1.1.1 ([a14688a][45])
- **deps:** bump core-js from 3.43.0 to 3.44.0 ([b57ee73][46])
- **deps:** bump internal monorepo interdependencies to latest versions ([2bc6f51][47])

<br />

### 🏗️ Patch @-xun/mongo-test[@1.1.6][48] (2025-07-07)

#### ⚙️ Build System

- **deps:** bump internal monorepo interdependencies to latest versions ([4b44a6c][49])

<br />

### 🏗️ Patch @-xun/mongo-test[@1.1.5][50] (2025-07-03)

#### ⚙️ Build System

- **deps:** bump @-xun/env from 1.0.0 to 1.1.0 ([969d604][51])
- **deps:** bump internal monorepo interdependencies to latest versions ([079514a][52])

<br />

### 🏗️ Patch @-xun/mongo-test[@1.1.4][53] (2025-06-30)

#### ⚙️ Build System

- Add `/error` package entry point ([5a4a5a7][54])
- **deps:** bump internal monorepo interdependencies to latest versions ([2665e9e][55])

<br />

### 🏗️ Patch @-xun/mongo-test[@1.1.3][56] (2025-06-30)

#### ⚙️ Build System

- Add @-xun/env (remove @-xun/next-env) ([4671c51][57])
- **deps:** bump @-xun/jest from 2.1.3 to 2.2.1 ([1211407][58])
- **deps:** bump @-xun/jest from 2.2.1 to 2.2.4 ([58e93b0][59])
- **deps:** bump @-xun/jest from 2.2.4 to 2.2.5 ([cf46468][60])
- **deps:** bump @-xun/next-env from 1.0.2 to 1.1.0 ([91db983][61])
- **deps:** bump core-js from 3.42.0 to 3.43.0 ([82fc977][62])
- **deps:** bump internal monorepo interdependencies to latest versions ([c9e7b79][63])
- **deps:** bump rejoinder from 1.2.5 to 2.0.1 ([79c355c][64])

<br />

### 🏗️ Patch @-xun/mongo-test[@1.1.2][65] (2025-06-05)

#### 🪄 Fixes

- **packages:** ensure setX() function parameters are "functionable" ([da36b2f][66])

#### ⚙️ Build System

- **deps:** bump internal monorepo interdependencies to latest versions ([f7025b9][67])

<br />

### 🏗️ Patch @-xun/mongo-test[@1.1.1][68] (2025-06-03)

#### 🪄 Fixes

- **packages/mongo-test:** plug memory leak during mongo-ms cleanup routine ([a42d1f3][69])

#### ⚙️ Build System

- **deps:** bump internal monorepo interdependencies to latest versions ([c4a4849][70])

<br />

## @-xun/mongo-test[@1.0.0][71] (2025-06-02)

### ✨ Features

- **packages/mongo-test:** implement @-xun/mongo-test ([7b7238c][72])

<br />

### 🏗️ Patch @-xun/mongo-test[@1.0.1][73] (2025-06-03)

#### 🪄 Fixes

- **packages/shared:** use more accurate types for internal shared memory ([d887470][74])

#### ⚙️ Build System

- **deps:** bump internal monorepo interdependencies to latest versions ([a8eb945][75])

[1]: https://conventionalcommits.org
[2]: https://semver.org
[3]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@2.1.2...@-xun/mongo-test@3.0.0
[4]: https://github.com/Xunnamius/mongo-utils/commit/0aaaccf86c6213f58eff42a69faf2af557f34572
[5]: https://github.com/Xunnamius/mongo-utils/commit/3243a42d385dbf68f43eef1e5585f66c9f435f1b
[6]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@3.0.3...@-xun/mongo-test@3.0.4
[7]: https://github.com/Xunnamius/mongo-utils/commit/00a92ee20ae1d2069cafa98e9c3db8a2510aab5e
[8]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@3.0.2...@-xun/mongo-test@3.0.3
[9]: https://github.com/Xunnamius/mongo-utils/commit/b593b95e5b27689423fa5678aeacc9a62715b938
[10]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@3.0.1...@-xun/mongo-test@3.0.2
[11]: https://github.com/Xunnamius/mongo-utils/commit/dbd86112a700ecc49b4be372e697ef12dedeeb86
[12]: https://github.com/Xunnamius/mongo-utils/commit/04177aad2bd6ef499967b79e7bb0819ab64ce5f3
[13]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@3.0.0...@-xun/mongo-test@3.0.1
[14]: https://github.com/Xunnamius/mongo-utils/commit/fa910a4577c53855bfc3e60bccb44aba6189ec96
[15]: https://github.com/Xunnamius/mongo-utils/commit/c6ac4808788de499747d7c1694717afb2e8a83bc
[16]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@2.0.0...@-xun/mongo-test@2.1.0
[17]: https://github.com/Xunnamius/mongo-utils/commit/dc008237cea91d9e0ab0ac3c2601605520a63c0f
[18]: https://github.com/Xunnamius/mongo-utils/commit/eefb7bf3557f07a8a67d4446de200bb00a3f285f
[19]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@2.1.1...@-xun/mongo-test@2.1.2
[20]: https://github.com/Xunnamius/mongo-utils/commit/32f7f4be31d1b2d896b46940a0a2f1886cd751cd
[21]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@2.1.0...@-xun/mongo-test@2.1.1
[22]: https://github.com/Xunnamius/mongo-utils/commit/75a9018d83c6612a0b22f0280a1bba1209bfc3f6
[23]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@1.3.0...@-xun/mongo-test@2.0.0
[24]: https://github.com/Xunnamius/mongo-utils/commit/1bd15010f925f205578378723f1e14dd061644d7
[25]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@1.2.2...@-xun/mongo-test@1.3.0
[26]: https://github.com/Xunnamius/mongo-utils/commit/96c4924f2bd9d79c717ad51c5991406a7d6625b7
[27]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@1.1.7...@-xun/mongo-test@1.2.0
[28]: https://github.com/Xunnamius/mongo-utils/commit/40a49ae68f7b595d1d0d315eb673c0ca84015b58
[29]: https://github.com/Xunnamius/mongo-utils/commit/88faf297750fcb8ce06e3045231c28af44e62cf8
[30]: https://github.com/Xunnamius/mongo-utils/commit/b0740d43593ff1892a3a624c497acce3bf3297a9
[31]: https://github.com/Xunnamius/mongo-utils/commit/a7f762885434aa965e58dfc1af4a47d55cf0ce63
[32]: https://github.com/Xunnamius/mongo-utils/commit/a8469859ae9f57daa447a285037effed20c7cced
[33]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@1.2.1...@-xun/mongo-test@1.2.2
[34]: https://github.com/Xunnamius/mongo-utils/commit/a6c2112fab3deadd3d025a547cf8d9c912b8daa6
[35]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@1.2.0...@-xun/mongo-test@1.2.1
[36]: https://github.com/Xunnamius/mongo-utils/commit/1f0ca468a5f232fd532c91f3f9f65284575178f7
[37]: https://github.com/Xunnamius/mongo-utils/commit/215b087cc1b8fd6914cf3fbe657f77626466f333
[38]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@1.0.1...@-xun/mongo-test@1.1.0
[39]: https://github.com/Xunnamius/mongo-utils/commit/c04211e3ff9f2d1a4c7292b600a0f079f7e77b3b
[40]: https://github.com/Xunnamius/mongo-utils/commit/4bcbae5c6f7de13e3f4f2460bb13f253600b200f
[41]: https://github.com/Xunnamius/mongo-utils/commit/c88f3b0ed64868a6f49bce55cc755bfcc2c2a2f9
[42]: https://github.com/Xunnamius/mongo-utils/commit/adcea4b279e5bbf21b37d855ee502f1f635668d3
[43]: https://github.com/Xunnamius/mongo-utils/commit/e36a3e74258b21b72f3efea7ae717693958d19b7
[44]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@1.1.6...@-xun/mongo-test@1.1.7
[45]: https://github.com/Xunnamius/mongo-utils/commit/a14688a357d9c3a864c9c3e99bd46c85675e6895
[46]: https://github.com/Xunnamius/mongo-utils/commit/b57ee73e16fa727a552c196a26560f0861b8a985
[47]: https://github.com/Xunnamius/mongo-utils/commit/2bc6f51f9f2b664299324bf7103f7035a2275eb2
[48]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@1.1.5...@-xun/mongo-test@1.1.6
[49]: https://github.com/Xunnamius/mongo-utils/commit/4b44a6c56354073996bd062259926a167850dc5d
[50]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@1.1.4...@-xun/mongo-test@1.1.5
[51]: https://github.com/Xunnamius/mongo-utils/commit/969d60411652ab8060415009be92c4fb51e51ffd
[52]: https://github.com/Xunnamius/mongo-utils/commit/079514a535ffbde4b4bfc6873c427a90ebf61557
[53]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@1.1.3...@-xun/mongo-test@1.1.4
[54]: https://github.com/Xunnamius/mongo-utils/commit/5a4a5a72ee127a824372b4175e7a7f6ab5a03af4
[55]: https://github.com/Xunnamius/mongo-utils/commit/2665e9e2d66d6b3f49c5eff1ec1cdf6b20d4cfaf
[56]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@1.1.2...@-xun/mongo-test@1.1.3
[57]: https://github.com/Xunnamius/mongo-utils/commit/4671c51e0b154b368b76cc65445cc8fa8f242dc2
[58]: https://github.com/Xunnamius/mongo-utils/commit/12114076b58467a9e360a692c8811812cf5b46ad
[59]: https://github.com/Xunnamius/mongo-utils/commit/58e93b0aedb278b009c185e5dfc9f32cf0972085
[60]: https://github.com/Xunnamius/mongo-utils/commit/cf464682a7b2394e2d23fc6c57a72c5c79e30efa
[61]: https://github.com/Xunnamius/mongo-utils/commit/91db983263466271b376021bb471d5b5c293b2df
[62]: https://github.com/Xunnamius/mongo-utils/commit/82fc97790fe3d2599e1333238e77fc915e7e4f29
[63]: https://github.com/Xunnamius/mongo-utils/commit/c9e7b791fd5fa7823d6028e840bcef44b12978f0
[64]: https://github.com/Xunnamius/mongo-utils/commit/79c355ce1906b7d7de63413f997423e40c7d9b43
[65]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@1.1.1...@-xun/mongo-test@1.1.2
[66]: https://github.com/Xunnamius/mongo-utils/commit/da36b2f7ed743ec7d8e66e842457ff4af33ae36e
[67]: https://github.com/Xunnamius/mongo-utils/commit/f7025b96096fa3c28f6709dbefc9663807f406dd
[68]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@1.1.0...@-xun/mongo-test@1.1.1
[69]: https://github.com/Xunnamius/mongo-utils/commit/a42d1f3bf6df8ecad890c565a46f81f53a45682a
[70]: https://github.com/Xunnamius/mongo-utils/commit/c4a48495d2d01da20245757303c3130ffe912d9a
[71]: https://github.com/Xunnamius/mongo-utils/compare/7b7238ccb96b3e04fca5f7608ea8476890bbb153...@-xun/mongo-test@1.0.0
[72]: https://github.com/Xunnamius/mongo-utils/commit/7b7238ccb96b3e04fca5f7608ea8476890bbb153
[73]: https://github.com/Xunnamius/mongo-utils/compare/@-xun/mongo-test@1.0.0...@-xun/mongo-test@1.0.1
[74]: https://github.com/Xunnamius/mongo-utils/commit/d887470e11c12850d2375d4c5c93bcc22682bb96
[75]: https://github.com/Xunnamius/mongo-utils/commit/a8eb945b56abca416084448e2d151aef93b9c677
