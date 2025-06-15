# Web Framework Benchmark

This project benchmarks the performance of various web frameworks in different languages.

## Frameworks

- Beego (Go) - `Port 8020`
- Echo (Go) - `Port 8010`
- FastAPI (Python) - `Port 5000`
- Fastify (Node.js) - `Port 3000`
- Gin (Go) - `Port 8000`
- Go Fiber (Go) - `Port 8030`
- Hono (Node.js) - `Port 3010`
- Nest (Node.js) - `Port 3020`

## Usage

The benchmarks are run using [autocannon](https://github.com/mcollina/autocannon). You need to install it globally:

```bash
npm install -g autocannon
```

To run the benchmarks, follow the instructions in each framework's directory.

## Contributing

Contributions are welcome! Please submit a pull request with any improvements or new frameworks.

## Docker

To run all the services with Docker, you can use the following command:
