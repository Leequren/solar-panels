import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../..";

export async function createFaq(title: string, answer: string) {
  return await prisma.faq.create({ data: { title, answer } });
}

export async function getAllFaqs() {
  return await prisma.faq.findMany();
}

export async function getFaqById(id: number) {
  return await prisma.faq.findUnique({ where: { id } });
}

export async function updateFaq(id: number, title: string, answer: string) {
  return await prisma.faq.update({
    where: { id },
    data: { title, answer },
  });
}

export async function deleteFaq(id: number) {
  return await prisma.faq.delete({ where: { id } });
}

export async function getAllFaqHandler(
  req: FastifyRequest,
  reply: FastifyReply
) {
  const faqs = await getAllFaqs();
  return reply.send(faqs);
}

export async function createFaqHandler(
  req: FastifyRequest<{
    Body: {
      title: string;
      answer: string;
    };
  }>,
  reply: FastifyReply
) {
  const { title, answer } = req.body;
  const newFaq = await createFaq(title, answer);
  return reply.send(newFaq);
}

export async function deleteFaqHandler(
  req: FastifyRequest<{ Body: { idFaq: number } }>,
  reply: FastifyReply
) {
  const { idFaq } = req.body;
  try {
    await deleteFaq(idFaq);
    return reply.send({ message: "FAQ вопрос был успешно удален" });
  } catch (e) {
    console.error(e);
    return reply.code(500).send({ message: "Ошибка удаления FAQ вопроса" });
  }
}
