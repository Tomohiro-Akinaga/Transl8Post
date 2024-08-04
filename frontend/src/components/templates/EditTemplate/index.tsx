import React from "react";
import styles from "./index.module.css";
import { Header } from "@/components/organisms/Header";
import { Form } from "@/components/organisms/Form";

export const EditTemplate = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Form />
    </div>
  );
};
