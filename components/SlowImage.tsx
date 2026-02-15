"use client";

import { useState, useEffect } from "react";

interface SlowImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function SlowImage({ src, alt, className }: SlowImageProps) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={className} style={{ position: "relative" }}>
      {!loaded && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f0f0f0",
            color: "#767676",
            fontSize: "0.875rem",
          }}
        >
          Loading image...
        </div>
      )}
      {loaded && (
        <img
          src={src}
          alt={alt}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        />
      )}
    </div>
  );
}
