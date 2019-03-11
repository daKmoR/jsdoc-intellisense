# Testing JsDoc for Intellisense & Type Linting with typescript

Setup:
```bash
git clone ...
cd jsdoc-intellisense
yarn install
```

## Live linting via IDE

Works perfectly fine when using a `jsconfig.json`.
JsDocs only linting stops if a `tsconfig.json` exists...


## Linting to be used in a CI

JsDoc does alone does not seem to be enough when using packages from node_modules.

Run
```bash
npm run lint:types
```

### Expected

Error "An argument for 'name' was not provided." for
```
msg += foo();
msg += nom();
```

### Actual

Error "An argument for 'name' was not provided." for
```
msg += nom();
```
