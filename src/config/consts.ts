import path from "path";

export const uploadDir = path.join(__dirname, "../", "../", "public");
export const passwordKey =
  process.env.PASSWORD_KEY ||
  "d1b600dbeb24fac29a2b19f9522bd312ca9473cfb1f868b700cefdb384c556ef";
export const jwtKey = process.env.JWT_KEY || "jwt_key_default_secret";
