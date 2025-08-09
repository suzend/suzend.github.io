// Modify the `PUBLICATIONS` object

const PUBLICATIONS = [
  {
    title:
      "VTAO-BiManip: Masked Visual-Tactile-Action Pre-training with Object Understanding for Bimanual Dexterous Manipulation",
    authors:
      "Zhengnan Sun, Zhaotai Shi, Jiayin Chen, Qingtao Liu, Yu Cui, Jiming Chen, Qi Ye",
    image: "./VTAO-Bimanip/resources/icra25_underreview.png",
    conference: "IROS 2025",
    links: {
      "project page": "https://suzend.github.io/VTAO-Bimanip/",
      arxiv: "https://arxiv.org/abs/2501.03606",
      paper: "",
      supp: "",
      video: "",
      code: "",
    },
    badges: [],
  },
  {
    title:
      "Masked Visual-Tactile Pre-training for Robot Manipulation",
    authors:
      "Qingtao Liu,  Qi Ye, Zhengnan Sun, Yu Cui, Gaofeng Li, Jiming Chen",
    image: "./M2VTP/resources/icra24.png",
    conference: "ICRA 2024",
    links: {
      "project page": "https://lqts.github.io/M2VTP/",
      arxiv: "",
      paper: "https://ieeexplore.ieee.org/abstract/document/10610933",
      supp: "",
      video: "",
      code: "",
    },
    badges: [],
  },
  {
    title:
      "DexRepNet: Learning Dexterous Robotic Grasping Network with Geometric and Spatial Hand-Object Representation",
    authors:
      "Qingtao Liu, Yu Cui, Qi Ye, Zhengnan Sun, Haoming Li, Gaofeng Li, Lin Shao, Jiming Chen",
    image: "./DexRepNet/resources/examples.png",
    conference: "IROS 2023",
    links: {
      "project page": "https://lqts.github.io/DexRepNet/",
      arxiv: "https://arxiv.org/abs/2303.09806",
      paper: "https://arxiv.org/pdf/2303.09806",
      supp: "",
      video: "https://www.bilibili.com/video/BV1bP411b7jh/?spm_id_from=333.999.0.0",
      code: "",
    },
    badges: [],
  },

];

const HIGHLIGHT_NAME = "zhengnan sun";

// Do not touch the code below

// Convert PUBLICATIONS to HTML table
document.addEventListener("DOMContentLoaded", (ev) => {
  const tbody = document.createElement("tbody");
  const rows = PUBLICATIONS.map((data) => {
    const row = document.createElement("tr");
    row.append(createImageCell(data.image), createContentCell(data));
    return row;
  });
  tbody.append(...rows);
  document.querySelector("#pub-list").append(tbody);
});

// Functions to create HTML elements
function createImageCell(link) {
  const cell = document.createElement("td");
  cell.style.padding = "10px";
  cell.style.width = "30%";
  cell.style.verticalAlign = "middle";
  const img = document.createElement("img");
  img.src = link;
  img.style.width = "100%";
  cell.append(img);
  return cell;
}

function createContentCell({ title, authors, conference, links, badges }) {
  const cell = document.createElement("td");
  cell.style.padding = "20px";
  cell.style.width = "70%";
  cell.style.verticalAlign = "middle";
  const titleElem = document.createElement("papertitle");
  titleElem.textContent = title;
  const authorsElem = createAuthorElement(authors);
  const conferenceElem = document.createElement("em");
  conferenceElem.textContent = conference;
  const badgesElem = createBadgesElement(badges);
  const linksElem = createLinksElement(links);
  const elements = [
    titleElem,
    document.createElement("br"),
    authorsElem,
    document.createElement("br"),
    conferenceElem,
    badgesElem,
    document.createElement("br"),
    linksElem,
  ].filter((elem) => elem);
  cell.append(...elements);
  return cell;
}

function createAuthorElement(authors) {
  if (!authors) {
    return null;
  }
  const frag = document.createDocumentFragment();
  const elements = authors.split(/[,;]/g).map((author) => {
    const authorText = author.trim();
    if (authorText.toLowerCase() === HIGHLIGHT_NAME) {
      const authorElem = document.createElement("strong");
      authorElem.textContent = authorText;
      return authorElem;
    }
    return authorText;
  });
  for (let i = 0; i < elements.length; i++) {
    frag.append(elements[i]);
    if (i !== elements.length - 1) {
      frag.append(", ");
    }
  }
  return frag;
}

function createBadgesElement(badges) {
  if (!badges) {
    return null;
  }
  const frag = document.createDocumentFragment();
  const textElem = document.createElement("span");
  textElem.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;";
  frag.append(textElem);
  frag.append(
    ...badges.map((badge) => {
      const badgeElem = document.createElement("span");
      badgeElem.classList.add("badge");
      badgeElem.textContent = badge;
      return badgeElem;
    })
  );
  return frag;
}

function createLinksElement(links) {
  if (!links) {
    return null;
  }
  const frag = document.createDocumentFragment();
  for (const [name, link] of Object.entries(links)) {
    if (!link) {
      continue;
    }
    const elem = document.createElement("a");
    elem.href = link;
    elem.textContent = "[" + name + "]";
    const textElem = document.createElement("span");
    textElem.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;";
    frag.append(elem, textElem);
  }
  return frag;
}
