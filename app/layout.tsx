import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
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
    <ClerkProvider>
      <html lang="en">
        <body className="bg-[#FEF9E7]">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:my-5 md:mx-10 flex items-center justify-center">
              <a
                className="pointer-events-none flex flex-col place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/assets/img/mainlogo.jpeg"
                  alt="Main Logo"
                  className="dark:invert-0"
                  width={100}
                  height={24}
                  priority
                />
                <h3 className='text-[#040979]'>Taifa Letu</h3>
              </a>
            </div>
            <div className="md:my-5 md:mx-7 text-center flex items-center justify-center">
              <h3 className="font-medium text-2xl md:text-5xl text-[#040979]">The People's Digest</h3>
            </div>
            <div className="my-5 md:mx-10 mx-20 flex items-center justify-center">
              <SignedOut>
                <SignInButton className="rounded-full bg-[#040979] hover:bg-[#1a1d5c] p-5 text-white" />
                {/* <button className="rounded-full bg-[#040979] hover:bg-[#1a1d5c] p-5 text-white">Log in</button> */}
              </SignedOut>
              <SignedIn>
                <UserButton
                  appearance={{
                    elements: {
                      avatarImage: "w-10 h-10"
                    }
                  }}
                />
              </SignedIn>
            </div>
          </div>


          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
