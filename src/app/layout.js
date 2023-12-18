// import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "@/components/Header/Header";

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sankalan Dasgupta",
  description:
    "Hi, everyone. My name is Sankalan Dasgupta and I’m a versatile frontend developer with a year of experience in creating scalable and reusable solutions. I have a passion for web development and I enjoy learning new technologies and frameworks. I have used HTML, CSS, JavaScript, TypeScript, Vitw, React, Node, Angular, and MongoDB to build various web applications. Currently, I work at p360 where I develop web apps for our innovative IOT solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <div className="max-w-[100vw] min-w-[270px] bg-black min-h-[100vh] px-[1.25em] py-[2.5em] md:px-[2.5em] md:py-[5em] items-center flex-col mx-auto">
          <Header>
            {children}
            <SpeedInsights />
          </Header>
        </div>
      </body>
    </html>
  );
}
