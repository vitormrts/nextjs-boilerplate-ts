import { Config } from "./config.types";

const config: Config = {
  isProd: process.env.IS_PROD as unknown as boolean,
  baseUrl: process.env.BASE_URL,
  brand: process.env.BRAND as Config["brand"],
  locale: process.env.LOCALE,
};

export default config;
