import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { uploadImageHandler } from "./uploadImage";

export async function setupUploadRoutes(app: FastifyInstance) {
  app.post("/upload/image", uploadImageHandler);
}
