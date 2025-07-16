# Crypto Tracker

A real-time cryptocurrency tracking application.

## Description

Crypto Tracker is a modern React application using TypeScript, Redux, TailwindCSS, and the Coinranking API. It allows you to view prices, statistics, charts, and detailed information about cryptocurrencies.

## Main Libraries Used

- **React** — UI library
- **TypeScript** — static typing
- **Redux Toolkit (RTK)** — state management
- **React Redux** — Redux bindings for React
- **React Router DOM** — routing
- **TailwindCSS** — utility-first CSS framework
- **Chart.js** (via `react-chartjs-2`) — charts and data visualization
- **DOMPurify** — sanitizing and protecting against dangerous HTML
- **Coinranking API** — cryptocurrency data provider

## Architecture

- **src/components/** — reusable components (Header, Footer, MarqueeSection, UI, etc.)
- **src/components/pages/** — page-related components (Home, Coin)
- **src/pages/** — top-level route pages (Home, Coin, NotFound)
- **src/services/** — API service modules
- **src/lib/** — utility functions
- **src/app/** — Redux store
- **src/types/** — domain-separated TypeScript types
- **src/layout/** — layout components
- **src/assets/** — assets
- **src/constants.ts** — constants

## Pages

The application includes the following pages:

- **Home** (`/`): Main page with cryptocurrency overview, statistics, and search.
- **Coin** (`/coin/:coinId`): Detailed information, stats, and chart for a specific coin.
- **NotFound** (`*`): 404 page for undefined routes.

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the project:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## API Documentation

This project uses the Coinranking API. Documentation is available here: [Coinranking API Docs](https://account.coinranking.com/dashboard/api)

## Types Structure

Types are located in the `src/types/` folder and separated by domain:
- `coin.types.ts` — coin types
- `api.types.ts` — API response types
- `stats.types.ts` — statistics types
- `history.types.ts` — history types

## License

MIT
