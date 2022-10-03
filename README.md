# template-deno-webapp

[![version](https://img.shields.io/github/v/release/flowscripter/template-deno-webapp?sort=semver)](https://github.com/flowscripter/template-deno-webapp/releases)
[![build](https://img.shields.io/github/workflow/status/flowscripter/template-deno-webapp/release-deno-webapp)](https://github.com/flowscripter/template-deno-webapp/actions/workflows/release-deno-webapp.yml)
[![coverage](https://codecov.io/gh/flowscripter/template-deno-webapp/branch/main/graph/badge.svg?token=EMFT2938ZF)](https://codecov.io/gh/flowscripter/template-deno-webapp)
[![dependencies](https://img.shields.io/endpoint?url=https%3A%2F%2Fdeno-visualizer.danopia.net%2Fshields%2Fupdates%2Fhttps%2Fraw.githubusercontent.com%2Fflowscripter%2Ftemplate-deno-webapp%2Fmain%2Fmod.ts)](https://github.com/flowscripter/template-deno-webapp/blob/main/deps.ts)
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/raw.githubusercontent.com/flowscripter/template-deno-webapp/main/mod.ts)
[![license: MIT](https://img.shields.io/github/license/flowscripter/template-deno-webapp)](https://github.com/flowscripter/template-deno-webapp/blob/main/LICENSE)

> Project template for a Deno based webapp with Deno and Rust based WASM library dependencies.

## Project Template Usage

1. Use as a
   [template](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template)
   to create a new repository.
2. Update links and references in `README.md`.

## Hosted Webapp Demo

Go to: https://flowscripter.github.io/template-deno-webapp/

## Development

Run: `deno run --allow-net mod.ts`

Test: `deno test -A --unstable`

Lint: `deno fmt mod.ts deps.ts src/ tests/`

Bundle: `deno bundle mod.ts html/mod.bundle.js`

Serve: `cd html && python3 -m http.server 8000` and then...

Verify: Browse to http://127.0.0.1:8000/index.html and check that the browser console displays:

    INFO Hello
    INFO World
    INFO Hello
    INFO World 4

## Functional Tests

Refer to [functional_tests/README.md](functional_tests/README.md)

## Documentation

### Overview

```mermaid
classDiagram
    Foo <|-- Bar
```

### API

Link to auto-generated API docs for the library:

[API Documentation](https://doc.deno.land/https/raw.githubusercontent.com/flowscripter/template-deno-webapp/main/mod.ts)

## License

MIT © Flowscripter

