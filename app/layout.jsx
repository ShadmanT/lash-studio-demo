import "./globals.css";
export const metadata = {
  title: "Arc Lash & Brow Studio — Toronto",
  description: "Lash extensions, brow lamination, and tinting by certified artists in Toronto. Book your appointment online.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, background: "#F9F6F2" }}>{children}</body>
    </html>
  );
}