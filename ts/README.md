# How to use a local TypeScript environment

## Setup

1. Open a terminal and navigate to the folder you want to code in and run:

   ```
   npm init -y
   npm i typescript
   npx tsc --init
   ```

2. In `package.json` add the following:

```
package.json

{
  ...
  "type": "module",
  "scripts": {
    "build": "tsc",
    "dev": "tsc --watch"
  },
  ...
}
```

3. In `tsconfig.json` add the following fields
   ```
   tsconfig.json
   {
     ...
     "rootDir": "./src",
     "outDir": "./dist",
     ...
   }
   ```
4. Create a folder `src/`.
5. Now you can create `.ts` files in your `src/` folder!

## Usage

- Build once

```
npm run build
```

- Dev-Mode (watch files for changes)

```
npm run dev
```
