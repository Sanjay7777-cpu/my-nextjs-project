"use client";
import "./globals.css";
import { useState } from "react";
import Loader from "./components/Loader";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  return (
    <html lang="en">
      <head>
        <title>Dream Digital Marketing</title>
      </head>
      <body>
        {loading ? <Loader setLoading={setLoading} /> : children}
      </body>
    </html>
  );
}
