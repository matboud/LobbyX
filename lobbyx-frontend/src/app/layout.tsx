import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/organisms";
import classNames from "classnames";
import Head from "next/head";

import ReduxProvider from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LobbyX",
  description: "Casino Games list lobby",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReduxProvider>
      <html lang="en">
        <Head>
          <link rel="preload" href="/logo.png" as="image" />
        </Head>
        <body className={classNames(inter.className, "h-screen w-full")}>
          <Header />
          <div className="pt-[130px] h-full">{children}</div>
          {/* TODO: footer */}
          
        </body>
      </html>
    </ReduxProvider>
  );
}
