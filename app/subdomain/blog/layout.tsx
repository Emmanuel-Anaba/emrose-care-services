import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Emrose Care Services",
  description:
    "The blogs site for EmRose Care Services, a premier company specializing in health training and wellness services.",
  authors: {
    url: "https://github.com/Emmanuel-Anaba",
    name: "Emmanuel Anaba",
  },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
