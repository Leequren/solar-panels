declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number | undefined;
      JWT_KEY: string | undefined;
      DATABASE_URL: string | undefined;
      PASSWORD_KEY: string | undefined;
      CADDY_CONFIG: string | undefined;
    }
  }
}

export {};
