class ImageCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ["title", "description", "image", "views"];
  }

  attributeChangedCallback(name, _oldValue, _newValue) {
    if (name === "title" || name === "description" || name === "image") {
      this.render();
    }
  }

  render() {
    this.innerHTML = `
            <a href="${this.getAttribute("url")}">
              <div class="card">
                  <img src="${this.getAttribute(
                    "image"
                  )}" alt="${this.getAttribute("title")}">
                  <h2>${this.getAttribute("title")}</h2>
                  <p>${this.getAttribute(
                    "description"
                  )}; views: ${this.getAttribute("views")}</p>
              </div>
            </a>
        `;
  }
}

customElements.define("image-card", ImageCard);
