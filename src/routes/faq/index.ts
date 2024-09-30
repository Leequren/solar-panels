import { FastifyInstance } from "fastify";
import {
  createFaqHandler,
  deleteFaqHandler,
  getAllFaqHandler,
} from "./crudFAQ";

export async function setupFaqRoutes(app: FastifyInstance) {
  app.get("/api/faq", getAllFaqHandler);
  app.post("/api/faq/create", createFaqHandler);
  app.post("/api/faq/delete", deleteFaqHandler);
}
