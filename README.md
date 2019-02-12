# Electron-Angular App

This project was generated with Angular CLI version 7.3.1 and Electron 4.0.4.

## Development server (Angular)

Run `ng serve` for running angular container. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development server (Electron)

Run `npm run electron` for running electron container.

## Your package.json must contain the following snippet in order to use TypeScript in Electron and in the tests.

test/root.ts is just an example of this project. Provides the local where the tests are, e.g. src/**/*.spec.ts

```javascript
{
  "name": "my-app",
  "version": "0.0.0",
  "main": "electron/dist/main.js",
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "test": "mocha --require ts-node/register test/root.ts",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "electron": "ng build --base-href ./ && tsc --p electron && electron ."
  }, ...
```

## You must create tsconfig.json in your Electron directory /electron.
```json
{
    "compileOnSave": false,
    "compilerOptions": {
      "baseUrl": "./",
      "outDir": "./dist",
      "sourceMap": true,
      "declaration": false,
      "module": "commonjs",
      "moduleResolution": "node",
      "emitDecoratorMetadata": true,
      "experimentalDecorators": true,
      "target": "es5",
      "typeRoots": ["node_modules/@types"],
      "lib": ["es2018", "dom"]
    }
  }
```
## Setup to use TypeScript in mocha tests.

 !!! IMPORTANT: In tsconfig.json in the root of your project, change "module": "es2015" to "module": "commonjs".

```javascript
    npm install --save-dev mocha chai
    npm install --save-dev ts-node typescript
    npm install --save-dev @types/chai @types/mocha
    npm test
```
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
