const cart = [
  { id: 1, title: "pomme", qty: 0 },
  { id: 2, title: "banana", qty: 0 },
];

const divList = document.querySelector(".list");

for (const article of cart) {
  const articleContainer = document.createElement("div");
  articleContainer.classList.add("article-container");
  articleContainer.dataset.id = article.id;
  articleContainer.textContent = article.title;

  articleContainer.addEventListener("click", function (event) {
    console.log(event.target.dataset.id);
  });

  divList.appendChild(articleContainer);
}
