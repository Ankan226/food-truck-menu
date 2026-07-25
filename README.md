# Food Truck Menu (React)

A digital menu board that lets floor staff look up items instantly, replacing manual paper systems and Excel sheets — built for ticket **ENG-56414**.

🔗 **Live demo:** [https://food-truck-menu-yourname.vercel.app](https://food-truck-menu-yourname.vercel.app)


## Features

- Live search across menu items
- Add new items with validation (blocks empty/invalid submissions, highlights errors in red)
- Loading indicator for simulated slow-connection scenarios
- Empty state messaging when a search returns nothing
- Accessible: labeled inputs, ARIA attributes, visible keyboard focus, screen-reader-friendly live regions
- Basic XSS protection on all text inputs
- Built with plain React (`useState`/`useEffect` only — no Redux, no Router)

## Screenshots

| Menu View | Form Validation | Empty Search State |
|---|---|---|
| <img width="893" height="867" alt="image" src="https://github.com/user-attachments/assets/8041c9ce-037c-4637-b76a-2974e914df98" />
 | <img width="903" height="482" alt="image" src="https://github.com/user-attachments/assets/67bdba05-2f70-4693-98df-b4e2dbcdd433" />
 | <img width="898" height="300" alt="image" src="https://github.com/user-attachments/assets/5a264801-67a0-4996-bf38-d20937e61ee8" />
 |

## Tech Stack

- [React 18](https://react.dev)
- [Vite](https://vitejs.dev) — build tool and dev server
- Plain CSS with design tokens (no CSS framework)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (LTS version)

### Installation

```bash
git clone https://github.com/yourusername/food-truck-menu.git
cd food-truck-menu
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

Output goes to the `dist/` folder.

### Lint

```bash
npm run lint
```

## Project Structure

```
food-truck-menu/
├── index.html
├── package.json
├── vite.config.js
├── .eslintrc.cjs
└── src/
    ├── main.jsx
    ├── App.jsx / App.css
    ├── index.css
    ├── components/
    │   ├── AddItemForm.jsx / .css
    │   ├── SearchBar.jsx / .css
    │   ├── MenuList.jsx / .css
    │   ├── MenuItem.jsx / .css
    │   ├── EmptyState.jsx / .css
    │   └── LoadingSpinner.jsx / .css
    ├── data/
    │   └── menuData.js
    └── utils/
        └── sanitize.js
```

## Deployment

Deployed with [Vercel](https://vercel.com) — auto-detects Vite projects, no config needed.

## License

Internal project deliverable — not licensed for external distribution.
