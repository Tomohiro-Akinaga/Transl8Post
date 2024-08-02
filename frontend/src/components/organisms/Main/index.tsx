import React, { useContext } from "react";
import styles from "./index.module.css";
import BlogItem from "@/components/molecules/BlogItem";
import { BlogsContext } from "../../pages/HomePage";

const Main = () => {
  const blogs = useContext(BlogsContext);

  return (
    <main className={styles.main}>
      <ul>
        {blogs.map((v, i) => (
          <BlogItem key={i} />
        ))}
      </ul>
    </main>
  );
};

export default Main;
