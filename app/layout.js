import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";
import "@/styles/globals.css";

export const metadata = {
  title: "Ghuronti",
  description: "Welcome to Ghuronti! Find Flights, Hotels & Tour Packages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-full h-[400px]   bg-[url('/assets/hero/bghero.png')] bg-no-repeat bg-center bg-cover ">
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
