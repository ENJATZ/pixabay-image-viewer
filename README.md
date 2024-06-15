# Pixabay Image Viewer

This is a simple web application that fetches data from the Pixabay API and displays images with titles and descriptions. The application initially loads 10 images and allows loading more images with a button click.

## How to Run

1. Clone the repository:
    ```
    git clone https://github.com/enjatz/pixabay-image-viewer.git
    ```

2. Navigate to the project directory:
    ```
    cd pixabay-image-viewer
    ```

3. Update the API Key in `main.js` with your Pixabay API key (unsafe I know, but no back-end right now).

4. Open the `index.html` file in your web browser or use [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

## Project Structure

- `index.html`: The main HTML file.
- `main.js`: JavaScript file containing the logic for fetching and displaying images.
- `image-card.js`: JavaScript file defining the custom web component for displaying images.
- `styles.css`: CSS file for styling the application.

## Features

- Fetches data from the Pixabay API.
- Displays the first 10 results.
- Provides a "Load More" button to load the next set of results.
- Uses a custom web component (`<image-card>`) for displaying images with titles and descriptions.
- Simple design and implementation without any JavaScript/CSS frameworks.
- Reusability of components and performant JS/CSS.