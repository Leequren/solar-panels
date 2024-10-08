import { FastifyInstance } from "fastify";
import { getPartByIdHandler, getPartsHandler } from "./handlers";

export async function setupPartsRoutes(app: FastifyInstance) {
  app.get("/api/parts/", getPartsHandler);
  app.get("/api/parts/getById/", getPartByIdHandler);
}
