# cursortest

Minimal Node.js sample used to verify that the Cloud Agent environment can install dependencies and run scripts.

## Requirements

- Node.js 18 or newer

## Install

This project has no npm dependencies. From the repository root:

```bash
npm install
```

(`npm install` completes immediately with an empty dependency tree.)

## Run

Print a confirmation message:

```bash
npm start
```

Run the smoke test (spawns `index.js`, checks output, exits 0):

```bash
npm test
```

You can also run the entry script directly:

```bash
node index.js
```
