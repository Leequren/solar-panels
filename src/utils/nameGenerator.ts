import path from "path";
import crypto from "node:crypto";
export function uniqueNameGenerator(originalName: string) {
  const ext = path.extname(originalName);
  const randomString = crypto.randomBytes(8).toString("hex");
  return `${Date.now()}.${randomString}${ext}`;
}
