var TURKISH_WORDS = [
  "kalem",
  "tahta",
  "radyo",
  "sehpa",
  "tabak",
  "kilit",
  "perde",
  "rende",
  "makas",
  "dolap",
  "tepsi",
  "lamba",
  "kazak",
  "atlet",
  "kumru",
  "geyik",
  "banyo",
  "biber",
  "gurur",
];

function NewsKey() {
  return TURKISH_WORDS[Math.floor(Math.random() * TURKISH_WORDS.length)];
}

export { NewsKey };
