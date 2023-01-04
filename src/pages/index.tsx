import { type NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

const DeckNoSSR = dynamic(() => import("../componets/Deck"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <>
      <Analytics />
      <Head>
        <title>Swipe Left On the NYPD | S.T.O.P</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between bg-gradient-to-b from-[#e35e8d] to-[#4f444c]">
        <div className="container flex min-h-screen  flex-col items-center justify-between px-4 py-4">
          <h1 className="pb-2 text-center text-5xl font-extrabold tracking-tight text-white sm:pb-4 md:text-[5rem]">
            Surveillance Dating
          </h1>
          <DeckNoSSR />
          <footer>
            <div className="pb-2 sm:flex sm:items-center sm:justify-between ">
              <span className=" animate__shakeX text-align text-center text-sm text-gray-900 ">
                Copyright© 2022,{" "}
                <a
                  href="https://www.stopspying.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:underline"
                >
                  Surveillance Technology Oversight Project, Inc.
                </a>{" "}
                (STOP). All rights reserved. S.T.O.P.® is a registered
                trademark.
              </span>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
};

export default Home;
