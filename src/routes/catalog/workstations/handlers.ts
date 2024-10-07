import { FastifyReply, FastifyRequest } from "fastify";
import {
  getCatalogWorkstations,
  getMainPageWorkstation,
  getPreviewCatalogWorkstations,
} from "./crudWorkstations";

export async function getMainWorkstationHandler(
  req: FastifyRequest,
  reply: FastifyReply
) {
  return reply.send({ workstation: getMainPageWorkstation() });
}

export async function getPreviewCatalogWorkstationsHandler(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const workstations = await getPreviewCatalogWorkstations();
  return reply.send(workstations);
}

export async function getCatalogWorkstationsHandler(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const workstations = await getCatalogWorkstations();
  return reply.send(workstations);
}
