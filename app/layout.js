import Header from "@/components/shared/Header";
import "@/styles/globals.css";

export const metadata = {
  title: "Ghuronti",
  description: "Welcome to Ghuronti! Find Flights, Hotels & Tour Packages",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
