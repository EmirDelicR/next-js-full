# Mantine Next.js template

This is a template for [Next.js](https://nextjs.org/) app router + [Mantine](https://mantine.dev/).
If you want to use pages router instead, see [next-pages-template](https://github.com/mantinedev/next-pages-template).

## Init project

1. Create `.env` file and add

```env
SESSION_SECRET=your_secret
AUTH_PASSWORD_SALT=your_salt
```

2. Install dependency

```console
yarn install
```

3. In root project run:

```console
node initdb.mjs
```

4. Run project:

```console
yarn dev
```

5. In DB there is dummy user that you can use:

Email: `john@doo.com`
Password: `Test123!`

## Features

This template comes with the following features:

- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- ESLint setup with [eslint-config-mantine](https://github.com/mantinedev/eslint-config-mantine)

## npm scripts

#### Build and dev scripts

- `dev` – start dev server
- `build` – bundle application for production
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

#### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettier:check` – checks files with Prettier
- `jest` – runs jest tests
- `jest:watch` – starts jest watch
- `test` – runs `jest`, `prettier:check`, `lint` and `typecheck` scripts

#### Other scripts

- `prettier:write` – formats all files with Prettier

## Data Base

[better-sqlite3](https://www.npmjs.com/package/better-sqlite3)

[better-sqlite3-types](https://www.npmjs.com/package/@types/better-sqlite3)

[better-sqlite3-helper](https://www.npmjs.com/package/better-sqlite3-helper)

```console
yarn add better-sqlite3

yarn add @types/better-sqlite3 -D
```

Create `initdb.mjs` file and run

```console
node initdb.mjs
```

## Packages in project

### tabler/icons-react

Icons in project

[NPM Package](https://www.npmjs.com/package/@tabler/icons-react)

[Icon List](https://tabler.io/icons)

### argon2

Package for password hash and verify

[NPM package](https://www.npmjs.com/package/argon2)

### jose

Package for JWT token

[NPM package](https://www.npmjs.com/package/jose)

### zod

TypeScript-first schema validation with static type inference

[NPM package](https://www.npmjs.com/package/zod)
