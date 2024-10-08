import path from "node:path";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import fastify, { FastifyReply, FastifyRequest } from "fastify";
import fastifyMultipart from "@fastify/multipart";
import cors from "@fastify/cors";
import fastifyStatic from "@fastify/static";
import fastifyJwt from "@fastify/jwt";
import { setupRoutes } from "./routes";
import fastifyProxy from "@fastify/http-proxy";
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

const mainBackend = async () => {
  const app = fastify({ logger: true });
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

  await app.listen({ port: PORT, host: "0.0.0.0" });
  console.log(`Backend Server is running on ${PORT}`);
};

// const mainReverseProxy = async () => {
//   const app = fastify({ logger: true });
//   const PORT = 80;

//   // app.addHook(
//   //   "onRequest",
//   //   async (
//   //     request: FastifyRequest<{
//   //       Querystring: { login: string; password: string };
//   //     }>,
//   //     reply
//   //   ) => {
//   //     if (request.url.startsWith("/studio")) {
//   //       const { login, password } = request.query;
//   //       if (login !== "admin" || password !== "admin") {
//   //         reply.status(401).send("Unauthorized");
//   //         return;
//   //       }
//   //     }
//   //   }
//   // );
//   await app.register(fastifyProxy, {
//     upstream: "http://localhost:5000",
//     prefix: "/api",
//     rewritePrefix: "/",
//   });

//   await app.register(fastifyProxy, {
//     upstream: "http://localhost:5555",
//     prefix: "/studio",
//     rewritePrefix: "",
//     preHandler: (request, reply, done) => {
//       console.log("Original URL:", request.url);

//       if (
//         request.url.includes("static") ||
//         request.url.includes(".js") ||
//         request.url.includes(".css") ||
//         request.url.includes("assets")
//       ) {
//         request.raw.url = request.url.replace("/studio", "");
//       }

//       done();
//     },
//   });

//   await app.listen({ port: PORT });
//   console.log(`Reverse proxy is running on http://localhost:${PORT}`);
// };

// mainReverseProxy().catch((err) => {
//   console.error(err);
// });

mainBackend().catch((err) => {
  console.error(err);
});
