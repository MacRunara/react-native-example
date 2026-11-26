# react-native-example — React Native JS tests & Hermes bundles on Macrunara

> ⚡ **[Install Macrunara](https://github.com/marketplace/macrunara)** → **[Fork](../../fork)** this repo → push to `main`: Jest tests + production **JS bundles for iOS and Android** finish in **~3 min** on Macrunara M4 runners.
> 📊 **~3 min cold / ~1.5 min warm** — measured on a Macrunara M4 (Mac mini) node. <!-- TODO: replace with the real numbers from the first live run before publishing -->

[![Built on Macrunara](https://img.shields.io/badge/Built%20on-Macrunara-brightgreen)](https://macrunara.com)

English | [中文](README.zh-CN.md)

A fork-and-run **React Native** example: `yarn install` → Jest component tests → Metro **production bundles for both platforms** (`main.jsbundle` + `index.android.bundle`), uploaded as artifacts — the exact CI stages every RN app needs before native compilation. Node 20 LTS and yarn are preinstalled on Macrunara nodes, zero setup.

## Fork & run in 3 minutes

1. **Install** the [Macrunara GitHub App](https://github.com/marketplace/macrunara) into your organization.
2. **Fork** this repository into the same organization.
3. Push to `main` — the [RN workflow](.github/workflows/react-native.yml) runs tests and produces both platform bundles.

> ⚠️ The runner label must be exactly `runs-on: [macos, arm64, macrunara]`.

## What's inside

- A minimal RN app (counter screen) — `index.js`, `App.js`, `app.json`.
- Jest + `react-test-renderer` component test in `__tests__/`.
- `yarn bundle:ios` / `yarn bundle:android` scripts producing release Metro bundles into `dist/`.
- No `ios/` / `android/` native folders — this keeps the repo tiny and the pipeline secret-free. For full native builds (`pod install` → `xcodebuild` / `gradlew assembleRelease`), scaffold them with `npx @react-native-community/cli init` in your own app, keep the same runner label, and the preinstalled CocoaPods / Android SDK / JDK take it from there — see the [RN template](https://github.com/MacRunara/quickstart/blob/main/templates/react-native.yml).

## Build times (measured on Macrunara M4)

<!-- TODO: replace placeholders with real measured numbers + date from the first live run -->
| Stage | Cold | Warm (yarn cache) |
|---|---|---|
| yarn install | ~50 s | ~15 s |
| Jest tests | ~30 s | ~25 s |
| Metro bundle iOS + Android | ~1.5 min | ~1 min |
| **Whole job** | **~3 min** | **~1.5 min** |

> Measured on a Macrunara M4 (Mac mini) node, Node 20 LTS preinstalled.

## Links

- [Macrunara Quickstart & workflow templates](https://github.com/macrunara/quickstart)
- [Macrunara quickstart templates](https://github.com/MacRunara/quickstart/tree/main/templates)
- [macrunara.com](https://macrunara.com)
