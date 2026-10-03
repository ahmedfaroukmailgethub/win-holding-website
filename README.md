# WIN HOLDING Website

Corporate website for WIN HOLDING — *Sky & Beyond*.

Stack: Vite + React + TypeScript + Tailwind CSS v4. Deploys to Vercel (`vercel.json` included).

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Structure

- `src/data.ts` — company, office and contact content (edit copy here)
- `src/components/` — page sections: Header, Hero, About, Group, Presence, Contact, Footer
- `src/index.css` — brand tokens (gold `#ae8c63`, navy `#16384a`) and fonts
- `src/assets/` — logos cropped from the brand files in `../logo`
