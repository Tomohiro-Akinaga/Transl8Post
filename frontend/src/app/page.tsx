import styles from "./page.module.css";
import { client } from "../../libs/client";

async function getContents() {
  const response = await client.getAllContents({
    customRequestInit: { cache: "no-store" },
    endpoint: "blog",
  });

  return response;
}

export default async function Home() {
  const contents = await getContents();
  return (
    <ul>
      {contents.map((item) => {
        return <li key={item.id}>{item.title}</li>;
      })}
    </ul>
  );
}
