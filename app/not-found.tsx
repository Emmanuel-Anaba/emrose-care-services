import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "@/components/themeswitcher";
import img from "@/public/404.svg";

export default function NotFound() {
  return (
    <main className="grid h-svh text-center">
      <ThemeSwitcher />
      <div className="grid gap-6 m-auto">
        <Image
          priority
          src={img}
          alt="a-404-img"
          className="h-96 w-96 m-auto"
        />
        <h1>404 - Page Not Found</h1>
        <p>The page you’re looking for does not exist.</p>
        <Link href="/" className="btn m-auto">
          Go Home
        </Link>
      </div>
    </main>
  );
}
