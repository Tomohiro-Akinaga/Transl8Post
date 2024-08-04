import styles from "./page.module.css";
import { client } from "../../libs/client";
import { HomePage } from "../components/pages/HomePage/index";

async function getContents() {
  const response = await client.getAllContents({
    customRequestInit: { cache: "no-store" },
    endpoint: "blog",
  });

  return response;
}

export default async function Home() {
  return <HomePage />;
}
