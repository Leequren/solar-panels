import { FastifyReply, FastifyRequest } from "fastify";
import { getParts } from "./crudParts";

export async function getPartsHandler(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const parts = await getParts();
  return reply.send(parts);
}
