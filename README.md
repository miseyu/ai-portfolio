# ai-portfolio

@miseyu のポートフォリオサイト。Next.js + pnpm モノレポで構成されています。

## サイト概要

Cloud / Data Platform / SRE を専門とするソフトウェアエンジニアの職務経歴サイトです。

| ページ | パス | 内容 |
|--------|------|------|
| ホーム | `/` | 強み・代表案件・キャリア概要 |
| 職務経歴 | `/career` | 全案件のタイムライン一覧 |
| 案件詳細 | `/career/[slug]` | 各案件の技術構成・担当・成果 |

## リポジトリ構成

```
ai-portfolio/
├── apps/
│   └── web/                  # Next.js 16 フロントエンドアプリ
│       ├── app/              # App Router ページ・API Routes
│       │   ├── page.tsx      # ホームページ
│       │   ├── career/       # 職務経歴ページ
│       │   └── layout.tsx
│       ├── features/         # フィーチャーモジュール
│       └── styles/           # グローバルCSS
├── packages/
│   ├── tailwind-config/      # 共有 Tailwind 設定・テーマトークン
│   ├── tsconfig/             # 共有 TypeScript 設定
│   └── utils/                # 共有ユーティリティ関数
└── docs/
    └── design/               # デザインファイル（.pen）
```

## 技術スタック

| 区分 | 使用技術 |
|------|----------|
| フレームワーク | Next.js 16.2.6、React 19 |
| 言語 | TypeScript 5.4.4 |
| スタイリング | Tailwind CSS v4、shadcn/ui |
| ビルド | Turborepo、pnpm Workspaces |
| Lint / Format | Biome |
| Node.js | v24（mise 管理） |

## セットアップ

```bash
# Node.js 24 のセットアップ（mise 使用）
mise install

# 依存関係インストール
pnpm install

# 開発サーバー起動
pnpm dev          # または rtk pnpm --filter web dev
```

開発サーバーは `http://localhost:3000` で起動します。

## 主なコマンド

```bash
# 開発
pnpm dev                                    # 全パッケージを並列起動
pnpm --filter web dev                       # Web アプリのみ

# ビルド
pnpm build                                  # 全パッケージをビルド
pnpm --filter web build                     # Web アプリのみ

# コード品質
pnpm --filter web check:biome              # Biome チェック
pnpm --filter web check:biome:fix          # Biome 自動修正
pnpm --filter @ai-portfolio/utils check-types  # 型チェック
```

## パッケージ詳細

### `apps/web`

Next.js App Router を使用したメインアプリケーション。

- `@/*` → `apps/web/src/*` のパスエイリアス
- `reactStrictMode: true`
- Tailwind は `@ai-portfolio/tailwind-config` の共有設定を使用

### `packages/tailwind-config`

全パッケージ共通のデザイントークンを管理します。

- ライト / ダークモード対応のセマンティックカラー（`bg-default`、`content-emphasis` など）
- フォントファミリー：Satoshi（display）、Inter（body）、Geist Mono（mono）
- ダークモードはクラスベース（`darkMode: "class"`）

### `packages/utils`

ブラウザ・サーバー共通のユーティリティ関数。
新しいユーティリティは `packages/utils/src/functions/` に追加し、`index.ts` からエクスポートしてください。

### `packages/tsconfig`

共有 TypeScript 設定ファイル群。

- `base.json`: 基本設定
- `nextjs.json`: Next.js 向け拡張
- `react-library.json`: React ライブラリ向け拡張
