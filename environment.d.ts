declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      JWT_KEY: string;
      DATABASE_URL: string;
      PASSWORD_KEY: string;
    }
  }
}

export {};
