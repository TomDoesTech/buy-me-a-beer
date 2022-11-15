import Head from "next/head";
import Link from "next/link";

export default function ThankYou() {
  return (
    <div>
      <Head>
        <title>Thank You</title>
        <meta name="description" content="TomDoesTech" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-2xl p-4 m-auto flex">
        <div className="flex-1 p-4">
          <h1 className="text-3xl font-bold">Thank you!</h1>
          <p>Your donation has been received.</p>
        </div>
        <Link href="/">Home</Link>
      </main>
    </div>
  );
}
