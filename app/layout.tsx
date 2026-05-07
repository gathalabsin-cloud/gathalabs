// =========================
// 📁 app/layout.js
// =========================
export const metadata = {
  title: "Gatha Labs",
  description: "Learn → Build → Earn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}