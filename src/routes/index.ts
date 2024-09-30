import { FastifyInstance } from "fastify";
import { setupUploadRoutes } from "./upload";

export async function setupRoutes(app: FastifyInstance) {
  await app.register(setupUploadRoutes);
}
