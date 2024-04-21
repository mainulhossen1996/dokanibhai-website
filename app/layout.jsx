import { Navbar } from "@/components/navbar";
import "@/app/globals.css";
import { Providers } from "./providers";

export default function RootLayout({ children }) {
  return (
    <html className="bg-main max-w-full mx-auto" lang="en">
      <head />
      <body>
        <Providers>
          <div>
            <div className="relative h-full w-full">
              <Navbar />
              <main>{children}</main>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
