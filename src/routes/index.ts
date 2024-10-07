import { FastifyInstance } from "fastify";
import { setupUploadRoutes } from "./upload";
import { setupFaqRoutes } from "./faq";
import { setupWorkstationRoutes } from "./workstations";
import { setupPartsRoutes } from "./parts";

export async function setupRoutes(app: FastifyInstance) {
  await app.register(setupUploadRoutes);
  await app.register(setupFaqRoutes);
  await app.register(setupWorkstationRoutes);
  await app.register(setupPartsRoutes);
}
