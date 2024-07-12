import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taifa Letu",
  description: "The People's Digest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#FEF9E7]">
        <div className="flex flex-row justify-between">
          <div className="my-5 mx-10 flex items-center justify-center">
            <a
              className="pointer-events-none flex flex-col place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <Image
                src="/assets/img/mainlogo.jpeg"
                alt="Main Logo"
                className="dark:invert-0"
                width={100}
                height={24}
                priority
              />
            <h3 className="">Taifa Letu</h3>
            </a>
          </div>
          <div className="my-5 flex items-center justify-center">
            <h3>The People's Digest</h3>
          </div>
          <div className="my-5 mr-20 flex items-center justify-center">
            <button className="rounded-full bg-[#040979] p-5 text-white">Log in</button>
          </div>
        </div>

        {children}
      </body>
    </html>
  );
}
