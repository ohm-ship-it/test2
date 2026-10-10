# test2

A Next.js starter — App Router, TypeScript and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

```
src/
  app/
    layout.tsx      # root layout (header, footer, fonts)
    page.tsx        # home page  →  /
    about/page.tsx  # example route  →  /about
    not-found.tsx   # 404 page
    globals.css     # Tailwind + theme tokens
  components/
    Header.tsx
    Footer.tsx
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm start` — serve the production build
