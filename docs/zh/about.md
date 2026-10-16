# 关于项目

<figure>
  <img src="/images/preview_device.png" alt="项目预览" />
</figure>

Paint Board 是一款完全开源的 Web 端创意画板。支持多种画笔、涂鸦图形、文字和图片，可以满足你的丰富创作需求。

预览地址：[songlh.top/paint-board](https://songlh.top/paint-board/)。  
Github 源码：[github.com/LHRUN/paint-board](https://github.com/LHRUN/paint-board)。

## 开源协议

Paint Board 使用 MIT 许可证。许可证全文在源码仓库的 [LICENSE](https://github.com/LHRUN/paint-board/blob/main/LICENSE)。

## 运行画板应用

### 本地启动

环境要求：Node.js 22 或更新版本，以及 pnpm 8.15.9 或更新版本

```sh
git clone https://github.com/LHRUN/paint-board.git
cd paint-board
pnpm install
pnpm dev
```

### Docker 支持
1. Clone 源码仓库
```sh
git clone https://github.com/LHRUN/paint-board.git
cd paint-board
```

2. 构建 Docker 镜像，镜像名称为 `paint-board`。
```sh
docker build -t paint-board .
```

3. 启动 docker 容器。
```sh
docker run -d -p 8080:80 --name paint-board paint-board
```

4. 在浏览器打开 `http://localhost:8080/paint-board/` 即可访问。

## 语言

+ 简体中文
+ 繁体中文
+ English
+ 日本語
+ 한국어
