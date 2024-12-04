const server = require("fastify")({});
const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || 8000;
const Recipe = require("./recipe");

server.get("/", () => {
  return "Hello from Distributed Node.js!";
});

server.get("/recipes/:id", async (req, reply) => {
  const recipe = new Recipe(req.params.id);
  await recipe.hydrate();
  return recipe;
});

server.listen({ port: PORT, host: HOST }, () => {
  console.log(`Producer running at http://${HOST}:${PORT}`);
});
