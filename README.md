<h1 align="center">
    <img alt="Gungi.io Game" title="Gungi.io Game" src="https://github.com/butterwenz/Gungi.io/blob/Chess_game/public/assets/w5.png" width="140"> <br />
    Gungi.io
</h1>

修改 https://github.com/vzhou842/example-.io-game 製作成 [Gungi.io](https://github.com/butterwenz/Gungi.io)

基於 [Node.js](https://nodejs.org/), [socket.io](https://socket.io/), and [HTML5 Canvas](https://www.w3schools.com/html/html5_canvas.asp).

## 安裝方式

下載 Gungi.io
```bash
git clone https://github.com/butterwenz/Gungi.io.git
cd Gungi.io-Chess_game
```

首先，請確保您已安裝 Node 和 NPM。然後，
```bash
cd Gungi.io-Chess_game
npm install
npm run develop
```

在你的本地機器上。

http://localhost:3000/

要在生產環境中運行項目(將專案打包)，只需
```bash
npm install
npm run build
npm start
```

## 測試

要為此項目運行測試，只需
```bash
$ npm install
$ npm test
```

## Node版本

Node 版本必須是16以下，可以使用Node版本控制工具:[NPM](https://github.com/coreybutler/nvm-windows/releases)，[直接下載](nvm-setup.exe)

```bash
nvm install 16
nvm use 16
node –v 
```

Node v16.20.0

NPM  8.19.4
