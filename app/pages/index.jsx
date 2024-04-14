import { useState } from "react";

import { useAuth } from "@/pages/api/users";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Home() {
  const [userId, setUserId] = useState("");
  const router = useRouter();

  const onChangeUserId = (e) => {
    setUserId(e.target.value);
  };

  const onClickLogin = async () => {
    if (await useAuth(userId)) {
      router.push("/users");
    } else {
      setUserId("");
      router.push("/");
    }
  };

  return (
    <>
      <Head>
        <title>ログイン</title>
      </Head>

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
            <button
              onClick={onClickLogin}
              className={`${styles.input_border} ${styles.button}`}
            >
              ログイン
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
