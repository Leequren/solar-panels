import path from "node:path";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import fastify from "fastify";
import fastifyMultipart from "@fastify/multipart";
import cors from "@fastify/cors";
import fastifyStatic from "@fastify/static";
import fastifyJwt from "@fastify/jwt";
import { setupRoutes } from "./routes";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

export const prisma = new PrismaClient();

declare module "@fastify/jwt" {
  interface FastifyJWT {
    payload: { id: number; login: string };
  }
}
async function checkDatabaseConnection() {
  try {
    await prisma.$connect();
    console.log("Подключение к базе данных успешно установлено");
  } catch (err) {
    console.error("Ошибка подключение к базе данных", err);
  } finally {
    await prisma.$disconnect();
  }
}

const main = async () => {
  const app = fastify();
  const PORT = Number(process.env.PORT || 5000);
  const jwtKey = process.env.JWT_KEY || "jwt key123455";
  await app.register(cors);
  await app.register(fastifyMultipart);
  await app.register(fastifyStatic, {
    root: path.join(__dirname, "../", "public/"),
    prefix: "/public",
  });

  await app.register(fastifyJwt, {
    secret: jwtKey,
  });

  await app.register(setupRoutes);
};

main().catch((err) => {
  console.error(err);
});
