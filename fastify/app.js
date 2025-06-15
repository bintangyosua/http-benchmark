const fastify = require("fastify")({
  logger: true,
});

fastify.get("/", function (request, reply) {
  reply.send("Hello, World!");
});

fastify.listen({ port: 3010 }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
