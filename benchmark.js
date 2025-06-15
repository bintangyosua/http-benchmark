import autocannon from "autocannon";
import { PassThrough } from "stream";

function runBenchmark(url, label) {
  const buf = [];
  const outputStream = new PassThrough();

  const instance = autocannon({
    url,
    connections: 100,
    duration: 30,
    pipelining: 10,
  });

  autocannon.track(instance, { outputStream });

  outputStream.on("data", (data) => buf.push(data));
  instance.on("done", () => {
    console.log(`\n🏁 Benchmark Selesai: ${label}\n`);
    console.log(Buffer.concat(buf).toString());
  });
}

// Jalankan dua benchmark
runBenchmark("http://localhost:3000", "Hono");
runBenchmark("http://localhost:3001", "Echo Go");
