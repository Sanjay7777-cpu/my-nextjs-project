// app/layout.jsx
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Dream Digital Marketing</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
