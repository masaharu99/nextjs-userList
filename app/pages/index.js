import { useState } from "react";
import Head from "next/head";

import styles from "@/styles/Home.module.css";

export default function Home() {
  const [userId, setUserId] = useState("");

  const onChangeUserId = (e) => {
    setUserId(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>ユーザー管理アプリ</h1>
        <hr />
        <div className={styles.form}>
          <input
            type="text"
            value={userId}
            placeholder="ユーザーID"
            onChange={onChangeUserId}
            className={styles.input_border}
          />
          <button className={`${styles.input_border} ${styles.button}`}>
            ログイン
          </button>
        </div>
      </div>
    </div>
  );
}
