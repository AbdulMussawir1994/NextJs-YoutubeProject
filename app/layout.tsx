import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
//
export const metadata: Metadata = {
  title: "Employee Manager",
  description: "A simple app to create, view, edit, and delete employee records.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="container py-4">{children}</main>
      </body>
    </html>
  );
}
