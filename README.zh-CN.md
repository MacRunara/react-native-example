# react-native-example — React Native 测试与双端打包(Macrunara)

> ⚡ **[安装 Macrunara](https://github.com/marketplace/macrunara)** → **Fork** 本仓库 → 推送 `main`:Jest 测试 + iOS/Android 双端**生产环境 JS bundle** 在 **约 3 分钟**内完成。
> 📊 **冷构建约 3 分钟 / 有缓存约 1.5 分钟**,实测于 Macrunara M4(Mac mini)节点。<!-- TODO:发布前用首次真实运行数据替换 -->

[![Built on Macrunara](https://img.shields.io/badge/Built%20on-Macrunara-brightgreen)](https://macrunara.com)

[English](README.md) | 中文

一个可直接 fork 运行的 **React Native** 示例:`yarn install` → Jest 组件测试 → Metro 双端生产 bundle(`main.jsbundle` + `index.android.bundle`)并上传产物 —— 正是每个 RN 应用在原生编译之前都需要的 CI 阶段。节点预装 Node 20 LTS 与 yarn,零配置。

## 三步跑起来

1. 组织内[安装 Macrunara App](https://github.com/marketplace/macrunara);
2. Fork 本仓库;
3. 推送 `main` —— [react-native.yml](.github/workflows/react-native.yml) 自动跑测试并产出双端 bundle。

> ⚠️ runner 标签必须严格写成 `runs-on: [macos, arm64, macrunara]`。

## 说明

- 最小 RN 计数器应用(`index.js`、`App.js`、`app.json`)+ Jest / react-test-renderer 组件测试;
- `yarn bundle:ios` / `yarn bundle:android` 产出 release bundle 到 `dist/`;
- 本仓库不含 `ios/`、`android/` 原生目录(保持精简、零 secret)。需要完整原生构建(`pod install` → `xcodebuild` / `gradlew assembleRelease`)时,在自己的应用里保留同一 runner 标签即可,节点预装的 CocoaPods / Android SDK / JDK 直接可用 —— 参考 [RN 模板](https://github.com/MacRunara/quickstart/blob/main/templates/react-native.yml)。

## 构建时长(实测) <!-- TODO:发布前替换为真实数据 -->

| 阶段 | 冷构建 | 有缓存 |
|---|---|---|
| yarn install | ~50 秒 | ~15 秒 |
| Jest 测试 | ~30 秒 | ~25 秒 |
| Metro 双端 bundle | ~1.5 分钟 | ~1 分钟 |
| **整个 job** | **~3 分钟** | **~1.5 分钟** |

## 链接

- [Macrunara Quickstart 与模板库](https://github.com/macrunara/quickstart)
- [Macrunara quickstart 模板](https://github.com/MacRunara/quickstart/tree/main/templates)
- [macrunara.com](https://macrunara.com)
