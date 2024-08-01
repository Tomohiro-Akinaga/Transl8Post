import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "ezrmzpsyt8",
  apiKey: process.env.API_KEY,
});
