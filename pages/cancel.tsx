import Head from "next/head";
import Link from "next/link";

export default function ThankYou() {
  return (
    <div>
      <Head>
        <title>TomDoesTech</title>
        <meta name="description" content="TomDoesTech" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-2xl p-4 m-auto flex">
        <div className="flex-1 p-4">
          <h1 className="text-3xl font-bold">Sorry you had to cancel</h1>
          <p>See you next time</p>
        </div>

        <Link href="/">Home</Link>
      </main>
    </div>
  );
}
