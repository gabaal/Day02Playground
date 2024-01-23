document.addEventListener("DOMContentLoaded", async function () {
  const apiKey = "0c8c86d7484c4670bd6435f9ec8a55ca";
  const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data);
  const newsContainer = document.getElementById("news-container");

  data.articles.forEach((article) => {
    const newsItem = document.createElement("div");
    newsItem.className = "news-item";

    const title = document.createElement("div");
    title.className = "news-title";
    title.textContent = article.title;

    const description = document.createElement("div");
    description.className = "news-description";
    description.textContent = article.description;

    newsItem.appendChild(title);
    newsItem.appendChild(description);
    newsContainer.appendChild(newsItem);
  });
});
