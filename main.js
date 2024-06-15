const API_KEY = "<YOUR_KEY_HERE>";

document.addEventListener("DOMContentLoaded", () => {
  const imageContainer = document.getElementById("image-container");
  const loadMoreButton = document.getElementById("load-more");
  let currentPage = 1;
  const resultsPerPage = 10;

  async function fetchImages(page) {
    const response = await fetch(
      `https://pixabay.com/api/?key=${API_KEY}&page=${page}&per_page=${resultsPerPage}`
    );
    const data = await response.json();
    return data.hits;
  }

  function renderImages(images) {
    images.forEach((image) => {
      const imageCard = document.createElement("image-card");
      imageCard.setAttribute("title", image.tags);
      imageCard.setAttribute("description", image.user);
      imageCard.setAttribute("image", image.previewURL);
      imageCard.setAttribute("views", image.views);
      imageCard.setAttribute("url", image.pageURL);
      imageContainer.appendChild(imageCard);
    });
  }

  async function loadImages() {
    const images = await fetchImages(currentPage);
    renderImages(images);
    currentPage++;
  }

  loadMoreButton.addEventListener("click", loadImages);

  loadImages();
});
