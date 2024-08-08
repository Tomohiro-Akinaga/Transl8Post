import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_CMS_SERVICE_DOMAIN ?? "",
  apiKey: process.env.NEXT_PUBLIC_CMS_API_KEY ?? "",
  retry: true,
});
