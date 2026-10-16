# About the project

<figure>
  <img src="/images/preview_device.png" alt="Project preview" />
</figure>

Paint Board is a fully open-source creative canvas for the web. It supports brushes, sketched shapes, text, and pictures, enough for a wide range of work.

Preview: [songlh.top/paint-board](https://songlh.top/paint-board/).  
Source: [github.com/LHRUN/paint-board](https://github.com/LHRUN/paint-board).

## License

Paint Board uses the MIT License. The full text is in the [LICENSE](https://github.com/LHRUN/paint-board/blob/main/LICENSE) file of the source repository.

## Run the drawing app

### Run locally

Requires Node.js 22 or newer, and pnpm 8.15.9 or newer.

```sh
git clone https://github.com/LHRUN/paint-board.git
cd paint-board
pnpm install
pnpm dev
```

### Docker

1. Clone the source repository.

```sh
git clone https://github.com/LHRUN/paint-board.git
cd paint-board
```

2. Build the Docker image. The image name is `paint-board`.

```sh
docker build -t paint-board .
```

3. Start the container.

```sh
docker run -d -p 8080:80 --name paint-board paint-board
```

4. Open `http://localhost:8080/paint-board/` in a browser.

## Languages

- Simplified Chinese
- Traditional Chinese
- English
- Japanese
- Korean
