# React Node Web Scraper

## Overview

This project is a web scraper that consists of a client and a server. The client is a [React](https://react.dev/) app bootstrapped with [vite](https://vitejs.dev/) and the server uses Express.js, Axios, Cheerio, and Puppeteer for web scraping.

## Project Structure

The project has two main folders:

- `client`: This is where the front-end code resides.
- `server`: This contains the back-end code for the web scraper.

## Technologies Used

- **Frontend**: React, Vite
- **Backend**: Node.js, Express, Axios, Cheerio, Puppeteer

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/react-node-web-scraper.git
   cd react-node-web-scraper
   ```

2. Install dependencies for both server and client applications using:
   ```bash
   npm install
   # or
   yarn
   ```

### Running the Application

## Server

### Available Scripts

In the server directory, you can run:

#### `npm start`

Runs the server in development mode with nodemon. Open http://localhost:8000 to view the response from `/` endpoint in the browser or any other api client.

## Client

### Available Scripts:

In the client directory, you can run:

```bash
npm run dev
# or
yarn dev
```

Runs the app in development mode. Open http://localhost:5173 to view it in the browser.

```bash
npm run build
# or
yarn build
```

Builds the app for production to the `dist` folder.

```bash
npm run preview
# or
yarn preview
```

Preview the production build locally.
