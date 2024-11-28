import Link from "next/link";
import { RiExternalLinkFill } from "react-icons/ri";

export default function Footer() {
  return (
    <footer>
      <div>
        <p>
          &copy; {new Date().getFullYear()} EmRose Care Services. All rights
          reserved
        </p>
        <p>
          Built by{" "}
          <Link
            className="link"
            target="_blank"
            href="https://github.com/Emmanuel-Anaba">
            Emmanuel Anaba
            <RiExternalLinkFill />
          </Link>
        </p>
      </div>
    </footer>
  );
}
