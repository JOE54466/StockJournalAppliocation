# Stock Journal

A modern, feature-rich stock trading journal built with React, TypeScript, and Tailwind CSS to help you track, analyze, and visualize your trades and portfolio performance.

![Stock Journal Preview](https://i.ibb.co/67X3xfS/stock-journal-preview.png)

## About The Project

This application provides a comprehensive suite of tools for traders and investors to maintain a detailed record of their activities. It features a clean, dark-themed, and responsive interface designed for an excellent user experience.

### Key Features:

*   **Interactive Dashboard:** Get a high-level overview of your portfolio's value, total profit and loss, win rate, and recent trades at a glance.
*   **Detailed Trade Log:** Log every buy and sell transaction with details like ticker, quantity, price, and date.
*   **Dynamic Watchlist:** Keep an eye on stocks you're interested in with cards displaying key market data.
*   **Performance Analytics:** Visualize your monthly profit & loss and win/loss ratio with interactive charts.
*   **Modern Tech Stack:** Built with the latest frontend technologies for a fast, reliable, and scalable experience.
*   **Fully Responsive:** The layout is optimized for desktop, tablet, and mobile devices.

---

### Built With

*   **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
*   **[TypeScript](https://www.typescriptlang.org/)**: A typed superset of JavaScript that compiles to plain JavaScript.
*   **[Vite](https://vitejs.dev/)**: A next-generation frontend tooling that provides a faster and leaner development experience.
*   **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
*   **[Recharts](https://recharts.org/)**: A composable charting library built on React components.
*   **[React Router](https://reactrouter.com/)**: Declarative routing for React applications.
*   **[Lucide React](https://lucide.dev/)**: A beautiful and consistent icon toolkit.

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed on your machine:
*   [Node.js](https://nodejs.org/) (v18 or later recommended)
*   [Yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/stock-journal.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd stock-journal
    ```
3.  **Install dependencies:**
    ```sh
    yarn install
    ```
4.  **Run the development server:**
    ```sh
    yarn run dev
    ```
    The application will be available at `http://localhost:5173`.

---

## Project Structure

The codebase is organized into a modular structure to ensure maintainability and scalability.

```
/src
├── components/       # Reusable UI components (e.g., Card, Sidebar, Header)
│   ├── charts/       # Chart components (e.g., PortfolioChart)
│   ├── layout/       # Layout components (e.g., Sidebar, Header)
│   └── ui/           # Generic UI elements (e.g., Card)
├── data/             # Mock data generation
├── lib/              # Utility functions (e.g., cn, formatCurrency)
├── pages/            # Top-level page components for each route
└── App.tsx           # Main application component with routing
└── main.tsx          # Application entry point
└── index.css         # Global styles and Tailwind directives
```

---

## Future Enhancements

This project is currently using mock data. The next logical steps would be to:

*   **Connect a Backend:** Integrate a backend service like **Supabase** or a custom Node.js/Python API to manage a real database for users, trades, and portfolios.
*   **Real-time Data:** Implement a real-time data provider (e.g., Finnhub, Polygon.io) using WebSockets to display live price action.
*   **User Authentication:** Add user sign-up and login functionality.
*   **Advanced Analytics:** Introduce more sophisticated performance metrics and charting options.
