import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { ThemeProvider } from "@/theme/theme-provider";
import { Navbar } from "@/features/Navbar";
import { Aside } from "@/features/Aside";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home",
  description: "Home page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "bg-background dark:bg-primary")}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-full">
            <Navbar />
            <Aside />
            <div className="p-2 sm:ml-48">
              <div className="mt-16">
               
            {children}
              </div>
            </div>
          </div>
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
