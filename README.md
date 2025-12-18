# Context

Context is a lightweight project designed to help developers manage and share application context in a clear, scalable way. This repository provides the core implementation, examples, and documentation to get started quickly.

## Features

* Simple and intuitive API
* Modular and extensible structure
* Easy integration with existing projects
* Well-documented examples

## Getting Started

### Prerequisites

* Node.js (v16+ recommended)
* npm or yarn

### Installation

```bash
npm install context
# or
yarn add context
```

### Basic Usage

```js
import { createContext } from "context";

const AppContext = createContext({
  user: null,
  theme: "light",
});
```

## Project Structure

```
context/
├─ src/
│  ├─ index.js
│  └─ context.js
├─ examples/
├─ tests/
├─ README.md
└─ package.json
```

## Configuration

You can configure Context by passing options during initialization:

```js
createContext(initialState, options);
```

Available options:

* `debug` – enable debug logging
* `immutable` – prevent direct state mutation

## Examples

Check the `examples/` folder for real-world use cases and patterns.

## Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch (`feature/my-feature`)
3. Commit your changes
4. Open a Pull Request

## License

This project is licensed under the MIT License.

---

If you have questions or suggestions, feel free to open an issue or start a discussion.
