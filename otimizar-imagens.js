const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const pastaOrigem = path.join(__dirname, "img");
const pastaDestino = path.join(__dirname, "img", "otimizado");

if (!fs.existsSync(pastaDestino)) {
  fs.mkdirSync(pastaDestino, { recursive: true });
}

const imagens = [
  ["adoção.jpg", 800, 420],
  ["castração.jpg", 800, 480],
  ["images.jpg", 547, 365],
  ["ração.jpg", 640, 480],
  ["resgate.jpg", 800, 450],
  ["icones/adocaoemj.png", 300, 314],
  ["icones/cachorrinho.png", 300, 344],
  ["icones/compartilhaemj.png", 300, 232],
  ["icones/doeemj.png", 300, 300],
  ["icones/insta.png", 300, 300],
  ["icones/local.png", 250, 250],
  ["icones/telefone.png", 300, 300],
  ["icones/voluntarioemj.png", 300, 300],
];

async function otimizar() {
  for (const [arquivo, largura, altura] of imagens) {
    const origem = path.join(pastaOrigem, arquivo);

    const nome = path.basename(arquivo, path.extname(arquivo));
    const destino = path.join(pastaDestino, `${nome}.webp`);

    await sharp(origem)
      .resize(largura, altura, {
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: 80 })
      .toFile(destino);

    console.log(`Otimizado: ${arquivo} -> ${nome}.webp`);
  }

  console.log("\nOtimização concluída!");
}

otimizar().catch((erro) => {
  console.error("Erro ao otimizar imagens:", erro);
});
