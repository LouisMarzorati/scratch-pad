import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>Scratchin the itch</h1>
      <ul className="links">
        <li>
          <Link href="/swipe">
            <a>swipe</a>
          </Link>
        </li>
        <li>
          <Link href="/animate/blocks">
            <a>blocks</a>
          </Link>
        </li>
        <li>
          <Link href="/animate/snazzy">
            <a>snzy</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
