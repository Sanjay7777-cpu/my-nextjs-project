"use client";
import { useEffect, useState } from "react";

export default function Loader({ setLoading }) {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="loader-container">
      {showText && (
        <div className="text-bg">
          <h1 className="typing-text">
            WELCOME TO DREAM DIGITAL MARKETING....
            <span className="cursor">|</span>
          </h1>
        </div>
      )}
    </div>
  );
}
