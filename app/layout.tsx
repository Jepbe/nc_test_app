/* eslint-disable @next/next/no-head-element */
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className='font-sans'>
      <head></head>
      <body>{children}</body>
    </html>
  );
}
