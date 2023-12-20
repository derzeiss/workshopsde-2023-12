# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Installing jest

To use Jest as a Test Runner & Framework, do the following

1.  Install required packages:
    ```
    npm i -D @testing-library/jest-dom @testing-library/react @types/jest jest jest-environment-jsdom ts-jest
    ```
2.  Create a `~/jest.config.js` file:

    ```js
    export default {
      preset: 'ts-jest',
      testEnvironment: 'jest-environment-jsdom',
      transform: {
        // process`\*.tsx`files with`ts-jest`
        '^.+\\.tsx?$': 'ts-jest',
      },
      moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/** mocks **/fileMock.js',
      },
      setupFilesAfterEnv: ['./setupTests.js'],
    };
    ```

3.  Create a `~/setupTests.js` file:

    ```ts
    require('@testing-library/jest-dom');
    ```

4.  In `~/tsconfig.json` add:
    ```
    {
      ...
      "esModuleInterop": true,
    }
    ```

````
## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
````

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
