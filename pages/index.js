import Head from "next/head";

import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Final  Google analytics demo Result</h1>
        <Link href="/about">
        about
        </Link>
        <Link href="/contact">
        Contact
        </Link>
      </main>
    </div>
  );
}
