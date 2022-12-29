import { type NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";

const DeckNoSSR = dynamic(() => import("../componets/Deck"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Swipe Left On the NYPD | S.T.O.P</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#e35e8d] to-[#4f444c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-4">
          <h1 className="text-center text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Swipe Left on the NYPD
          </h1>
          <DeckNoSSR />
        </div>

        <footer>
          <div className="pb-2 sm:flex sm:items-center sm:justify-between ">
            <span className=" animate__shakeX text-align text-center text-sm text-gray-900 ">
              Copyright© 2022,{" "}
              <a
                href="https://www.stopspying.org/"
                target="_blank"
                className="hover:underline"
              >
                Surveillance Technology Oversight Project, Inc.
              </a>{" "}
              (STOP). All rights reserved. S.T.O.P.® is a registered trademark.
            </span>
          </div>
        </footer>
      </main>
    </>
  );
};

export default Home;
