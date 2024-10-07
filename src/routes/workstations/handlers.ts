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
  const mainWorkstation = await getMainPageWorkstation();
  return reply.send({ workstation: mainWorkstation });
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
