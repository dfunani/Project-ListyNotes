import Head from "next/head";
import clientPromise from "../lib/mongodb";
import { InferGetServerSidePropsType } from "next";
import { Db } from "mongodb";
const db_context = require("../types/helpers");

export async function getServerSideProps(context) {
  try {
    const db: Db = await db_context();
    const users = await db
      .collection("Users")
      .find({})
      .sort({ metacritic: -1 })
      .toArray();

    return {
      props: {
        isConnected: true,
        users: JSON.stringify(users),
      },
    };
  } catch (e) {
    return {
      props: { isConnected: false },
    };
  }
}

export default function Home({
  isConnected,
  users,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div className="container">
      <Head>
        <title>ListyNotes - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {users}
      <main></main>
    </div>
  );
}
