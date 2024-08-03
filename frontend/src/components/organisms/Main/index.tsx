import React, { useContext } from "react";
import styles from "./index.module.css";
import BlogItem from "@/components/molecules/BlogItem";
import { BlogsContext } from "../../pages/HomePage";

const Main = () => {
  const data = useContext(BlogsContext);
  console.log(data);
  const blogs = data.map((v) => {
    return {
      title: v.title,
      description: v.body,
    };
  });
  console.log(blogs);
  return (
    <main className={styles.main}>
      {/* <ul>
        {blogs.map((v, i) => (
          <BlogItem blog={v} key={i} />
        ))}
      </ul> */}
    </main>
  );
};

export default Main;
