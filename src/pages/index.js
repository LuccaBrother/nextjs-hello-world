import Link from "next/link";

export default function Home() {
  return (
    <div>
      lá ele.{" "}
      <Link href="/about">
        About
      </Link>
    </div>
  );
}
