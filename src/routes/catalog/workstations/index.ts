import { getTokenSourceMapRange } from "typescript";
import { prisma } from "../../..";

async function getRawWorkstations() {
  return await prisma.workstation.findMany();
}

async function getRawWorkstationById(id: number) {
  return await prisma.workstation.findFirst({
    where: {
      id,
    },
  });
}

async function getExtendedPropertiesByWorkstationId(id: number) {
  return await prisma.workstation.findMany({
    where: {
      id,
    },
    select: {
      quickChargeModule: true,
      invertorModule: true,
      leadBattery12VChargingModule: true,
      powerbankModule: true,
      solarTrackerModule: true,
      solarPanelModule: true,
      jumpStarter: true,
      universalVoltageModule: true,
    },
  });
}
