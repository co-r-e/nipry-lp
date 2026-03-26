# TODO

- [x] 確認: docs 導入ページの対象ファイルと既存差分を把握する
- [x] 準備: 指定画像を `public/products/products_dexcode.png` にコピーする
- [x] 実装: 導入文直下に画像を追加する
- [x] 検証: 差分と表示を確認する

## Review

- 実施前
  - `content/docs/getting-started/introduction.mdx` には既存の未コミット差分があるため、その内容を維持したまま最小差分で編集する
- 実施後
  - `npm run build` が成功し、静的エクスポートまで完了
  - `out/docs/getting-started/introduction.txt` に、導入段落の直後で `/dexcode-lp/products/products_dexcode.png` を参照する `figure` が出力されることを確認
  - 画像ファイルは `out/products/products_dexcode.png` にも出力されることを確認
  - ユーザー確認で画像が表示されなかったため、docs 用 `Image` コンポーネントの `basePath` 未適用を追加で修正する
  - `out/docs/getting-started/introduction.html` でも `img src="/dexcode-lp/products/products_dexcode.png"` を確認

## Current Task

- [x] 確認: GitHub Pages 向け静的出力の URL 形式と既存 metadata を整理する
- [x] 実装: `/ja/` を含む末尾スラッシュ付き URL でも 404 にならないよう公開出力を調整する
- [x] 確認: canonical / sitemap / structured data は no-slash canonical のままで整合することを確認する
- [x] 検証: `npm run build` 後の `out` とローカル確認で slash あり・なしの両系統を検証する

## Current Review

- 実施前
  - GitHub Pages 本番では `/dexcode-lp/ja` が `200`、`/dexcode-lp/ja/` が `404`
  - 既存ビルド出力は `out/ja.html` を生成しており、`out/ja/index.html` は存在しない
- 実施後
  - `package.json` の `build` に `tsx scripts/duplicate-static-routes.ts` を追加し、静的 export 後に slash 互換ルートを生成するようにした
  - `scripts/duplicate-static-routes.ts` で `out/**/*.html` を走査し、`404.html` / `_not-found.html` / `index.html` を除く各 HTML に対して対応する `.../index.html` を複製するようにした
  - `npm run build` は成功し、`out/ja/index.html` と `out/docs/getting-started/introduction/index.html` などの slash 互換ファイルが生成された
  - `python3 -m http.server 4173 --directory out` でローカル配信し、`/ja/` と `/docs/getting-started/introduction/` がともに `200` を返すことを確認した
  - `npm run lint` は既存 ESLint 設定の循環参照エラーで失敗したため、このタスクでは未解消
