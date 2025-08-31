import "./globals.css";

export const metadata = {
  title: "Hodo Portfolio",
  description: "Portfolio site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
