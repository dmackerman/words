import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <h2>Dave Ackerman</h2>
      <div class="links">
        <Link href="/">
          <a>Blog</a>
        </Link>
        <Link href="/">
          <a>About</a>
        </Link>
      </div>
    </nav>
  );
}
