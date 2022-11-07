import '../styles/globals.css'

export default function RootLayout({ children }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="en" className="text-sans">
        <body>{children}</body>
      </html>
    );
  }