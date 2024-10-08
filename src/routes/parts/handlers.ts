import { FastifyReply, FastifyRequest } from "fastify";
import { getPartById, getParts } from "./crudParts";

type PartConfiguration = {
  id_configuration: number;
  price: number;
  keyConfig: string;
  valueConfig: string;
  partId: number | null;
};

type TransformedConfig = {
  [keyConfig: string]: {
    [id_configuration: number]: {
      price: number;
      valueConfig: string;
      partId: number | null;
    };
  };
};

export async function getPartsHandler(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const parts = await getParts();
  return reply.send(parts);
}

export async function getPartByIdHandler(
  req: FastifyRequest<{
    Querystring: {
      id: number;
    };
  }>,
  reply: FastifyReply
) {
  console.log(req.query);
  const { id } = req.query;
  console.log(Number(id));
  const part = await getPartById(Number(id));

  if (!part) {
    return reply.status(404).send({ message: "Part not found" });
  }
  console.log(part);
  const transformConfigurations = (
    configurations: PartConfiguration[]
  ): TransformedConfig => {
    return configurations.reduce((acc, config) => {
      if (!acc[config.keyConfig]) {
        acc[config.keyConfig] = {};
      }
      acc[config.keyConfig][config.id_configuration] = {
        price: config.price,
        valueConfig: config.valueConfig,
        partId: config.partId,
      };
      return acc;
    }, {} as TransformedConfig);
  };

  // console.log(transformConfigurations(part.partConfigurations));
  return reply.send({
    ...part,
    partConfigurations: { ...transformConfigurations(part.partConfigurations) },
  });
}
