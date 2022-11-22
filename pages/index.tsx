import Head from 'next/head';
import React from 'react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wishlist</title>
        <meta name="description" content="Wishlist" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="">Wishlist</h1>
      </main>
    </div>
  );
}
