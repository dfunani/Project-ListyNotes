import Head from "next/head";
import clientPromise from "../lib/mongodb";
import { InferGetServerSidePropsType } from "next";
import Ellipse from "../public/components/ellipse";
import styles from "../public/styles/signin.module.css";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ListyNotes - Sign In</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.DotRow}>
              <Ellipse width={35} height={35} color={"#8e8e92"} />
              <Ellipse width={35} height={35} color={"#8e8e92"} />
              <Ellipse width={35} height={35} color={"#8e8e92"} />
              <Ellipse width={35} height={35} color={"#8e8e92"} />
            </div>
            <div className={styles.DotRow}>
              <Ellipse width={35} height={35} color={"#8e8e92"} />
              <Ellipse width={35} height={35} color={"#8e8e92"} />
              <Ellipse width={35} height={35} color={"#8e8e92"} />
              <Ellipse width={35} height={35} color={"#8e8e92"} />
            </div>
            <div className={styles.DotRow}>
              <div className={styles.ellipse}>
                <p>LISTY</p>
                <Ellipse width={5} height={5} color={"blue"} />
                <p>NOTES</p>
              </div>
            </div>
            <div className={styles.DotRow}>
              <div className={styles.ellipse}>
                <p>WHERE TO</p>
                <Ellipse width={5} height={5} color={"blue"} />
                <p>DO IT NOTES</p>
              </div>
              <Ellipse width={35} height={35} color={"blue"} />
            </div>
            <div className={styles.DotRow}>
              <Ellipse width={35} height={35} color={"#8e8e92"} />
              <Ellipse width={35} height={35} color={"#8e8e92"} />
              <Ellipse width={35} height={35} color={"#8e8e92"} />
              <Ellipse width={35} height={35} color={"#8e8e92"} />
            </div>
            <div className={styles.DotRow}>
              <Ellipse width={35} height={35} color={"#8e8e92"} />
              <Ellipse width={35} height={35} color={"#8e8e92"} />
              <Ellipse width={35} height={35} color={"#8e8e92"} />
              <Ellipse width={35} height={35} color={"#8e8e92"} />
            </div>
          </div>
          <div className={styles.right}>
            <form action="./api/endpoint" method="post">
              <input
                type="text"
                name="username"
                id="Username"
                placeholder="Username"
                required
              />
              <div>
                <input
                  type="email"
                  name="email"
                  id="Email"
                  placeholder="Email"
                  required
                />
                <button type="submit">
                  <img src="#" alt="Arrow" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
