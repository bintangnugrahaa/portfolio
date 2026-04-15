# Muhammad Bintang Nugraha

A fast, lightweight, and responsive personal portfolio website built using **Astro**, **TailwindCSS**, and **TypeScript**.

## 🚀 Features

- **Blazing Fast**: Static site generation powered by Astro for maximum performance.
- **Data-Driven**: Content works out-of-the-box using local JSON files (`src/data/`), making it extremely easy to update your portfolio (projects, career history, tech stack) without modifying components.
- **API Ready**: Supports fetching data from a live backend simply by providing an endpoint in the `.env` file.
- **Modern Styling**: Beautifully designed with TailwindCSS.
- **Icons**: Extensive icon support via `@iconify-json` and `astro-icon`.

## 📁 Project Structure

```text
/
├── public/           # Static assets like images and favicons
├── src/
│   ├── components/   # Astro and UI components
│   ├── data/         # Local JSON data (career, home, projects, tech)
│   └── pages/        # Astro routing pages
├── .env.example      # Example environment variables
├── astro.config.mjs  # Astro configuration
└── package.json      # Project dependencies and scripts
```

## 🛠️ Getting Started

### Prerequisites

You can use `bun`, `npm`, `yarn`, or `pnpm` to manage dependencies. This project uses `bun` based on its lockfile.

### 1. Installation

Clone the repository and install the dependencies:

```bash
bun install
```

### 2. Environment Variables (Optional)

By default, the portfolio will use the local JSON files located in `src/data/`.
If you want to use an external API to serve your data, create a `.env` file from the example:

```bash
cp .env.example .env
```

And update the `PUBLIC_API_URL` variable:

```env
PUBLIC_API_URL=https://your-api-endpoint.com
```

### 3. Development

Start the local development server:

```bash
bun run dev
```

Visit `http://localhost:4321` in your browser to view the portfolio.

### 4. Build for Production

To build the static site for deployment:

```bash
bun run build
```

This will generate a `dist/` directory containing your optimized, production-ready static files.

## 🚀 Deployment

Since this is a static Astro site, you can host it anywhere.

- **Vercel / Netlify / Cloudflare Pages**: Simply push your code to your Git repository, and link it in their dashboards. It will build and deploy automatically.
- **Shared Hosting**: Run `bun run build` locally, and upload the contents of the `dist/` folder directly to your `public_html` directory via FTP or File Manager.

## 📄 License

This project is licensed under the terms found in the `LICENSE` file.
