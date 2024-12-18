# Mantine Next.js template

This is a template for [Next.js](https://nextjs.org/) app router + [Mantine](https://mantine.dev/).
If you want to use pages router instead, see [next-pages-template](https://github.com/mantinedev/next-pages-template).

## Features

This template comes with the following features:

- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

## npm scripts

### Build and dev scripts

- `dev` – start dev server
- `build` – bundle application for production
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts

### Other scripts

- `prettier:write` – formats all files with Prettier

### Documentation

`page.js` => Create a new page (e.g., app/about/page.js creates a <your-domain>/about page)

`layout.js` => Create a new layout that wraps sibling and nested pages

`not-found.js` => Fallback page for "Not Found" errors (thrown by sibling or nested pages or layouts)

`error.js` => Fallback page for other errors (thrown by sibling pages or nested pages or layouts)

`loading.js` => Fallback page which is shown whilst sibling or nested pages (or layouts) are fetching data

`route.js` => Allows you to create an API route (i.e., a page which does NOT return JSX code but instead data, e.g., in the JSON format)

You also find a list with all supported filenames & detailed explanations in the official docs: https://nextjs.org/docs/app/api-reference/file-conventions

### Data Base

[better-sqlite3](https://www.npmjs.com/package/better-sqlite3)

[better-sqlite3-types](https://www.npmjs.com/package/@types/better-sqlite3)

```console
yarn add better-sqlite3

yarn add @types/better-sqlite3 -D
```

Create `initdb.js` file and run

```console
node initdb.js
```
