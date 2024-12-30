import { Metadata } from "next";
import Nav from "../components/Navbar";
import "../styles/global.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next Movies",
  },
  description: "The best movies on the best framework",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
