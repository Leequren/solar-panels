import { Part, Prisma } from "@prisma/client";
import { prisma } from "../../..";

export async function createRawPart(part: Prisma.PartCreateInput) {
  return await prisma.part.create({
    data: {
      ...part,
    },
  });
}

export async function createPartWithConfig(
  part: Prisma.PartCreateInput,
  rawConfig: Prisma.PartConfigurationCreateInput[]
) {
  const partReply = await prisma.part.create({ data: part });
  const updateConfig = rawConfig.map((configItem) => ({
    ...configItem,
    partId: partReply.id,
  }));
  const configs = await prisma.partConfiguration.createMany({
    data: updateConfig,
  });
  return { partReply, configs };
}

export async function getPartById(id: number) {
  return await prisma.part.findUnique({ where: { id } });
}

export async function getParts() {
  return await prisma.part.findMany();
}

export async function deletePart(id: number) {
  return await prisma.part.delete({ where: { id } });
}
