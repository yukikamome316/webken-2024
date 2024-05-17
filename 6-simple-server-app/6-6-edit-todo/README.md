# 6-simple-server-app
## 6-6-edit-todo
### 実行環境
`6-simple-server-app/6-5-edit-todo` に `cd` した上で、以下のコマンドを実行する必要があります:
```bash
npm install
```

### 実行方法
```bash
npm run start
```

#### TODO追加コマンド
以下のコマンドを実行後にブラウザをリロードすると、TODOが追加されていることが確認できます。
```bash
curl -o /dev/null -w "%{http_code}\n" -s -X POST -H "Content-Type: application/json" -d '{"title": "次回のWeb研に出席する"}' http://localhost:8000
```

#### TODO変更コマンド
以下のコマンドを実行後にブラウザをリロードすると、「TODOアプリを自作する」のタスクが完了済みになっていることが確認できます。
```bash
curl -o /dev/null -w "%{http_code}\n" -s -X PUT -H "Content-Type: application/json" -d '{"completed": true}' http://localhost:8000/2
```

また、以下のコマンドを実行後にブラウザをリロードすると、「JavaScriptを勉強する」のタイトルが「Node.jsを勉強する」になっていることが確認できます。
```bash
curl -o /dev/null -w "%{http_code}\n" -s -X PUT -H "Content-Type: application/json" -d '{"title": "Node.jsを勉強する"}' http://localhost:8000/1
```

#### TODO削除コマンド
以下のコマンドを実行後にブラウザをリロードすると、「漫画を読み切る」のタスクが削除されていることが確認できます。
```bash
curl -o /dev/null -w "%{http_code}\n" -s -X DELETE http://localhost:8000/3
```

#### ステータスコード早見表

| status | 意味 | 状況 |
| --- | --- | --- |
| 201 | Created | 新しいTODOが作成された |
| 404 | Not Found | 指定されたIDのTODOが存在しない |
| 204 | No Content | TODOの内容が正常に変更された |