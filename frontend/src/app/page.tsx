import styles from "./page.module.css";
import { client } from "../../libs/client";

export const Home = async () => {
  const data = await client.get({ endpoint: "blog" });
  console.log(data.contents[0]);
  return <main className={styles.main}>{<p>{data.contents[0].title}</p>}</main>;
};

export default Home;
