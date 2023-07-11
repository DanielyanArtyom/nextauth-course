import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "../styles/layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex h-screen bg-blue-400">
          <div className="m-auto bg-slate-50 rounded-md w-3/5 h-3/4 grid lg:grid-cols-2">
            <div className={styles.imgStyle}>
              <div className={styles.cartoonimg} />
              <div className={styles.cloud_one}></div>
              <div className={styles.cloud_two}></div>
            </div>
            <div className="right flex flex-col justify-evenly ">
              <div className="text-center py-10">{children}</div>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
