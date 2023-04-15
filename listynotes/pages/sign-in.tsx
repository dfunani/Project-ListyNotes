import Head from "next/head";
import Ellipse from "../public/components/ellipse";
import styles from "../public/styles/signin.module.css";
import { useState } from "react";
import { NextRouter, useRouter } from "next/router";

export default function Home() {
  const [emailState, setEmail] = useState("");
  const [passwordState, setPassword] = useState("");
  const [usernameState, setUsername] = useState("");
  const router: NextRouter = useRouter();

  const onFormSubmit = async (e: any) => {
    e.preventDefault();

    const email = emailState;
    const password = passwordState;
    const username = usernameState;

    if (!email || !username || !password) {
      alert("Invalid details");
      return;
    }

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    //Await for data for any desirable next steps
    const data = await res.json();

    if (data.response === "Success") router.push("/");
  };
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
            <form
              action="/api/auth/signup"
              method="post"
              onSubmit={(e: any) => onFormSubmit(e)}
            >
              <input
                type="text"
                name="username"
                id="Username"
                placeholder="Username"
                required
                minLength={6}
                onChange={(e: any) => setUsername(() => e.target.value)}
              />
              <input
                type="email"
                name="email"
                id="Email"
                placeholder="Email"
                minLength={10}
                required
                onChange={(e: any) => setEmail(() => e.target.value)}
              />
              <div>
                <input
                  type="password"
                  name="password"
                  id="Password"
                  placeholder="Passsword"
                  minLength={6}
                  required
                  onChange={(e) => setPassword(() => e.target.value)}
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
