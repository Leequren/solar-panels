import { FastifyInstance } from "fastify";
import { setupUploadRoutes } from "./upload";
import { setupFaqRoutes } from "./faq";

export async function setupRoutes(app: FastifyInstance) {
  await app.register(setupUploadRoutes);
  await app.register(setupFaqRoutes);
}
