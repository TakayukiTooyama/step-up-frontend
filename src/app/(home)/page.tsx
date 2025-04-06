import Link from "next/link";

export default function Home() {
  const links = [
    { href: "/section-1", label: "1. useStateを理解しよう" },
    { href: "/section-2", label: "2.カウンターアプリを作ってみよう" },
    { href: "/section-3", label: "3.TODOアプリを作ってみよう" },
  ];
  return (
    <div className="w-full p-6">
      <h1 className="text-2xl font-bold mb-2">React/Next研修</h1>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href} className="hover:underline hover:text-blue-400">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
