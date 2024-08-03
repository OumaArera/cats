# Cats Fun Facts

## Overview

The `Cats` component is a React component that displays a random cat fact alongside a random cat image. The cat fact is fetched from an external API, and the cat image is selected randomly from a predefined set of images. Both the cat fact and the image update every 20 seconds simultaneously to ensure synchronization.

## Features

- Fetches a random cat fact from `https://catfact.ninja/fact`.
- Displays a random cat image from a predefined set of 30 images.
- Updates the cat fact and the image every 20 seconds.

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies using npm or yarn:
   ```sh
   npm install
   # or
   yarn install
   ```

## Usage

1. Start the development server:
   ```sh
   npm start
   # or
   yarn start
   ```
2. Open your web browser and navigate to `http://localhost:3000` to view the component.



## Notes

- Make sure to have all the cat images in the `./images` directory.
- The cat facts are fetched from `https://catfact.ninja/fact`. Ensure you have an internet connection to fetch the data.
- The component uses `axios` for making HTTP requests. If `axios` is not already installed, you can add it by running:
  ```sh
  npm install axios
  # or
  yarn add axios
  ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Developer

The application has been developed by John Ouma alias Ouma Arera