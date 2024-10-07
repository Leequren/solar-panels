import { FastifyInstance } from "fastify";
import {
  getCatalogWorkstationsHandler,
  getMainWorkstationHandler,
  getPreviewCatalogWorkstationsHandler,
} from "./handlers";

export async function setupWorkstationRoutes(app: FastifyInstance) {
  app.get(
    "/api/workstations/getPreviewCatalog/",
    getPreviewCatalogWorkstationsHandler
  );
  app.get("/api/workstation/getMain/", getMainWorkstationHandler);
  app.get("/api/workstations/catalog", getCatalogWorkstationsHandler);
}
