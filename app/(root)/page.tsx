"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function HomePage() {
  const [text] = useTypewriter({
    words: ["health training", "coaching", "wellness services"],
    loop: Infinity,
    delaySpeed: 2000,
  });

  return (
    <main className="grid">
      <header>
        <div>
          <h1>Welcome to EmRose Care Services!</h1>
          <p>
            We offer top-tier
            <span>
              {` ${text}`}
              <Cursor />
            </span>
          </p>
        </div>
      </header>
    </main>
  );
}
