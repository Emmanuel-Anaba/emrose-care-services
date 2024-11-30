import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Emrose Care Services",
  description:
    "The blog page for EmRose Care Services, a premier company specializing in health training and wellness services.",
  authors: {
    url: "https://github.com/Emmanuel-Anaba",
    name: "Emmanuel Anaba",
  },
};

export default function BlogPage() {
  return (
    <main className="grid">
      <h1 className="m-auto">Welcome to our BlogPage</h1>
    </main>
  );
}
