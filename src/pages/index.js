import Link from "next/link";

export default function Home() {
  return (
    <div>
      afonso.{" "}
      <Link href="/about">
        About
      </Link>
    </div>
  );
}
