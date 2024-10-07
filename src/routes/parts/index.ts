import { FastifyInstance } from "fastify";
import { getPartsHandler } from "./handlers";

export async function setupPartsRoutes(app: FastifyInstance) {
  app.get("/api/parts/", getPartsHandler);
}
