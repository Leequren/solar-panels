import { FastifyReply, FastifyRequest } from "fastify";

import { createWriteStream, writeFile } from "fs";
import path from "path";
import { uniqueNameGenerator } from "../../utils/nameGenerator";
import { uploadDir } from "../../config/consts";

export async function uploadImageHandler(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const image = await req.file();

  if (!image) {
    return reply.send("Error uploadings");
  }
  const { file } = image;
  const filename = uniqueNameGenerator(image.filename);
  const saveTo = path.join(uploadDir, filename);
  console.log(saveTo);
  const writeStream = createWriteStream(saveTo);
  file.pipe(writeStream);

  writeStream.on("finish", () => {
    return reply.send({ path: `/public/${filename}` });
  });
  writeStream.on("error", () => {
    return reply.send({ message: "error uploading" });
  });

  return reply.send({ path: `/public/${filename}` });
}
